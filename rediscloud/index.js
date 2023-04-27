const express = require('express');
const app = express();

const redis = require('redis');
const client = redis.createClient({
  host: 'redis-10323.c264.ap-south-1-1.ec2.cloud.redislabs.com',
  port: '10323',
  //   password: 'gU9oBAT3oqOMS4NyXO01hMggO8yDom8H',
});
client.on('error', (err) => console.log('Redis Client Error', err));
client.on('connect', () => {
  console.log('Connected to redis data base');
});
app.use(express.json());

app.get('/', async (req, res) => {
  try {
    await client.connect();
    let y = await client.get('key');
    if (y) {
      await client.quit();
      return res.status(200).send({ message: y });
    }
    await client.set('key', 'value set as Nayan Kumar hanchate');
    let x = await client.get('key');
    await client.quit();
    return res.status(200).send({ message: x });
  } catch (er) {
    return res
      .status(400)
      .send({ message: 'Bad request something fault in syntax' });
  }
});
app.listen(8080, () => {
  console.log(`http://localhost:8080`);
});
