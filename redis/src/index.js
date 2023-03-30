require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8080;
const connect = require('./config/db');
const authRouter = require('./features/auth.router');
const checkRouter = require('./features/user.router');
const client = require('./redis');
app.use(express.json());
app.use(cors());
app.use('/auth', authRouter);
app.use('/check', checkRouter);
app.get('/', (req, res) => {
  return res.send(`<h1>Welcome to backend redis</h1>`);
});
client.connect();

app.listen(PORT, async () => {
  await connect();
  console.log(`listening on http://localhost:${PORT}`);
});
