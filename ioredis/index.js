const express = require('express');
const app = express();
const Redis = require('ioredis');
const jwt = require('jsonwebtoken');
const client = new Redis({
  host: 'redis-11196.c301.ap-south-1-1.ec2.cloud.redislabs.com',
  port: '11196',
});

app.get('/', async (req, res) => {
  try {
    let y = client.get('token');
    console.log(y);
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
