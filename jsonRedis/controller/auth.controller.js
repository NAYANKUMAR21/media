require('dotenv').config();
const userModel = require('../model/auth.model');
const jwt = require('jsonwebtoken');
const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const checkUser = await userModel.findOne({ email });
    if (checkUser && password === checkUser.password) {
      const token = jwt.sign(
        { id: checkUser.name, db_id: checkUser._id, email: checkUser.email },
        process.env.TOKEN_KEY
      );

      return res
        .status(200)
        .send({ message: 'User Logged In Successfully', token });
    }
    return res.status(200).send({ message: "User doesn't exist " });
  } catch (er) {
    return res.status(400).send({ message: er.message });
  }
};
const Signup = async (req, res) => {
  const { name, email, password } = req.body;
  console.log('1');
  try {
    const checkUser = await userModel.findOne({ email: email });
    console.log('2');
    if (checkUser) {
      return res.status(200).send({ message: 'User already exists' });
    }
    console.log('3');
    await userModel.create({ name, email, password });
    console.log('4');
    return res.status(200).send({ message: 'User created successfully' });
  } catch (er) {
    return res.status(400).send({ message: er.message });
  }
};
module.exports = { Login, Signup };
