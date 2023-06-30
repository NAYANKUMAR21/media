require('dotenv').config();
const express = require('express');
const app = express();
require('./init_redis');
console.log(process.env.REDIS_URL);
let count = 0;
let PORT = process.env.PORT || 8080;
let baseUrl = 'https://jsonplaceholder.typicode.com/todos';

app.use(express.json());

app.get('/', async (req, res) => {
  try {
    client.set('foo', 'bar');
    let x = client.get('foo');
    return res.status(200).send({ x });
  } catch (er) {
    return res.status(400).send({ message: er.message });
  }
});
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
