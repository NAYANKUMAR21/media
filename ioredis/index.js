const express = require('express');
const app = express();
const Redis = require('redis');
const jwt = require('jsonwebtoken');
const client = Redis.createClient({
  host: 'redis://red-chdqnd2k728nnn2n11hg',
  port: '6379',
});
client.on('error', function (er) {
  console.log('error on redis', er);
});
client.on('connect', function () {
  console.log('redis conncted');
});
client.on('quit', () => {
  console.log('redis quit');
});
app.get('/', async (req, res) => {
  try {
    await client.connect();
    let y = await client.get('token');
    console.log(y);
    if (y) {
      await client.quit();
      return res.status(200).send({ message: y });
    }
    const token = jwt.sign(
      {
        id: '123',
        name: 'Nayan Kumar',
        success: '21 june 2024',
      },
      'REDIS'
    );
    await client.set('token', token);
    let z = await client.get('token');
    await client.quit();
    return res.status(200).send({ message: z });
  } catch (er) {
    return res.status(404).send({ message: er.message });
  }
});
app.listen(8000, () => {
  console.log('http://localhost:8000');
});
