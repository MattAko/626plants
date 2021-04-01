//import shop from './test-shop.js';

// Express imports
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();

const testDate = new Date('December 25, 1995 23:15:30');
const testShop = 
{
    "items": [
        {
            "id": 1,
            "name": "monsterra",
            "price": 1000,
            "quantity": 1,
            "imageUrl": "https://media1.s-nbcnews.com/j/newscms/2021_07/3432670/the-sill-anthurium-pink-variant-small-balboa-cream-1440x-5fc7db953a572_6489d3a3c7733cc562bed6636987df36.fit-720w.jpg",
            "description": "this is a description",
            "posted": testDate
        },
        {
            "id": 2,
            "name": "monsterra marble",
            "price": 1500,
            "quantity": 1,
            "imageUrl": "https://www.stylist.co.uk/images/app/uploads/2019/03/22172018/retro-houseplant-trends-plants-interiors-2019-crop-1553275284-1600x1067.jpg",
            "description": "looks like marble!",
            "posted": testDate
        }
    ]
}


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})


app.get('/api/loadShop', (req, res) => {
    console.log('Request received: /api/loadShop')
    res.send(testShop)
})

// Return product information
app.get('/api/getProduct', jsonParser,(req, res) => {
    console.log('Request received: /api/getProduct')
    console.log(req.query)
    const returnVal = testShop.items.find((item) => {
        console.log(req.query.id)
        if(item.id === +req.query.id){
            return item
        }
    })
    res.send(returnVal)
})