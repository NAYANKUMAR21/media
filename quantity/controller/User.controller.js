const UserModel = require('../model/User.model');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const SignUpUser = async (req, res) => {
  console.log(1);
  const {
    firstName,
    lastName,
    email,
    password,
    UserProfilePic,
    Cart,
    Wishlist,
    Country,
    State,
    Address,
  } = req.body;
  try {
    const isUserPresent = await UserModel.findOne({ email: email });
    if (isUserPresent) {
      return res.status(400).send({ message: 'User already present' });
    }
    let hash = await bcrypt.hash(password, saltRounds);
    await UserModel.create({
      firstName,
      lastName,
      email,
      password: hash,
      UserProfilePic,
      Cart,
      Wishlist,
      Country,
      State,
      Address,
    });
    return res.status(200).send({ message: 'User created successfully' });
  } catch (er) {
    return res.status(400).send({ message: er.message });
  }
};
const LoginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const checkUser = await UserModel.findOne({ email: email });
    if (checkUser && (await bcrypt.compare(password, checkUser.password))) {
      const token = jwt.sign(
        {
          id: checkUser._id,
          firstName: checkUser.firstName,
        },
        process.env.JWT_TOKEN
      );
      return res
        .status(200)
        .send({ message: 'User Logged In Successfully', token });
    }
    return res.status(400).send({ message: 'User Doesnt exists' });
  } catch (er) {
    return res.status(400).send({ message: er.message });
  }
};
const getAllUsers = async (req, res) => {
  const token = req['headers']['authorization'];
  try {
    const jwtVerify = jwt.verify(token);
    if (jwtVerify) {
      const users = await UserModel.find();
      return res.status(200).send({ data: users });
    }
    return res.status(403).send({ message: 'User not authenticated' });
  } catch (er) {
    return res.status(400).send({ message: er.message });
  }
};
module.exports = { SignUpUser, LoginUser, getAllUsers };
