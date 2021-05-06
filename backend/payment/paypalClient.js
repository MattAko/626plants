/**
 *
 * PayPal Node JS SDK dependency
 */
const checkoutNodeJssdk = require('@paypal/checkout-server-sdk');

/**
 *  Import client secrets 
 */
const { clientId, clientSecret } = require('../secrets/paypal-secrets.json')

/**
 *
 * Returns PayPal HTTP client instance with environment that has access
 * credentials context. Use this instance to invoke PayPal APIs, provided the
 * credentials have access.
 */
function client() {
    return new checkoutNodeJssdk.core.PayPalHttpClient(environment());
}

/**
 *
 * Set up and return PayPal JavaScript SDK environment with PayPal access credentials.
 * This sample uses SandboxEnvironment. In production, use LiveEnvironment.
 *
 */
function environment() {
    let CLIENT_ID = process.env.PAYPAL_CLIENT_ID || clientId;
    let CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET || clientSecret;

    return new checkoutNodeJssdk.core.SandboxEnvironment(
        CLIENT_ID, CLIENT_SECRET
    );
}

module.exports = {
    client: client
}