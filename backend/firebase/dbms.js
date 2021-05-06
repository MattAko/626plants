/**
 * Database Management System (DBMS)
 * This file contains functions that interface with the firebase database
 */

// Import google cloud bucket
const bucket = require("../bucket");

// Import axios
const axios = require("axios");

// Import secrets
const secrets = require("../secrets/secrets.json");

// Node filesystem
const fs = require("fs");

/**
 * Upload images to google cloud storage
 * @param {number} size Number of files to upload
 * @param {string[]} extensions Array of extensions
 * @param {number} key ID# of the product
 * @param {string} token User auth token
 * @returns {string[]} imageUrls Links to all images
 */
async function uploadImages(size, extensions, key, token) {
    return new Promise((resolve, reject) => {
        console.log("Uploading images...");
        let i,
            j = 0;
        let imageUrls = {};
        let fileName;
        for (i = 0; i < size; i++) {
            fileName = `image${i}.${extensions[i]}`;
            bucket.upload(
                "./image-buffer/" + fileName,
                {
                    destination: `${key}/${fileName}`,
                    resumable: true,
                    public: true,
                },
                (err, file) => {
                    if (err) {
                        reject(err)
                    }
                    imageUrls[`image${j}`] = file.publicUrl();
                    j++;
                    if (j >= size) {
                        console.log("Uploaded images successfully...");
                        resolve(imageUrls);
                    }
                }
            );
        }
    })
}

/**
 * Add imageUrls to the database
 * @param {string} key ID# of the product
 * @param {string[]} imageUrls Links to all the images
 * @param {string} token User auth token
 */
async function putImages(key, imageUrls, token) {
    return new Promise((resolve, reject) => {
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
                resolve(response)
            })
            .catch((error) => {
                reject(error)
            });
    })
}

/**
 * 
 * @param {*} form 
 * @param {*} id 
 * @param {*} token 
 * @returns 
 */
async function updateDatabase(form, id, token) {
  return new Promise((resolve, reject) => {
    console.log("Updating database");
    const price = isNaN(+form.price) ? undefined: +form.price; 
    const quantity = isNaN(+form.quantity) ? undefined: +form.quantity;
    const updatedProduct = {
      name: form.name,
      description: form.description,
      price: price,
      quantity: quantity,
      postedDate: form.date,
      visible: form.visible,
    };
    console.log(updatedProduct)
    axios
      .patch(
        `${secrets.firebaseDatabase}/products/${id}.json`,
        updatedProduct,
        {
          params: {
            auth: token,
          },
        }
      )
      .then((response) => {
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
}

/**
 * Write multiple images to system inside the directory, 'image-files' 
 * @param {Files} files An object of files that has been processed by the middleware multer 
 * @param {string[]} fileExtensions Contains the extensions for all the files 
 * @returns {Promise} Promise object returns undefined
 */
async function writeImages(files, fileExtensions) {
    return new Promise((resolve, reject) => {
        // i increments when writeFile has been start
        // j increments when writeFile has been completed
        let i = 0,
            j = 0;
        let size = files.length;
    
        console.log('Writing images...')
        // Begin writing files...
        for (let file of files) {
            fs.writeFile(
                `./image-buffer/image${i}.${fileExtensions[i]}`,
                file.buffer,
                () => {
                    j++;
                    // When all files has been written, return
                    if (j >= size) {
                        console.log('Writing images complete')
                        resolve();
                    }
                }
            );
            i++;
        }
    })
}

/**
 * Upload new entry to the database 
 * @param {FormData} form Object that contains form data, processed by middleware 'multer'
 * @param {string} token User auth token 
 * @returns {Promise} Promise object that contains the uuid of the product 
 */
async function addToDatabase(form, token) {
    return new Promise((resolve, reject) => {
        const uuid = Date.now();
        console.log("Creating new entry in database with uuid: " + uuid);
        const newProduct = {
            name: form.name,
            description: form.description,
            price: +form.price,
            quantity: +form.quantity,
            postedDate: form.date,
            visible: true,
        };
        axios
            .put(`${secrets.firebaseDatabase}/products/${uuid}.json`, newProduct, {
                params: {
                    auth: token,
                },
            })
            .then((response) => {
                resolve(uuid);
            })
            .catch((err) => {
                reject(err);
            });
    })
}

function getFileExtensions(files) {
    let fileExtensions = [];
    for (let file of files) {
        if (file.mimetype === "image/png") {
            fileExtensions.push("png");
        } else if (file.mimetype === "image/jpeg") {
            fileExtensions.push("jpg");
        } else {
            res.status(400).send({
                message: "A file was neither jpeg nor png.",
            });
            return null;
        }
    }
    return fileExtensions;
}

module.exports = {
    uploadImages: uploadImages,
    putImages: putImages,
    writeImages: writeImages,
    getFileExtensions: getFileExtensions,
    addToDatabase: addToDatabase,
    updateDatabase: updateDatabase,
};
