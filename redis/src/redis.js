const { createClient } = require('redis');
const client = createClient({
  url: 'redis://127.0.0.1:6379',
  username: 'default', // use your Redis user. More info https://redis.io/docs/management/security/acl/
  password: 'gU9oBAT3oqOMS4NyXO01hMggO8yDom8H', // use your password here
});
client.isReady;
client.on('connect', function () {
  console.log(`Client connected to server`);
});
client.on('error', (err) => console.log('Error Encountered', err));
client.on('disconnect', function () {
  console.log(`Redis diconnected`);
});
module.exports = client;
