/*
    Routes, imported in index.js
    Routes here will be appended to '/api'
    ex: router.route('loadShop') -> '/api/loadShop'
*/
const express = require("express");
const router = express.Router();
const axios = require("axios")

// Importing secrets
const secrets = require("./secrets/secrets.json");
const { Bucket } = require("@google-cloud/storage");
const _API_KEY = secrets._API_KEY;

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
  // console.log("Request received: /api/loadShop");
  // console.log(shopItems);
  // res.send(shopItems);

  console.log('loading shop for customer...')
  axios
    .get(`${secrets.firebaseDatabase}/products.json`, {
      params: {
        auth: secrets.APP_SECRET,
      },
    })
    .then((shop) => {
      const shopItems = [];
      for (let item in shop.data) {
        let obj = shop.data[item];
        shopItems.push({
          id: item,
          name: obj.name,
          price: obj.price,
          thumbnailUrl: obj.images['image0'],
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
      let images = []
      if(item.images){
        for(let image in item.images){
          images.push(item.images[image]);
        }
      }
      const product = {
        id: req.query.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        images: images,
        description: item.description,
        posted: item.posted
      }
      res.send(product);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
