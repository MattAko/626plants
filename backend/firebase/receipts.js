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

module.exports = {
    Add: Add,
}