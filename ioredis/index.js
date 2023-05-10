const express = require('express');
const app = express();
const Redis = require('ioredis');
const jwt = require('jsonwebtoken');
const client = new Redis('redis://red-chdqnd2k728nnn2n11hg:6379');

client.on('error', (err) => {
  console.log(`Redis client Error`, err);
});
client.on('connect', () => {
  console.log('Redis Connected on instance');
});
app.get('/', async (req, res) => {
  try {
    client.connect();
    let y = client.get('token');

    if (y) {
      client.quit();
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
    client.set('x', token);
    let z = client.get('x');
    client.quit();
    return res.status(200).send({ message: z });
  } catch (er) {
    return res.status(404).send({ message: er.message });
  }
});
app.listen(8000, () => {
  console.log('http://localhost:8000');
});
