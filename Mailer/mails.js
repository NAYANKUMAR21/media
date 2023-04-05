const nodeMailer = require('nodemailer');
const transporter = nodeMailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: process.env.Username,
    pass: process.env.Password,
  },
});
//process.env.Username

module.exports = transporter;
