require('dotenv').config();
let jwt = require('jsonwebtoken');
const client = require('../Redis/redis.cache');
const getUSer = async (req, res) => {
  const token = req.headers.authorization;
  try {
    console.log(token, process.env.TOKEN_KEY);
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    console.log(1);
    await client.connect();
    console.log(2);

    let x = await client.get(decoded.db_id);
    console.log(3, x, decoded.db_id, JSON.stringify(decoded));

    if (x) {
      await client.disconnect();
      return res.status(200).send({
        message: 'Received from Cached in Redis',
        Decode: JSON.parse(x),
      });
    }
    const z = 'new Date()';
    decoded.Date = z;
    let y = JSON.stringify(decoded);
    await client.set(decoded.db_id, y);
    await client.disconnect();
    return res.status(200).send({ message: 'Cached now in Redis' });
  } catch (er) {
    return res.status(400).send({ message: er.message });
  }
};
module.exports = getUSer;
