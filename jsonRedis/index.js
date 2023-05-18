require('dotenv').config();
const express = require('express');
const connect = require('./config/db');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8080;
const userRouter = require('./router/auth.router');
const singleUser = require('./router/Signle.router');
app.use(express.json());
app.use(cors());
app.use('/auth', userRouter);
app.use('/user', singleUser);
app.listen(PORT, async () => {
  await connect();
  console.log(`Listening on http://localhost:${PORT}`);
});
