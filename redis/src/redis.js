const { createClient } = require('redis');
const client = createClient();
client.on('connect', () => {
  console.log(`Client connected to server`);
});
client.on('error', (err) => console.log('Redis Client Error', err));
client.on('disconnect', () => {
  console.log(`Redis diconnected`);
});
module.exports = client;
