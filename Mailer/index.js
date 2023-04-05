require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const transporter = require('./mails');
const fs = require('fs');
const handleBar = require('handlebars');
app.use(express.json());
app.use(cors());

app.post('/', async (req, res) => {
  let { name } = req.body;
  const html = fs.readFileSync('./index.hbs', 'utf-8');
  const template = handleBar.compile(html);
  let mailOptions = {
    from: 'naayaankumar@gmail.com',
    to: 'battledown1@gmail.com',
    subject: 'Mail Sent Using NodeMailer',
    html: template({ user: name }),
    text: 'you have been selected to Masai Starts in June ',
  };
  transporter
    .sendMail(mailOptions)
    .then(() => {
      console.log('Mail sent successfully');
    })
    .catch((er) => console.log('failed to send ', er.message));
  res.send(`<h1>Hello welcome to get request</h1>`);
});
app.listen(8080, () => {
  console.log('listening on http://localhost:8080');
});
