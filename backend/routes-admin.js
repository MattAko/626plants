// Imports
const express = require("express");
const router = express.Router();

// Multer is used to handle multipart/form-data requests
// Which is used for uploading files
const multer = require("multer");
const upload = multer();

// JSON body parser
const bodyParser = require("body-parser");
const { json } = require("body-parser");
const jsonParser = bodyParser.json();

// Axios
const axios = require("axios"); // Axios for http requests

// Importing secrets
const secrets = require("./secrets/secrets.json");
const _API_KEY = secrets._API_KEY;

// Import Database management system
const dbms = require("./firebase/dbms");

/**
 * @route "/api/admin/login"
 * Authenticate user via firebase authentication with our API_KEY
 * On success, return auth token to client
 * On failure, return custom error response
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

/**
 * @route "/api/admin/edit"
 * Modify the data for a specific product ID
 */
router.route("/admin/edit").put(upload.array("images", 6), async (req, res) => {
    const size = req.files.length;
    const { auth, id } = req.query;
    const form = req.body;

    let fileExtensions = dbms.getFileExtensions(req.files);

    if (size === 0) {
        await dbms.updateDatabase(form, id, auth);
    } else {
        await dbms.writeImages(req.files, fileExtensions);
        const imageUrls = await dbms.uploadImages(
            size,
            fileExtensions,
            id,
            auth
        );
        await dbms.updateDatabase(form, id, auth);
        await dbms.putImages(id, imageUrls, auth);
    }

    res.status(200).send({ message: "OK" });
});

/**
 * @route "/api/admin/upload"
 * Parse through client form data using node package 'multer'
 * NOTE: Multer stores files under req.files and form data under req.body
 * Upload new product following these steps:
 *  1. Extract file extensions from files
 *  2. Write images locally using fs
 *  3. Create a new database entry and capture the unique uuid
 *  4. Upload images to bucket, capture all the new public urls
 *  5. Add imageUrls to firebase database
 */
router
    .route("/admin/upload")
    .post(upload.array("images", 6), async (req, res) => {
        const size = req.files.length;
        const token = req.query.auth;
        const files = req.files;

        // 1. get File extensions
        const fileExtensions = dbms.getFileExtensions(files);
        // 2.
        await dbms.writeImages(files, fileExtensions);
        // 3.
        const uuid = await dbms.addToDatabase(req.body, token);
        // 4.
        const imageUrls = await dbms.uploadImages(
            size,
            fileExtensions,
            uuid,
            token
        );
        // 5.
        await dbms.putImages(uuid, imageUrls, token);

        res.status(200).send({ message: "OK" });
    });

/**
 * @route "/api/admin/shop"
 * Return client an array of shopItems
 */
router.route("/admin/shop").get(jsonParser, (req, res) => {
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
        })
        .catch((err) => {
            console.log(err);
        });
});

module.exports = router;
