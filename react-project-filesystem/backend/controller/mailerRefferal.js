require("dotenv").config();
const upload = require("../libs/multer");
const nodemailer = require("nodemailer");
const { Phone } = require("@mui/icons-material");

// handle succes or error of (first email sent successfully)?
const handle = (promise) => {
    return promise
        .then((data) => ([data, undefined]))
        .catch((error) => Promise.resolve([undefined, error]));
};

const mailerRefferal = {
    sendMail: (req, res) => {
        upload(req, res, async (err) => {
            if (err) {
                res.status(500).json({
                    data: err
                });
                
            } else {

                //Restructure data so that it may be sent
                const {FirstName, LastName, Email, RefferalEmail, Message } = req.body; 
                // pack data to HTML form
                const contentHTML = `
                <h1> ${FirstName} ${LastName} refers a driver <h1>
                <p> Reffered person's email: ${RefferalEmail} </p>
                <p> Email of the person who sent the refferal: ${Email} </p>
                <p>His message to us: ${Message}</p>
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
                        subject: "New Message",
                        html: contentHTML,

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
                          subject: "Auto-Reply: Thank you for your refferal",
                          html: `
                            <p>Thank you for reffering your friend to us. Our team will get back at you and him as soon as possible<p>
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

module.exports = mailerRefferal;