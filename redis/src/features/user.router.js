const { Router } = require('express');
const app = Router();
const client = require('../redis');
app.get('/', async (req, res) => {
  try {
    await client.connect();
    let redisValue = await client.get('key');
    await client.disconnect();
    return res
      .status(200)
      .send({ message: `Successfully redis value read  `, redisValue });
  } catch (er) {
    return res.status(404).send({ message: er.message });
  }
});
module.exports = app;
