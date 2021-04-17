// Imports
const express = require("express");
const router = express.Router();

const multer = require("multer");
const upload = multer();

const bodyParser = require("body-parser");
const { json } = require("body-parser");
const jsonParser = bodyParser.json();

const axios = require("axios"); // Axios for http requests

const fs = require("fs");

// Importing secrets
const secrets = require("./secrets/secrets.json");
const { Bucket } = require("@google-cloud/storage");
const _API_KEY = secrets._API_KEY;

/*
  @route: /api/admin/login
  @desc: Post to firebase authentication API with our API_KEY
    success: return response to client
    error: return custom error response to client
    (this is because firebase error returns the API KEY)
*/
router.route("/admin/login").post(jsonParser, (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  axios
    .post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${_API_KEY}`,
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    )
    .then((response) => {
      console.log("Successful login...");
      res.send(response.data);
    })
    .catch((error) => {
      console.log("Error trying to login...");
      const errorMessage = error.response.data.error.message;
      let message = "";
      switch (errorMessage) {
        case "INVALID_EMAIL":
          message = "Wrong email address or password.";
          break;
        case "INVALID_PASSWORD":
          message = "Wrong email address or password";
          break;
        default:
          message = "ERROR";
      }
      res.status(400).send({
        message: message,
      });
    });
});

router
  .route("/admin/editProduct")
  .put(upload.array("images", 6), (req, res) => {
    const size = req.files.length;
    const token = req.query.auth;
    const id = req.query.id;

    let fileExtensions = getFileExtensions(req.files);
    let i = 0,
      j = 0;
    // Write files using user data
    for (let file of req.files) {
      fs.writeFile(
        `./test-files/image${i}.${fileExtensions[i]}`,
        file.buffer,
        () => {
          j++;
          if (j >= size) {
            // When all files have been written, create new database entry, then upload photos
            updateDatabase(req.body, id, token).then((res) => {
              uploadImages(size, fileExtensions, res, token);
            });
          }
        }
      );
      i++;
    }
    res.status(200).send({ message: "OK" });
  });

function getFileExtensions(files) {
  let fileExtensions = [];
  for (let file of files) {
    if (file.mimetype === "image/png") {
      fileExtensions.push("png");
    } else if (file.mimetype === "image/jpeg") {
      fileExtensions.push("jpg");
    } else {
      res.status(400).send({ message: "A file was neither jpeg nor png." });
      return null;
    }
  }
  return fileExtensions;
}

/*
 *   @desc: Receives client uploaded data along with photos. Write files
 *      using the buffer, then upload to firebase storage
 *   Note: The images must be written before uploading again because afaik you can't
 *    send buffer data with bucket.upload()
 */
const bucket = require("./bucket");
router.route("/admin/upload").post(upload.array("images", 6), (req, res) => {
  const size = req.files.length;
  const token = req.query.auth;

  let fileExtensions = getFileExtensions(req.files);
  let i = 0,
    j = 0;
  // Write files using user data
  for (let file of req.files) {
    fs.writeFile(
      `./test-files/image${i}.${fileExtensions[i]}`,
      file.buffer,
      () => {
        j++;
        if (j >= size) {
          // When all files have been written, create new database entry, then upload photos
          addToDatabase(req.body, token).then((res) => {
            uploadImages(size, fileExtensions, res, token);
          });
        }
      }
    );
    i++;
  }
  res.status(200).send({ message: "OK" });
});

/*
 *  @desc: Create new database entry
 *  @resolve: Returns unique key id for the database entry
 */
async function addToDatabase(form, token) {
  return new Promise((resolve, reject) => {
    console.log("Creating new entry in database...");
    const newProduct = {
      name: form.name,
      description: form.description,
      price: +form.price,
      quantity: +form.quantity,
      postedDate: form.date,
    };
    axios
      .post(`${secrets.firebaseDatabase}/products.json`, newProduct, {
        params: {
          auth: token,
        },
      })
      .then((response) => {
        resolve(response.data.name);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

async function updateDatabase(form, token) {
  return new Promise((resolve, reject) => {
    console.log("Updating database");
    const updatedProduct = {
      name: form.name,
      description: form.description,
      price: +form.price,
      quantity: +form.quantity,
      postedDate: form.date,
    };
    axios
      .post(`${secrets.firebaseDatabase}/products.json`, newProduct, {
        params: {
          auth: token,
        },
      })
      .then((response) => {
        resolve(response.data.name);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

/*
 *  @desc: Upload images to storage, then add to the database
 */
function uploadImages(size, extensions, key, token) {
  console.log("Uplading images...");
  let i,
    j = 0;
  let imageUrls = {};
  let fileName;
  for (i = 0; i < size; i++) {
    fileName = `image${i}.${extensions[i]}`;
    bucket.upload(
      "./test-files/" + fileName,
      {
        destination: `${key}/${fileName}`,
        resumable: true,
        public: true,
      },
      (err, file) => {
        if (err) {
          throw err;
        }
        imageUrls[`image${j}`] = file.publicUrl();
        j++;
        if (j >= size) {
          console.log("Uploaded images successfully...");
          axios
            .put(
              `${secrets.firebaseDatabase}/products/${key}/images.json`,
              imageUrls,
              {
                params: {
                  auth: token,
                },
              }
            )
            .then((response) => {
              console.log("added image urls");
            })
            .catch((err) => {
              //console.log(err)
              console.log("there was an err");
            });
        }
        //console.log(file.metadata);
        //console.log(file.publicUrl());
      }
    );
  }
}

router.route("/admin/getShop").get(jsonParser, (req, res) => {
  const token = req.query.auth;
  axios
    .get(`${secrets.firebaseDatabase}/products.json`, {
      params: {
        auth: token,
      },
    })
    .then((shop) => {
      const shopItems = [];
      for (let item in shop.data) {
        let obj = shop.data[item];
        let images = [];
        if (obj.images) {
          for (let image in obj.images) {
            images.push(obj.images[image]);
          }
        }
        shopItems.push({
          id: item,
          name: obj.name,
          quantity: obj.quantity,
          price: obj.price,
          posted: obj.postedDate,
          purcahsed: obj.purchased,
          description: obj.description,
          images: images,
          receiptId: obj.receiptId,
        });
      }
      res.send(shopItems);
      console.log(shopItems);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
