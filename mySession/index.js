const { createClient } = require('redis');
const client = createClient();

client.on('error', err => console.log('Redis Client Error', err));
const start = async () =>{
  await client.connect();
  console.log('connect')
}
start();

const setValue = async () => {
  await client.set('foo', 'bar');
  const value = await client.get('foo');
  console.log(value);
}

setValue();