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
const { throws } = require("assert");

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
                        reject(err);
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
    });
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
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

/**
 * Edit the queries for a single product, based on the given id.
 * @param {FormData} form FormData object that contains the form inputs
 * @param {number} id Product ID#
 * @param {string} token User auth token
 * @returns
 */
async function Update(form, id, token) {
    return new Promise((resolve, reject) => {
        console.log("Updating database");
        const price = isNaN(+form.price) ? undefined : +form.price;
        const quantity = isNaN(+form.quantity) ? undefined : +form.quantity;
        const updatedProduct = {
            name: form.name,
            description: form.description,
            price: price,
            quantity: quantity,
            visible: form.visible === "true" ? true : false,
        };
        console.log(updatedProduct);
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
 * Upload new entry to the database
 * @param {FormData} form Object that contains form data, processed by middleware 'multer'
 * @param {string} token User auth token
 * @returns {Promise} Promise object that contains the uuid of the product
 */
async function Add(form, token) {
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
            available: true,
        };
        axios
            .put(
                `${secrets.firebaseDatabase}/products/${uuid}.json`,
                newProduct,
                {
                    params: {
                        auth: token,
                    },
                }
            )
            .then((response) => {
                resolve(uuid);
            })
            .catch((err) => {
                reject(err);
            });
    });
}

/**
 * Delete a specific product ID from the database
 * @param {number} id Product ID
 * @param {string} token User auth token
 * @returns {Promise} Promise object that resolves with firebase
 */
async function Delete(id, token) {
    return new Promise((resolve, reject) => {
        axios
            .delete(`${secrets.firebaseDatabase}/products/${id}.json`, {
                params: {
                    auth: token,
                },
            })
            .then((response) => {
                console.log(`Product ${id} has been deleted.`);
                resolve(response);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
    });
}

/**
 * Get array of shop items
 * @param {string} token User auth token
 * @returns {Promise} Promise object contains array of shopItems
 */
async function GetAvailable(token) {
    return new Promise((resolve, reject) => {
        axios
            .get(
                `${secrets.firebaseDatabase}/products.json?orderBy="status"&equalTo="available"`,
                {
                    params: {
                        auth: token,
                    },
                }
            )
            .then((shop) => {
                const shopItems = [];
                for (let item in shop.data) {
                    let { ...obj } = shop.data[item];
                    let images = [];
                    if (obj.images) {
                        for (let image in obj.images) {
                            images.push(obj.images[image]);
                        }
                    }
                    shopItems.push({
                        ...obj,
                        images: images,
                        id: item,
                    });
                }
                resolve(shopItems);
            })
            .catch((error) => {
                console.error("There was an error getting products.");
                console.error(error);
                reject(error);
            });
    });
}

async function updateProductStatus(productID, status) {
    await axios
        .patch(
            `${secrets.firebaseDatabase}/products/${productID}.json`,
            {
                status: status,
            },
            {
                params: {
                    auth: secrets.APP_SECRET,
                },
            }
        )
        .then((response) => {
            return;
        })
        .catch((error) => {
            return;
        });
}


// TODO: Make an update function that allows for more dynamic queries
async function UpdateNew(){

}

module.exports = {
    uploadImages: uploadImages,
    putImages: putImages,
    Add: Add,
    Update: Update,
    Delete: Delete,
    GetAvailable: GetAvailable,
    updateProductStatus: updateProductStatus,
};
