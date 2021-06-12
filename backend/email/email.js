// "use strict";
// const nodemailer = require("nodemailer");

// // async..await is not allowed in global scope, must use a wrapper
// async function main() {
//   // Generate test SMTP service account from ethereal.email
//   // Only needed if you don't have a real mail account for testing
//   let testAccount = await nodemailer.createTestAccount();

//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: testAccount.user, // generated ethereal user
//       pass: testAccount.pass, // generated ethereal password
//     },
//   });

//   // send mail with defined transport object
//   let info = await transporter.sendMail({
//     from: '"Fred Foo 👻" <foo@example.com>', // sender address
//     to: "bar@example.com, baz@example.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }

// main().catch(console.error);

const nodemailer = require("nodemailer");

const { EMAIL_SECRET, EMAIL_USER } = require("../secrets/secrets.json");

/**
 * Send a confirmation email address from 'matthew@626plants.com'
 * @param {string} email The recipients email address.
 * @param {Receipt} receipt Receipt object that contains information to send as part of the email.
 * @return {Promise} Promise object that resolves with the messageId of the email that was sent.
 */

/*
    Receipt{
        id: string,
        status: string,
        purchase_units: {
            reference_id: string,
            shipping: Object,
            payments: Object,
        }
        links: [Object]
    }
*/
function SendReceipt(email, receipt) {
    return new Promise(async (resolve, reject) => {
        let { shipping, ...purchase_units} = receipt.purchase_units[0];

        console.log(receipt);
        let testAccount = await nodemailer.createTestAccount();
    
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: EMAIL_USER,
                pass: EMAIL_SECRET,
            },
        });
    
        let html = `
        <body> 
            <h1 style="color: red;">${receipt.payer.given_name} ${receipt.payer.surname}! ${email}</h1>
            <p>Your order will be shipped to the follow address:</p>
            <ul>
                <li>${shipping.name.full_name}</li>
                <li>${shipping.address.address_line_1}, ${shipping.address.admin_area_2}, ${shipping.address.admin_area_1} ${shipping.address.postal}</li>
            </ul>
        </body>`;
    
        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: '"Matthew Roberts" <foo@example.com>', // sender address
            to: "mattako66@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: html,
        }).catch((error)=> {
            reject(error);
        });
    
        resolve(info.messageId);
    })
}

async function SendContact(contactForm){
    console.log(contactForm)
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: EMAIL_USER,
            pass: EMAIL_SECRET,
        }
    })

        let html = `
        <body>
            <h3>Name: ${contactForm.name}</h3>
            <h3>Email: ${contactForm.email}</h3>
            <h3>Phone #: ${contactForm.phone}</h3>
            <h3>Company: ${contactForm.company}</h3>
            <p>Message:</p>
            <p>${contactForm.message}</p>
        </body>`;
        let info = await transporter.sendMail({
            from: `${contactForm.name} ${contactForm.email}`,
            to: "matthew@626plants.com",
            subject: "New Contact",
            text: "New Contact Received",
            html: html,
        })
}


module.exports = {
    SendReceipt: SendReceipt,
    SendContact: SendContact,
};
