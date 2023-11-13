const express = require("express");
const Router = express.Router;
const sendEmail = require("../util/sendEmail");

const emailRoutes = Router();

emailRoutes.post("/send", (req, res) => {
  const { userEmail, subject, textTitle, body } = req.body ?? {};

  sendEmail({
    senderEmail: process.env.GMAIL,
    senderEmailPassword: process.env.GMAIL_PASSWORD,
    userEmail,
    subject,
    textTitle,
    body,
    callback: (response) => {
      console.log("Sent email to " + userEmail);
      res.status(200).json({ ...response });
    },
  });
});

module.exports = emailRoutes;
