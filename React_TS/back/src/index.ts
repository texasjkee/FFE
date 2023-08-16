// require('dotenv').config();
import express from 'express';
const server = express();

// const heroRouter = require('./router/heroRouter');

// const PORT = process.env.PORT;
const PORT: number = 4000;

server.use(express.json());
// server.use(heroRouter);

server.listen(PORT, () => console.log(`Server is listening on ${PORT}`));