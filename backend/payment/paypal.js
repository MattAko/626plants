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
        console.log(capture.result);
        console.log(capture.result.purchase_units[0])
        //const captureID = capture.result.purchase_units[0].payments.captures[0].id;
        return capture.result;
    }
    catch(err){
        // Handle errors
        console.log('There was an error capturing a payment.');
        throw TypeError('Error capturing a payment');
    }
}

module.exports = {
    captureOrder: captureOrder
}
