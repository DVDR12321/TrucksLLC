const upload = require("../libs/multer");
const nodemailer = require("nodemailer");
require("dotenv").config();

const handle = (promise) => {
    return promise
    .then((data) => ([data, undefined]))
    .catch((error) => Promise.resolve([undefined, error]));
}

const mailerController = {
    sendMail: (req, res) => {
        upload(req, res, async (err) => {
            if (err) {
                res.status(500).json({
                    data: err
                });
                
            } else {

                console.log(req.body);
                const { state } = req.body; // mozda mora da se promeni 
                const image = req.file;
                const contentHTML = `
                    <h1>The driver ${state.FirstName} ${state.LastName} wants to apply for the position of ${state.Position}. His prone number is : ${state.PhoneNumber} and his email adres is:${state.Email}</h1>
                `;

                console.log(state.FirstName);
                
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
                        subject: "Subject",
                        html: contentHTML
                    })
                );
                // do something on send or on error
                if (SMTPResponse) {
                    res.status(200).json({
                        data: "email received, we will reach out as soon as possible" + SMTPResponse.messageId
                    });
                }
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

 