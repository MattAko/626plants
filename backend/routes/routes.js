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

/*
  Returns JSON of all ShopItems
  @return: ShopItem: {
    id: number,
    name: string,
    price: number,
    thumbnailUrl: string
  }
*/
router.route("/loadShop").get((req, res) => {
    console.log("loading shop for customer...");
    axios
        .get(`${secrets.firebaseDatabase}/products.json?orderBy="status"&equalTo="available"&orderBy="visible"&equalTo=true`, {
            params: {
                auth: secrets.APP_SECRET,
            },
        })
        .then((shop) => {
            const shopItems = [];
            for (let item in shop.data) {
                let obj = shop.data[item];
                if(!obj.visible){
                    continue;
                }
                shopItems.push({
                    id: +item,
                    name: obj.name,
                    price: obj.price,
                    thumbnailUrl: obj.images["image0"],
                });
            }
            res.send(shopItems);
        })
        .catch((err) => {
            console.log(err);
        });
});

/*
  Retrive Product information from database based on the product id passed from query 
  @route: '/api/getProduct'
  @return: Product: {
    id: number,
    name: string,
    price: number,
    quantity: number,
    images: string[],
    description: string,
    posted: Date
  } 
*/
router.route("/getProduct").get((req, res) => {
    axios
        .get(`${secrets.firebaseDatabase}/products/${req.query.id}.json`, {
            params: {
                auth: secrets.APP_SECRET,
            },
        })
        .then((shop) => {
            const item = shop.data;
            let images = [];
            if (item.images) {
                for (let image in item.images) {
                    images.push(item.images[image]);
                }
            }
            const product = {
                id: +req.query.id,
                name: item.name,
                price: +item.price,
                quantity: +item.quantity,
                images: images,
                description: item.description,
                posted: item.posted,
            };
            res.send(product);
        })
        .catch((err) => {
            console.log(err);
        });
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
                shipping: 0,
            };
            res.send(cart);
        });
});

router.route("/onapprove").post(jsonParser, async (req, res) => {
    const { orderID, payerID } = req.body.data;
    console.log(orderID);

    // Capture the order, then return order information to client
    const results = await paypal.captureOrder(orderID).catch((err) => {
        res.status(500);
        res.json({
            message: "Error capturing the payment"
        })
    })
    console.log('Here is the payer')
    console.log(results)
    res.status(200);
    res.json({
        status: "Success",
        ...results
    });
});

/*
  Retrieve user cart, authorize
*/
router.route("/authorizeCart").post(jsonParser, (req, res) => {
    //console.log(req.body);
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
