// Import axios
const axios = require("axios");
const { resolveContent } = require("nodemailer/lib/shared");

// Import secrets
const secrets = require("../secrets/secrets.json");
const { Update } = require("./products");

/**
 * Reservation status codes:
 *  0: Received, awaiting client awaiting response
 *  1: Date/time negotiation
 *  2: Date/time confirmed. Awaiting pickup
 *  3: Complete.
 *  10: Cancelled
 */

/**
 *
 * @param {string} name Client name
 * @param {string} dates Text message from client, hopefully listing dates.
 * @param {string} phone Phone # following the format: 123-456-7890
 * @param {string} email Email following the format: a@a.com
 */
async function AddReservation(name, dates, phone, email, products, total) {
    let productIds = [];
    // Get all product ids
    for (let prod of products) {
        productIds.push(+prod.id);
    }
    const date = new Date();
    const reservation = {
        name,
        dates,
        phone,
        email,
        reservation_date: date,
        products: productIds,
        total,
        status: 0,
    };
    await axios.post(
        `${secrets.firebaseDatabase}/reservations.json`,
        reservation,
        {
            params: {
                auth: secrets.APP_SECRET,
            },
        }
    );
    return;
}

function GetReservations() {
    return new Promise((resolve, reject) => {
        axios
            .get(`${secrets.firebaseDatabase}/reservations.json`, {
                params: {
                    auth: secrets.APP_SECRET,
                },
            })
            .then((response) => {
                const { data } = response;

                reservations = [];
                for (let reservation in data) {
                    console.log(data[reservation]);
                    const temp = {
                        reservationId: reservation,
                        ...data[reservation],
                    };
                    reservations.push(temp);
                }
                resolve(reservations);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
    });
}

function GetReservation(id) {
    return new Promise((resolve, reject) => {
        axios
            .get(`${secrets.firebaseDatabase}/reservations/${id}.json`, {
                params: {
                    auth: secrets.APP_SECRET,
                },
            })
            .then((response) => {
                // Data here represents the JSON of the product object.
                resolve(response.data);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
    });
}

function UpdateReservation(id, updatedInfo) {
    return new Promise(async (resolve, reject) => {
        axios
            .patch(
                `${secrets.firebaseDatabase}/reservations/${id}.json`,
                {
                    ...updatedInfo,
                },
                {
                    params: {
                        auth: secrets.APP_SECRET,
                    },
                }
            )
            .then((response) => {
                console.log(response);
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

module.exports = {
    AddReservation: AddReservation,
    GetReservations: GetReservations,
    GetReservation: GetReservation,
    UpdateReservation: UpdateReservation,
};
