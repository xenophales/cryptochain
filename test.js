const redis = require('redis');
const client = redis.createClient();

client.connect();
client.on('connect', async function() {
console.log('Connected!');
});