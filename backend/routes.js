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
        returnSecureToken: true
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

module.exports = router;
