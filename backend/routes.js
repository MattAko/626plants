// const testDate = new Date("December 25, 1995 23:15:30");
// const testShop = {
//   items: [
//     {
//       id: 1,
//       name: "monsterra",
//       price: 1000,
//       quantity: 1,
//       images:[
//         "https://media1.s-nbcnews.com/j/newscms/2021_07/3432670/the-sill-anthurium-pink-variant-small-balboa-cream-1440x-5fc7db953a572_6489d3a3c7733cc562bed6636987df36.fit-720w.jpg"],
//       description: "this is a description",
//       posted: testDate,
//     },
//     {
//       id: 2,
//       name: "monsterra marble",
//       price: 1500,
//       quantity: 1,
//       images:
//         ["https://www.stylist.co.uk/images/app/uploads/2019/03/22172018/retro-houseplant-trends-plants-interiors-2019-crop-1553275284-1600x1067.jpg"],
//       description: "looks like marble!",
//       posted: testDate,
//     },
//   ],
// };

// const shopItems = [
//   {
//     id: 1,
//     name: "monsterra",
//     price: 1000,
//     thumbnailUrl: "https://media1.s-nbcnews.com/j/newscms/2021_07/3432670/the-sill-anthurium-pink-variant-small-balboa-cream-1440x-5fc7db953a572_6489d3a3c7733cc562bed6636987df36.fit-720w.jpg",
//   },
//   {
//     id: 2,
//     name: "monsterra marble",
//     price: 1500,
//     thumbnailUrl: "https://www.stylist.co.uk/images/app/uploads/2019/03/22172018/retro-houseplant-trends-plants-interiors-2019-crop-1553275284-1600x1067.jpg",
//   },
// ];

//import {shopItems, testShop} from './test-files/example'
const shop = require('./test-files/example')
const shopItems = shop.shopItems;
const testShop = shop.testShop;

const express = require('express')
const router = express.Router();

router.route('/loadShop').get((req, res) => {
console.log("Request received: /api/loadShop");
  console.log(shopItems)
  res.send(shopItems);
})

router.route('/getProduct').get((req, res) => {
console.log("Request received: /api/getProduct");
  console.log(req.query);
  const returnVal = testShop.items.find((item) => {
    console.log(req.query.id);
    if (item.id === +req.query.id) {
      return item;
    }
  });
  res.send(returnVal);

})

module.exports = router;