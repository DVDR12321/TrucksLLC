require("dotenv").config();
const upload = require("../libs/multer");
const nodemailer = require("nodemailer");
const fs = require('fs');

// handle succes or error of (first email sent successfully)?
const handle = (promise) => {
    return promise
        .then((data) => ([data, undefined]))
        .catch((error) => Promise.resolve([undefined, error]));
};

const mailerController = {
    sendMail: (req, res) => {
        upload(req, res, async (err) => {
            if (err) {
                res.status(500).json({
                    data: err
                });
                
            } else {

                //Restructure data so that it may be sent
                const {FirstName, LastName, Email, PhoneNumber, Adress, Accident, Licence, Company, Position, Signature } = req.body; 
                const accidentData = Accident.map(({ Date, Description }) => `Date: ${Date} Description: ${Description},  `).join(', ');
                const licenceData = Licence.map(({ LDate, LDescription }) => `Date of expiration: ${LDate} Licence number: ${LDescription},  `).join(', ');
                const employementData = Company.map(({ Name, DateFrom, DateTo, Reason }) => `Name: ${Name} worked from: ${DateFrom} worked to:${DateTo}. Reason for leaving: ${Reason},  `).join(', ');
                let Sig = Signature;
                let newSig = Sig.replace('data:image/png;base64,', '');
                const buffer = Buffer.from(newSig, 'base64');
                fs.writeFileSync('image.jpg', buffer);
                const image = fs.readFileSync('image.jpg');
                console.log(image);
                // pack data to HTML form
                const contentHTML = `
                    <h2> The driver: ${FirstName} ${LastName} wants to apply for the position of : ${Position}</h2>
                    <h3> Their core data is : </h3>
                    <p> Email adress: ${Email}; Phone number :${PhoneNumber} </p>
                    <h3> Additional data provided: </h3>
                    <p> Current and previous adresses of residence:${Adress}</p>
                    <p> Accidents they got into in the past: ${accidentData}</p>
                    <p> Driving licence(s):${licenceData}</p>
                    <p> Previous employment:${employementData}</p>
                `;
                
                //create transporter
                const transporter = nodemailer.createTransport({
                    host: process.env.HOST,
                    port: process.env.PORT,
                    secure: false, 
                    auth: {
                        user: process.env.USER,
                        pass:process.env.PASS
                    }
                });
                //send the email
                const [SMTPResponse, SMTPResponseError] = await handle(
                    transporter.sendMail({
                        envelope: {
                            from: process.env.FROM,
                            to: process.env.TO
                        },
                        subject: "New Driver Application",
                        html: contentHTML,
                        attachments: [{
                            filename: 'image.jpg',
                            content: image,
                            //contentType: 'image/jpeg',
                            //encoding: 'base64',
                          }]
                    })
                );
                // send Auto-reply to user, on success
                if (SMTPResponse) {
                    res.status(200).json({
                        data: "email received, we will reach out as soon as possible" + SMTPResponse.messageId
                    });
                    const transporter2 = nodemailer.createTransport({
                        host: process.env.HOST,
                        port: process.env.PORT,
                        secure: false, 
                        auth: {
                          user: process.env.USER,
                          pass:process.env.PASS
                        }
                      });
                      
                      //send the auto-reply email
                      const [autoReplyResponse, autoReplyResponseError] = await handle(
                        transporter2.sendMail({
                          envelope: {
                            from: process.env.FROM,
                            to: req.body.Email
                          },
                          subject: "Auto-Reply: Thank you for your application",
                          html: `
                            <p>Thank you for submitting your application for the position of ${Position} at Trucks LLC.
                             Our recruiting team will review it and get back to you as soon as possible.<p>
                             <br>
                             <p><b>You can reach us at +1 312 466 1101 at any time</b></p>
                             <br>
                             <p> Have a pleasant day.</p>
                          `
                        })
                      );
                      
                      if (autoReplyResponse) {
                        console.log("Auto-reply email sent successfully");
                      } else if (autoReplyResponseError) {
                        console.error("Error sending auto-reply email:", autoReplyResponseError);
                      }
                }
                // do something on error of first email
                if (SMTPResponseError) {
                    res.status(500).json({
                        data: SMTPResponseError
                    });
                }
                
            }
        });
    }
};

module.exports = mailerController;