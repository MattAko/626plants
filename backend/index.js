//import shop from './test-shop.js';

// Express imports
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

const testShop = 
{
    "items": [
        {
            "id": 1,
            "name": "monsterra",
            "price": 1000,
            "quantity": 1,
            "imageUrl": "a",
            "description": "this is a description"
        },
        {
            "id": 2,
            "name": "monsterra marble",
            "price": 1500,
            "quantity": 1,
            "imageUrl": "b",
            "description": "looks like marble!"
        }
    ]
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

app.get('/', (req, res) => {
    res.send('Hello');
})


app.get('/api/loadShop', (req, res) => {
    res.send(testShop)
})