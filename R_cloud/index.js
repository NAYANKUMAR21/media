const express = require('express');
const app = express();
const redis = require('redis');
const jwt = require('jsonwebtoken');
const client = redis.createClient({
  host: 'redis://red-chdqnd2k728nnn2n11hg',
  port: '6379',
});
client.on('error', () => {
  console.log(`Redis client Error`, err);
});
client.on('connect', () => {
  console.log('Redis Connected on instance');
});
app.get('/', async (req, res) => {
  try {
    await client.connect();
    let y = await client.get('token');

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
    await client.set('x', token);
    let z = await client.get('x');
    await client.quit();
    return res.status(200).send({ message: z });
  } catch (er) {
    return res.status(404).send({ message: er.message });
  }
});
app.listen(8080, () => {
  console.log('http://localhost:8080');
});
