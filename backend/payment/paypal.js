/**
 *  PayPal dependency and PayPal client
 */
const paypal = require("@paypal/checkout-server-sdk");
const paypalClient = require("./paypalClient");

/**
 * Captures (secure the payment) the paypal order based on the ID
 * @param {number} orderId
 * @return {Promise} Promise object that resolves with a receipt object. Documentation can be found here: https://developer.paypal.com/docs/api/orders/v2/#orders_capture
 */
async function captureOrder(orderId) {

    // Call PayPal to capture the order request
    const request = new paypal.orders.OrdersCaptureRequest(orderId);
    request.requestBody({});    // Creates the request body.

    try {
        const capture = await paypalClient.client().execute(request);
        // Save the capture ID to database.
        return capture.result;
    } catch (err) {
        // Handle errors
        console.log("There was an error capturing a payment.");
        throw TypeError("Error capturing a payment");
    }
}

module.exports = {
    captureOrder: captureOrder,
};
