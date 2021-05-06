/**
 *  PayPal dependency and PayPal client
 */
const paypal = require("@paypal/checkout-server-sdk");
const paypalClient = require("./paypalClient");

/**
 * Captures (secure the payment) the paypal order based on the ID
 * @param {number} orderId
 */
async function captureOrder(orderId) {

    // Call PayPal to capture the orde
    const request = new paypal.orders.OrdersCaptureRequest(orderId);
    request.requestBody({});

    try{
        const capture = await paypalClient.client().execute(request);
        // Save the capture ID to database.
        console.log('Here is the captured payment...')
        console.log(capture);
        const captureID = capture.result.purchase_units[0].payments.captures[0].id;
    }
    catch(err){

        // Handle errors
        console.error(err);
    }
}

module.exports = {
    captureOrder: captureOrder
}
