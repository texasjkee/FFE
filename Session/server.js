const express = require('express');
const server = express();
const Cookie = require('cookies');
const session = require('express-session');

const varMiddleware = require('./middleware/variables');
const authRouter = require('./router/authRouter');

const PORT = 4000;

server.use(express.json());

server.use(session({
  secret: 'secret_key',
  resave: false, 
  saveUninitialized: false
}));

server.use(varMiddleware);
server.use('/auth', authRouter);

server.listen(PORT, () => console.log(`Server running on ${PORT}`));