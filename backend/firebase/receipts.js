// Import axios
const axios = require("axios");

// Import secrets
const secrets = require("../secrets/secrets.json");

/**
 * Create a new receipt and add it to Firebase database.
 * @param {number} orderID The order ID created by PayPal
 * @param {number[]} productIDs Array of product ID's
 * @param {number} captureID ID of the payment capture
 * @param {Payer} payer Payer object for the person who paid for the order
 * @param {string} status The order status
 * @param {Shipping} shipping Shipping object that contains info about shipping address
 */
function Add(orderID, productIDs, captureID, payer, status, shipping) {
    axios.put(
        `${secrets.firebaseDatabase}/receipts/${orderID}.json`,
        {
            products: productIDs,
            captureID: captureID,
            payer: payer,
            status: status,
            shipping: shipping,
        },
        {
            params: {
                auth: secrets.APP_SECRET,
            },
        }
    );
}

/**
 * Get array of shop items, filtered based on visibility.
 * @param {boolean} visible Filter items
 * @returns {Promise} Promise object contains array of shopItems
 */
async function GetOrders() {
    return new Promise((resolve, reject) => {
        axios
            .get(
                `${secrets.firebaseDatabase}/receipts.json`,
                {
                    params: {
                        auth: secrets.APP_SECRET,
                    },
                }
            )
            .then((response) => {
                const orders = [];
                for(let orderId in response.data){
                    const { captureID, ...data } = response.data[orderId];
                    const newOrder = {...data, orderId}
                    orders.push(newOrder);
                }
                resolve(orders);
            })
            .catch((error) => {
                console.error("There was an error getting products.");
                console.error(error);
                reject(error);
            });
    });
}

module.exports = {
    Add: Add,
    GetOrders: GetOrders,
}