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
 * @param {string} date The full-date-time when the order was captured. The string follows the Internet date and time format. 
 */
function Add(total, subtotal, orderID, productIDs, captureID, payer, status, shipping, date) {
    // Create new receipt
    axios.put(
        `${secrets.firebaseDatabase}/receipts/${orderID}.json`,
        {
            total: total,
            subtotal: subtotal, 
            products: productIDs,
            captureID: captureID,
            payer: payer,
            status: status,
            shipping: shipping,
            purchase_date: date,
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
                // Restructure orders from JSON tree to an array
                for(let orderId in response.data){
                    const { captureID, ...data } = response.data[orderId];
                    const newOrder = {...data, orderId}
                    orders.push(newOrder);
                }
                resolve(orders); // Return the orders
            })
            // Catch errors
            .catch((error) => {
                console.error("There was an error getting products.");
                console.error(error);
                reject(error);
            });
    });
}

/**
 * Update the status of an order. 
 * @param {string} orderId Order ID.
 * @param {string} status Status, must be one of the following: available, processing, packaged, shipped, completed.
 * @param {string} token User auth token.
 * @return {Promise} Promise object that resolves with a success or error.
 */
async function UpdateOrderStatus(orderId, status, token){
    axios.patch(`${secrets.firebaseDatabase}/receipts/${orderId}.json`, {
        status: status
    }, {
        params: {
            auth: token
        }
    }).then((response) => {
        console.log('Request complete')
        return 'OK'
    }).catch((error) => {
        console.error(error)
        throw new Error('Error updating firebase.')
    })
}

module.exports = {
    Add: Add,
    GetOrders: GetOrders,
    UpdateOrderStatus: UpdateOrderStatus,
}