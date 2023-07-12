const express = require('express');
const mongoose = require('mongoose');
const server = express();
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const PORT = 4000;

const loginRouter = require('./routers/loginRouter');

server.use(express.json());
server.use(express.static('public'));

const store = new MongoDBStore({
  uri: 'mongodb://127.0.0.1:27017/FFE',
  collection: 'mySessions'
});

store.on('error', error => console.log(error));

server.use(session({
  secret: 'secret_key',
  resave: false,
  saveUninitialized: true,
  //? you must write secure: false;
  cookie: { 
    secure: false,
    expires: 5000
    // maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
  }
}));

server.use('/auth', loginRouter);

server.use((err, req, res, next) => {
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);
    
    res.status(500).json({
      message: 'Something went really wrong'
    });
});

server.listen(PORT, () => console.log(`Server running on ${PORT} `));

mongoose.connect('mongodb://127.0.0.1:27017/FFE')
    .then(()=> console.log('Connected to mongoDB'))
    .catch((err) => console.log(err));