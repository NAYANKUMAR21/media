require('dotenv').config();
const { Router } = require('express');
const userModel = require('./auth.model');
const app = Router();
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
app.get('/', (req, res) => {
  return res.send(`<h2>Welcome To backend Login Route</h2>`);
});
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await userModel.findOne({ email: email, password: password });

    if (check) {
      const token = jwt.sign({ id: email, rollNo: 234 }, process.env.TOKEN_KEY);
    }
    return res.status(400).send({ message: `Account Doesn't exist ${email}` });
  } catch (er) {
    return res.status(404).send({ message: er.message });
  }
});
app.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await userModel.findOne({ email: email });
    if (!check) {
      const hash = await argon2.hash(password);
      await userModel.create({
        email: email,
        password: hash,
      });
      return res
        .status(200)
        .send({ message: `User Created Successfully ${email}` });
    }
    return res
      .status(400)
      .send({ message: `Account Already Existed ${email}` });
  } catch (er) {
    return res.status(404).send({ message: er.message });
  }
});
module.exports = app;
