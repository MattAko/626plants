/*
    Routes, imported in index.js
    Routes here will be appended to '/api'
    ex: router.route('loadShop') -> '/api/loadShop'
*/
const express = require("express");
const router = express.Router();
const axios = require("axios");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

// Importing secrets
const secrets = require("../secrets/secrets.json");

// Import paypal
const paypal = require("../payment/paypal");

// Import firebase API
const db_products = require("../firebase/products");
const db_receipts = require("../firebase/receipts");

// Import email
const email = require("../email/email");
const products = require("../firebase/products");

/*
  Returns JSON of all ShopItems
  @return: ShopItem: {
    id: number,
    name: string,
    price: number,
    thumbnailUrl: string
  }
*/
router.route("/loadShop").get(jsonParser, async (req, res) => {
    const { visible } = req.query;
    console.log("loading shop for customer...");

    let shop = await db_products.GetVisible(visible);
    if (shop) {
        let shopItems = [];
        for (let item of shop) {
            shopItems.push({
                id: +item.id,
                name: item.name,
                price: +item.price,
                thumbnailUrl: item.images[0],
                posted: item.posted,
                sold: item.sold,
            });
        }
        res.send(shopItems);
    } else {
        res.status(400);
        res.send("Error");
    }
});

/**
 * Get product information for products. Currently only supports requests for a single product.
 * @url /api/products
 * @required ID,
 * @optional
 * @param {string|string[]} ID Product ID
 * @returns {Product} Contains the product information
 */
router.route("/products").get(async (req, res) => {
    // Check for ID query param
    if (!req.query.id) {
        res.status(400).send({
            message:
                "ID was not included in request. Please add an ID to your request params.",
        });
        return;
    }
    // Check for multiple
    if (Array.isArray(req.query.id)) {
        res.status(400).send({
            message:
                "Multiple ID query parameters were received. Please send only one ID at a time.",
        });
        return;
    }

    // Extract ID from request
    const { id } = req.query;

    // Get Product information
    const product = await db_products.GetProduct(id);

    res.json(product);
});

/**
 * Get product(s) details from the shop.
 * @param {string} ID REQUIRED. The product ID
 * @param {boolean} All REQUIRED (if ID was not included). Return all items listed on the shop.
 */
router.route("/shop").get(async (req, res) => {
    const { id, all } = req.query;

    // Check for either ID or all query param
    if (id == undefined && all === undefined) {
        res.status(400).send({
            message:
                "Neither ID nor all were included in the request. Please add an ID or all to your request params.",
        });
        return;
    }
    // Check if both id and all were included
    else if (id && all) {
        res.status(400).send({
            message:
                "Both 'ID' and 'all' were included in the request. Please only include one.",
        });
        return;
    }

    // Get Product details
    if (id) {
        // Ensure that only one ID was passed
        if (Array.isArray(req.query.id)) {
            res.status(400).send({
                message:
                    "Multiple ID query parameters were received. Please send only one ID at a time.",
            });
            return;
        }
        // Extract ID from request
        const { id } = req.query;

        // Get Product information
        const product = await db_products.GetProduct(id);
        res.json(product);
    }

    // Get all items listed in the shop.
    if (all) {
        const shop = await products.GetVisible(true, false);
        res.json(shop);
    }
});

/**
 * Grab cart details, such as product details and subtotal.
 * @required ID/ID[],
 * @param {string|string[]} ID Product ID/s for the cart
 * @url /api/cart
 */
router.route("/cart").get(async (req, res) => {
    // Check for products
    if (!req.query.id) {
        res.status(400).send({
            message:
                "Invalid Request. Request did not include any product ID. Please include these as query parameters.",
        });
    }
});

router.route("/contact").post(jsonParser, async (req, res) => {
    const { body } = req;
    if (body.name && body.message && body.email) {
        await email.SendContact(body);
    }
    res.status(200);
    res.send({ message: "Success" });
});

router.route("/getCart").post(jsonParser, (req, res) => {
    const { body } = req;
    axios
        .get(`${secrets.firebaseDatabase}/products.json`, {
            params: {
                auth: secrets.APP_SECRET,
            },
        })
        .then((response) => {
            const { data } = response;
            const products = [];
            for (let id of body.productIds) {
                if (!data[id]) {
                    res.status(400);
                    res.send("Product ID not found or available.");
                }
                const { images, visible, ...productData } = data[id];
                if (!visible) {
                    res.status(400);
                    res.send("Product ID not found or available.");
                }
                let imagesArray = [];
                for (let img in images) {
                    imagesArray.push(images[img]);
                }
                products.push({
                    id: id,
                    ...productData,
                    images: imagesArray,
                });
            }
            let subtotal = 0;
            for (let prod of products) {
                subtotal += prod.price;
            }
            const cart = {
                products: products,
                subtotal: subtotal,
                total: subtotal,
                shipping: {
                    cost: 0,
                    carrier: "",
                    method: "",
                    signature: false,
                },
            };
            res.send(cart);
        });
});

router.route("/approve").post(jsonParser, async (req, res) => {
    console.log("/apporve");
    console.log(req.body);
    const { products, cart } = req.body;
    const { orderID, payerID } = req.body.data;

    // Capture the order, then return order information to client
    const results = await paypal.captureOrder(orderID).catch((err) => {
        res.status(500);
        res.json({
            message: "Error capturing the payment",
        });
        return;
    });
    const date = results.purchase_units[0].payments.captures[0].update_time;
    const { id, payer } = results;
    const captureID = results.purchase_units[0].payments.captures[0].id;
    results.purchase_units[0].shipping['carrier'] = cart.shipping.carrier;
    results.purchase_units[0].shipping['method'] = cart.shipping.method;
    results.purchase_units[0].shipping['cost'] = cart.shipping.cost;
    results.purchase_units[0].shipping['signature'] = cart.shipping.signature;
    await db_receipts.Add(
        cart.total,
        cart.subtotal,
        id,
        products,
        captureID,
        payer,
        "processing",
        results.purchase_units[0].shipping,
        date
    );
    await db_products.UpdateMultiple(products, "sold", true);
    await db_products.UpdateMultiple(products, "orderId", id);
    await email.SendReceipt("mattako66@gmail.com", results).catch((error) => {
        console.log(error);
    });
    res.status(200);
    res.json({
        status: "Success",
        ...results,
    });
});

router.route("/test").get(async (req, res) => {
    console.log("test endpoint");
    await email.SendReceipt("mattako66@gmail.com");
});

/*
  Retrieve user cart, authorize
*/
router.route("/authorizeCart").post(jsonParser, (req, res) => {
    const { cart } = req.body;
    axios
        .get(`${secrets.firebaseDatabase}/products.json`, {
            params: {
                auth: secrets.APP_SECRET,
            },
        })
        .then((response) => {
            const { valid, errorId } = AuthorizeCart(cart, response.data);
            const invalid = !valid;
            if (invalid) {
                console.log("Invalid cart");
                res.status(400);
                res.json({ invalid: invalid, errorId: errorId });
            } else {
                res.status(200);
                res.json({ valid: true });
            }
        });
});

/*
  @input: client: Cart, server: {id: Product} 
  Cart: {
    products: Products[],
    subtotal: number,
    shipping: number,
    total: number
  }
  @return: boolean
*/
function AuthorizeCart(client, server) {
    let valid = true;
    let check = true;
    let clientProducts = client.products;
    let errors = [];
    // Check user cart item ID's, then ensure the validity of the cart
    // If error found, add
    for (let i = 0; i < client.products.length; i++) {
        for (let product in server) {
            check = true;
            if (+product === +clientProducts[i].id) {
                console.log(server[product].price === clientProducts[i].price);
                check =
                    check && server[product].price === clientProducts[i].price;
                check =
                    check &&
                    server[product].quantity <= clientProducts[i].quantity;
                if (!check) {
                    errors.push(+clientProducts[i].id);
                    valid = false;
                }
            }
        }
    }
    console.log("checking errors...");
    console.log(errors);
    return { valid: valid, errorId: errors };
}

module.exports = router;
