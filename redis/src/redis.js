const { createClient } = require('redis');
const client = createClient({
  port: '6379',
  host: 'redis-server',
});
client.on('connect', () => {
  console.log(`Client connected to server`);
});
client.on('error', (err) => console.log('Redis Client Error', err));
client.on('disconnect', () => {
  console.log(`Redis diconnected`);
});
module.exports = client;
