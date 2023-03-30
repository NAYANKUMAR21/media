const { createClient } = require('redis');
const client = createClient();

client.on('connect', function () {
  console.log(`Client connected to server`);
});
client.on('error', (err) => console.log('Error Encountered', err));
client.on('disconnect', function () {
  console.log(`Redis diconnected`);
});
module.exports = client;
