const express = require("express");
const router = express.Router();
const mailerController = require("../controller/mailerController");
const mailerControllerMessage = require("../controller/mailerControllerMessage");
const mailerRefferal = require("../controller/mailerRefferal");

router.post("/mailer", mailerController.sendMail);
router.post("/mailer2", mailerController.sendMail);
router.post("/mailerMessage", mailerControllerMessage.sendMail);
router.post("/mailerRefferal", mailerRefferal.sendMail);

module.exports = router;