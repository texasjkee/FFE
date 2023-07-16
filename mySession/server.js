// const express = require('express');
// const session = require('express-session');
// const redis = require('redis');
// const RedisStore = require('connect-redis')(session);

// const app = express();
var express = require('express');
var redis   = require("redis");
var session = require('express-session');
var redisStore = require('connect-redis')(session);
var client  = redis.createClient();
var app = express();

app.use(session({
    secret: 'ssshhhhh',
    store: new redisStore({ host: 'localhost', port: 6379, client: client}),
    saveUninitialized: false,
    resave: false
}));

// const redisClient = redis.createClient()
// redisClient.connect().catch(console.error)

// const redisStore = new RedisStore({
//   client: redisClient,
//   prefix: "myapp:",
// })

// app.use(session({
//     store:  redisStore,
//     secret: 'mySecret',
//     saveUninitialized: false,
//     resave: false, 
//     cookie: {
//         secure: false, // if true: only transmit cookie over https
//         httpOnly: true, // if true: prevents client side JS from reading the cookie
//         maxAge: 1000 * 60 * 30, // session max age in milliseconds
//         sameSite: 'lax' // make sure sameSite is not none
//     }
// }));

app.post('/login', (req, res) => {
    const {email, password} = req;
    req.session.clientId = 'abc123';
    req.session.myNum = 5;

    res.json('you are now logged in');
});

app.use((req, res, next) => {
    if (!req.session || !req.session.clientId) {
        const err = new Error('You shall not pass');
        err.statusCode = 401;
        next(err);
    }
    next();
});

app.get('/profile', (req, res) => {
    res.json(req.session);
});

app.listen(8080, () => console.log('server is running on port 8080'));