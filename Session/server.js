const session = require('express-session');
const MongoDBSession = require('connect-mongodb-session')(session);
const mongoose = require('mongoose');
const express = require('express');
const server = express();

const authRouter = require('./router/auth/');

const mongoURI = 'mongodb://127.0.0.1:27017/session';

const PORT = 4000;

const store = new MongoDBSession({
  uri: mongoURI,
  collection: 'SessionsJkee'
});

server.use(express.json());
server.use(session({
  secret: 'secret_key',
  resave: false, 
  saveUninitialized: false,
  store
}));

server.use('/auth', authRouter);

server.listen(PORT, () => console.log(`Server running on ${PORT}`));

mongoose.connect(mongoURI).then(()=> console.log('MongoDB connection'));