require("dotenv").config();
const upload = require("../libs/multer");
const nodemailer = require("nodemailer");


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

                console.log(req.body);
                 const {FirstName, LastName, Email, PhoneNumber, Adress, Accident, Licence, Company, Position, Signature } = req.body; 
                // const image = req.file;
                const accidentData = Accident.map(({ Date, Description }) => `Date: ${Date}, Description: ${Description}`).join(', ');
                const licenceData = Licence.map(({ LDate, LDescription }) => `Date of expiration: ${LDate}, Licence number: ${LDescription}`).join(', ');
                const employementData = Company.map(({ Name, DateFrom, DateTo, Reason }) => `Name: ${Name}, worked from: ${DateFrom}, worked to:${DateTo}. Reason for leaving: ${Reason}`).join(', ');
             

                const contentHTML = `
                    <h2>The driver: ${FirstName}, ${LastName} wants to apply for the position of : ${Position}</h2>
                    <h3> Their core data is : </h3>
                    <p> Email adress: ${Email}, phone number :${PhoneNumber} </p>
                    <h3> Additional data provided: </h3>
                    <p> Current and previous adresses of residence:${Adress}</p>
                    <p> Accidents they got into in the past: ${accidentData}</p>
                    <p> Driving licence(s):${licenceData}</p>
                    <p> Previous employment data:${employementData}</p>
                    <p> His signature hash: ${Signature}
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

 