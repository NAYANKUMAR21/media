const redis = require('redis');
const client = redis.createClient({
  host: 'redis://red-chdqnd2k728nnn2n11hg',
  port: '6379',
});

client.on('connect', () => console.log(`Redis Connected to DB`));
client.on('error', (err) => console.log('Redis Client Error', err));

module.exports = client;
