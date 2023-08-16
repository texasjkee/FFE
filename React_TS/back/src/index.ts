require('dotenv').config();
// import cors from "cors";
import mongoose from "mongoose";
import express from 'express';

const server = express();
const heroRouter = require('./router/heroRouter');

const PORT = 4000;
const mongoURI = 'mongodb://127.0.0.1:27017/session';

server.use(express.json());
// server.use(cors());
server.use(heroRouter);

mongoose.connect(mongoURI).then(()=> console.log('MongoDB connection'));

server.listen(PORT, () => console.log(`Server is listening on ${PORT}`));