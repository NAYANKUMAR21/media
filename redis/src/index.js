require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const connect = require('./config/db');

app.get('/', (req, res) => {
  return res.send(`<h1>Welcome to backend redis</h1>`);
});
app.listen(PORT, async () => {
  await connect();
  console.log(`listening on http://localhost:${PORT}`);
});
