const redis = require('redis');
const client = redis.createClient({
  //   socket: {
  //   url: 'redis-17541.c305.ap-south-1-1.ec2.cloud.redislabs.com',
  // host: 'red-chdqnd2k728nnn2n11hg',
  // port: 6379,
  //   },
  //   url: 'redis://redis-17541.redislabs.com:17541',
  socket: {
    host: 'redis-17541.redislabs.com',
    port: 17541,
  },
  password: 'rLoi4R7GkfJOdkI3OrhVwuSWNwxC8zg4',
});
client.connect(() => {
  console.log('Redis Connected....');
});

// client.ready(() => {
//   console.log('Redis Ready to use');
// });

// client.on('error', (err) => {
//   console.log('Redis Client Error', err.message);
// });

// client.on('end', () => {
//   console.log('Client disconnected from redis');
// });

process.on('SIGINT', async () => {
  await client.quit();
});

module.exports = client;
