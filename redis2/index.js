const express = require('express');
const redis = require('redis');
const client = redis.createClient();
const app = express();
const cors = require('cors');
client.on('connect', () => {
  console.log(`Client Successfully Connected`);
});
client.on('error', (er) => {
  console.log(`Error Encountered`, er);
});
client.connect();
app.use(express.json());
app.use(cors());

app.post('/add-to-redis', async (req, res) => {
  const { context, number } = req.body;
  try {
    if (!context) {
      return res.status(400).send({ message: 'Empty context' });
    }
    let dataRedis = await client.get(`${number}`);
    if (dataRedis) {
      return res.status(200).send({ message: 'Already exists', dataRedis });
    }

    client.set(`${number}`, `${context}`);
    return res.status(200).send({ message: 'Context added Successfully' });
  } catch (er) {
    return res.status(403).send({ message: `${er.message} from here` });
  }
});
app.get('/get-redis', async (req, res) => {
  try {
    console.log(req.body);
    const getAll = await client.keys('*');
    return res.status(200).send({ message: getAll });
  } catch (er) {
    return res.status(403).send({ message: er.message });
  }
});
app.listen(8080, () => {
  console.log(`listening on http://localhost:${8080}`);
});
