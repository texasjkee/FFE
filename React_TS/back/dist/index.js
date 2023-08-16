"use strict";
require('dotenv').config();
const express = require('express');
const server = express();
const heroRouter = require('./router/heroRouter');
const PORT = process.env.PORT;
server.use(express.json());
server.use(heroRouter);
server.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
