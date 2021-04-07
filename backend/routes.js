/* 
    Importing dummy test files. 
    REMOVE LATER FOR PRODUCTION 
*/
const shop = require("./test-files/example");
const shopItems = shop.shopItems;
const testShop = shop.testShop;

// Axios
const axios = require("axios");

// Importing secrets
const secrets = require("./secrets/secrets.json");
const _API_KEY = secrets._API_KEY;
/*
    Routes, imported in index.js
    Routes here will be appended to '/api'
    ex: router.route('loadShop') -> '/api/loadShop'
*/

const express = require("express");
const bodyParser = require("body-parser");
const { json } = require("body-parser");
const jsonParser = bodyParser.json();
const router = express.Router();

router.route("/loadShop").get((req, res) => {
  console.log("Request received: /api/loadShop");
  console.log(shopItems);
  res.send(shopItems);
});

router.route("/getProduct").get((req, res) => {
  console.log("Request received: /api/getProduct");
  console.log(req.query);
  const returnVal = testShop.items.find((item) => {
    console.log(req.query.id);
    if (item.id === +req.query.id) {
      return item;
    }
  });
  res.send(returnVal);
});

router.route("/admin/login").post(jsonParser, (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  axios
    .post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${_API_KEY}`,
      {
        email: email,
        password: password,
      }
    )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
