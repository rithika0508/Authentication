// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)
// const sendEmail = (options) => {

// const msg = {
//     to: options.to,
//     from: "rithikavijaykumar@gmail.com",
//     subject: options.subject,
//     text:"yep",
//     html: options.text
// }
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent rithika')
//   })
//   .catch((error) => {
//     console.error(error)
//   })
// }

const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  try {
    const transporter = nodemailer.createTransport({
      service: process.env.SERVICE,
      port: 587,
      secure: true,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: process.env.USER,
      to: options.to,
      subject: options.subject,
      text: options.html,
    });

    console.log("email sent sucessfully");
  } catch (error) {
    console.log(error);
    throw new Error("Email not sent try again!");
  }
};

module.exports = sendEmail;

module.exports = sendEmail;
