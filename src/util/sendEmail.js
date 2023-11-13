const nodemailer = require("nodemailer");

const NodeMailerEmailSender = async ({
  senderEmail,
  senderEmailPassword,
  userEmail,
  subject,
  textTitle,
  body,
  callback,
}) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: senderEmail,
      pass: senderEmailPassword,
    },
  });

  var mailOptions = {
    from: senderEmail,
    to: userEmail,
    subject: subject,
    text: textTitle,
    html: `${body}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      callback(error);
    } else {
      callback({
        status: "success",
        msg: `Email sent: + ${info.response}`,
      });
    }
  });
};

module.exports = NodeMailerEmailSender;
