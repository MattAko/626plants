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
const secrets = require("../secrets/secrets.json");
const _API_KEY = secrets._API_KEY;

// Import Database management systems
const db_products = require("../firebase/products");
const db_receipts = require("../firebase/receipts");
const db_reservations = require("../firebase/reservations");
const func = require("../firebase/functions");

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

    let fileExtensions = func.getFileExtensions(req.files);

    if (size === 0) {
        await db_products.Update(form, id, auth);
    } else {
        await func.writeImages(req.files, fileExtensions);
        const imageUrls = await db_products.uploadImages(
            size,
            fileExtensions,
            id,
            auth
        );
        await db_products.Update(form, id, auth);
        await db_products.putImages(id, imageUrls, auth);
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
        const fileExtensions = func.getFileExtensions(files);
        // 2.
        await func.writeImages(files, fileExtensions);
        // 3.
        const uuid = await db_products.Add(req.body, token);
        // 4.
        const imageUrls = await db_products.uploadImages(
            size,
            fileExtensions,
            uuid,
            token
        );
        // 5.
        await db_products.putImages(uuid, imageUrls, token);

        res.status(200).send({ message: "OK" });
    });

/**
 * Return client an array of shopItems
 * @route "/api/admin/shop"
 */
router.route("/admin/shop").get(jsonParser, async (req, res) => {
    const { visible } = req.query;
    const shopItems = await db_products.GetVisible(visible, true).catch((error) => {
        res.status(400);
        res.send("Unable to load shop");
    });
    res.send(shopItems);
});

/**
 * Return client an array of shopItems
 * @route "/api/admin/shop"
 */
router.route("/admin/orders").get(jsonParser, async (req, res) => {
    const { visible } = req.query;
    const orders = await db_receipts.GetOrders().catch((error) => {
        res.status(400);
        res.send("Unable to load shop");
    });
    res.send(orders);
});

router.route("/admin/delete").post(jsonParser, async (req, res) => {
    const token = req.query.auth;
    const { id } = req.body;
    await db_products.Delete(id, token).catch((err) => {
        res.status(400);
        res.send(`There was an error trying to delete product ${id}`);
    });
    res.status(200);
    res.json({message: `Product ${id} has been deleted.`})
});

router.route("/admin/orders/update").post(jsonParser, async (req, res) => {
    const { status, id } = req.body;
    const token = req.query.auth;
    console.log(status)
    await db_receipts.UpdateOrderStatus(id, status, token);
    res.status(200);
    res.json({status: 'OK'})
});

router.route("/admin/pickups").get(async (req, res) => {
    const reservations = await db_reservations.GetReservations();

    res.status(200);
    res.send(reservations);
})

router.route("/admin/pickups").patch(jsonParser, async (req, res) => {
    const { reservationId } = req.body;
    const newStatus = {
        status: 10,
    }
    console.log(newStatus)

    const test = await db_reservations.UpdateReservation(reservationId, newStatus)

    res.status(200);
    res.json({message: 'Hello'})
})



module.exports = router;
