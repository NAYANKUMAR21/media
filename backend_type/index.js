const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const cors = require('cors');

app.use(express.json());
app.use(cors());

const connect = async () => {
  return mongoose.connect(
    'mongodb+srv://NAYAN:NAYAN@cluster0.u60zxbv.mongodb.net/adobe?retryWrites=true&w=majority'
  );
};
const file = {
  email: { type: String, require: true, unique: true },
  password: { type: String },
};
const userSchema = new mongoose.Schema(file);
const userModel = mongoose.model('user', userSchema);

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const checkUser = await userModel.findOne({ email, password });
    if (checkUser) {
      const token = jwt.sign({ id: email, roll: 21 }, 'NAYAN');
      return res
        .status(200)
        .send({ message: 'account authenticated', token: token });
    }
    return res.status(200).send({ message: 'Account doesnt existed' });
  } catch (er) {
    return res.status(500).send({ message: er.message });
  }
});
app.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    const checkUser = await userModel.findOne({ email });
    if (checkUser) {
      return res.status(404).send({ message: 'User Already Existed' });
    }
    await userModel.create({ email, password });

    return res.status(200).send({ message: 'User successfully created' });
  } catch (er) {
    return res.status(500).send({ message: er.message });
  }
});
app.get('/', async (req, res) => {
  try {
    const x = await userModel.find();
    return res.status(200).send({ data: x });
  } catch (er) {
    return res.status(500).send({ message: er.message });
  }
});
app.listen(8080, async () => {
  await connect();
  console.log(`http://localhost:8080`);
});
