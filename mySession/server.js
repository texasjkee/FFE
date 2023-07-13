const express = require('express');
const server = express();
const mongoose = require('mongoose');
const session = require('express-session');
const redis = require('redis');
const connectRedis = require('connect-redis')
const RedisStore = connectRedis(session);
const redisClient = redis.createClient({url: 'redis://127.0.0.1:6379'});
// const redis = require('ioredis');
// const redisClient = redis.createClient({host:'127.0.0.1', port: 6379});

const PORT = 4000;

const loginRouter = require('./routers/authRouter');

redisClient.on('error', err => console.log('Redis Client Errorjkee', err));
redisClient.on('connect',() => {
    console.log('connected to redis successfully!');
})

server.use(session({
  store: new RedisStore({client: redisClient}),
  secret: 'texasjkee',
  saveUninitialized: false,
  cookie: {
    secure: false, // if true: only transmit cookie over https
    httpOnly: true, // if true: it prevents client side JS from reading the cookie
    maxAge: 1000 * 60 * 30 // session max age in miliseconds
  }
}));

server.use(express.json());
server.use(express.static('public'));

// server.use('/auth', loginRouter);

server.post('/login', (req, res) => {
    const {email, password} = req;

    // check if the credentials are correct
    // ...

    // assume that credentials are correct
    req.session.clientId = 'abc123';
    req.session.myNum = 5;

    res.json('you are now logged in');
});

// 4. plug in another middleware that will check if the user is authenticated or not
// all requests that are plugged in after this middleware will only be accessible if the user is logged in
server.use((req, res, next) => {
    if (!req.session || !req.session.clientId) {
        const err = new Error('You shall not pass');
        err.statusCode = 401;
        next(err);
    }
    next();
});

// 5. plug in all routes that the user can only access if logged in
server.get('/profile', (req, res) => {
    res.json(req.session);
});

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