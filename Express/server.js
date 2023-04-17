const express = require('express');
const route = require('./router/route.js');
const server = express();

const PORT = 3333;


const path = require('path');

server.use(route);

server.listen(PORT, err => {
  console.log(`Server running on ${PORT}`);
});
