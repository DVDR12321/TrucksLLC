const express = require("express");
const router = express.Router();
const mailerController = require("../controller/mailerController");

router.post("/mailer", mailerController.sendMail);
router.post("/mailer2", mailerController.sendMail);

module.exports = router;