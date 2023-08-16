const express = require('express');
const server = express();

const heroRouter = require('./router/heroRouter');

const PORT = 4000;

server.use(express.json());

server.listen(PORT, () => console.log(`Server is listening on ${PORT}`));