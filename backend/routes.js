/* 
    Importing dummy test files. 
    REMOVE LATER FOR PRODUCTION 
*/
const shop = require("./test-files/example");
const shopItems = shop.shopItems;
const testShop = shop.testShop;

/*
    Routes, imported in index.js
    Routes here will be appended to '/api'
    ex: router.route('loadShop') -> '/api/loadShop'
*/
const express = require("express");
const router = express.Router();

/*
  @desc: Returns JSON of all ShopItems
  @return: ShopItem: {
    id: number,
    name: string,
    price: number,
    thumbnailUrl: string
  }
*/
router.route("/loadShop").get((req, res) => {
  console.log("Request received: /api/loadShop");
  console.log(shopItems);
  res.send(shopItems);
});

/*
  @desc: returns Product object
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

module.exports = router;
