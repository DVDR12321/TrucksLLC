const express = require('express');
const app = express();
require('dotenv').config();

const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};
app.use(allowCrossDomain);

app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.post("/send_mail", cors(), async (req, res) => {
    let { state } = req.body;
    const transport = nodemailer.createTransport({
        host: process.env.MAL_HOST,
        port: process.env.MAIL_PORT,
        secure: false,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    });
    await transport.sendMail({
        from: process.env.MAIL_FROM,
        to: "test@test.com", 
        subject: "test email",
        html: `<div><p>${state.FirstName}</p></div>`
    });
});

app.listen(process.env.PORT || 4000, () => { console.log("Server is running"); });