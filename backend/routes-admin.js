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

/*
 *   @desc: Receives client uploaded data along with photos. Write files
 *      using the buffer, then upload to firebase storage
 */
const bucket = require("./bucket");
router.route("/admin/upload").post(upload.array("images", 6), (req, res) => {
  const size = req.files.length;
  let fileExtensions = [];
  let i = 0,
    j = 0;
  for (let file of req.files) {
    if(file.mimetype==="image/png"){
      fileExtensions.push("png");
    } else if(file.mimetype==="image.jpeg"){
      fileExtensions.push("jpg");
    } else{
      console.log('it broke')
      res.status(400).send({message: "A file was neither jpeg nor png."})
      return;
    }
    
    fs.writeFile(
      `./test-files/image${i}.${fileExtensions[i]}`,
      file.buffer,
      () => {
        j++;
        if (j === size - 1) {
          // When all files have been written, begin uploading
          uploadImages(size, fileExtensions)
        }
      }
    );
    i++;
  }
  res.status(200).send({message: 'OK'});
});

function uploadImages(size, extensions) {
  let i;
  let fileName;

  for (i = 0; i < size; i++) {
    fileName = `image${i}.${extensions[i]}`;
    bucket.upload(
      "./test-files/" + fileName,
      {
        destination: fileName,
        resumable: true,
        public: true,
      },
      (err, file) => {
        if (err) {
          throw err;
        }
        console.log(file.metadata);
      }
    );
  }
}

module.exports = router;
