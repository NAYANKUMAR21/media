const { createClient } = require('redis');
const client = createClient({
  Port: '127.0.0.1',
  Host: '6379',
});
client.on('connect', () => {
  console.log(`Client connected to server`);
});
client.on('error', (err) => console.log('Redis Client Error', err));
client.on('disconnect', () => {
  console.log(`Redis diconnected`);
});
module.exports = client;
