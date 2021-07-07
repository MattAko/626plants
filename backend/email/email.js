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
        // let { shipping, ...purchase_units} = receipt.purchase_units[0];
        
        console.log('SendReceipt called')
        console.log(receipt);
        let { shipping } = receipt;
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
                <div style="width:100%;background-color:#f3f3f3;height:100%;padding:20px;">
                    <table style="max-width:600px;background-color:#ffffff;border:0 none;border-collapse:collapse" width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
                    <tbody>
                            <tr style="font-size:28px;color:#000000;font-family:sans-serif;text-align:center">
                                <td style="padding:30px 0 30px 0">
                                    626Plants
                                </td>
                            </tr>
                            <tr>
                                <img src="https://626plants.com/static/img/hero-email.png" style="margin:display:block;max-width:600px" width="600px">
                            </tr>
                            <tr style="font-size:24px;color:#000000;font-family:sans-serif;text-align:center;">
                                <td style="padding:20px 0 20px 0;">
                                    Hello ${shipping.name.full_name},
                                </td>
                            </tr>
                            <tr style="font-size:16px;color:#000000;font-family:sans-serif;text-align:center;">
                                Thank you for your purchase! 
                            </tr>
                            <tr>
                                <td style="display:block; margin:10px; color:#000000" align="center">
                                    Your order will be shipped here: <br/>
                                    ${shipping.name.full_name}<br/>
                                    ${shipping.address.address_line_1}<br/>
                                    ${shipping.address.admin_area_2} ${shipping.address.admin_area_1}, ${shipping.address.postal_code}<br/>
                                </td>
                            </tr>
                            <tr width="100%">
                                <table style="padding:0 70px;font-size:14px;color:#000000;" width="100%">
                                <tbody>
                                    <tr>
                                        <table width="100%">
                                        <tbody>
                                        <td style="width:65%" align="left">
                                            Order: ${receipt.receiptId}
                                        </td>
                                        <td style="width:35%" align="right">
                                            ${receipt.purchase_date}
                                        </td>
                                        </tbody>
                                        </table>
                                    </tr>
                                    <tr>
                                        <td style="margin:0 10px;border-collapse:collapse;border-top:solid 1px #cccccc;font-size:1px;line-height:1px;width:100%;" width="100%">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <table width="100%">
                                        <tbody>
                                            <tr>
                                             
                                                <td align="right">
                                                    Subtotal: $${receipt.subtotal}
                                                </td>
                                            </tr>
                                            <tr>
                                               <td align="right">
                                                    Shipping: $${receipt.shipping.cost}
                                                </td>
                                        </tbody>
                                        </table> 
                                    </tr>
                                    <tr>
                                        <td style="margin:0 10px;border-collapse:collapse;border-top:solid 1px #cccccc;font-size:1px;line-height:1px;width:100%;" width="100%">&nbsp;</td>
                                    </tr>
                                    <td style="padding:0 0 30px 0" align="right">
                                        Total:$${receipt.total}
                                    </td>
                                </tbody>
                                </table>    
                            </tr> 
                    </tbody>
                    </table>
                    <p style="color:#363333; max-width:600px; margin: 0 auto 0 auto; padding: 20px 0 20px 0" width="600px" align="center">
                        If there are any problems with your order, or you would like to make a change to your order, please contact us through our email, Instagram, or Facebook.
                    </p>
                </div>
            </body> 
        `
    
        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: '"Fe Roberts" <fe@626plants.com>', // sender address
            to: [email, 'mattako66@gmail.com'], // list of receivers
            subject: `626Plants Receipt - [Date Here]`, // Subject line
            text: "Hello world?", // plain text body
            html: html,
        }).catch((error)=> {
            reject(error);
        });
    
        resolve(info.messageId);
    })
}

async function SendContact(contactForm){
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
            <h3>Company: ${contactForm.company}</h3>
            <h3>Message </h3>
            <p>${contactForm.message}</p>
            <h3>Email: ${contactForm.email}</h3>
            <h3>Phone #: ${contactForm.phone}</h3>
        </body>`;
        let info = await transporter.sendMail({
            from: `${contactForm.name} ${contactForm.email}`,
            to: "matthew@626plants.com",
            subject: `${contactForm.name}, New Contact`,
            text: "New Contact Received",
            html: html,
        })
}


module.exports = {
    SendReceipt: SendReceipt,
    SendContact: SendContact,
};
