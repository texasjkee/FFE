const express = require('express');
const server = express();
const session = require('express-session');

const PORT = 4000;

const loginRouter = require('./routers/loginRouter');

server.use(express.json());
server.use(express.static('public'));

server.use(session({
  secret: 'secret_key',
  resave: false,
  saveUninitialized: true,
  //? you must write secure: false;
  cookie: { secure: false }
}));

server.use((err, req, res, next) => {
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);
    
    res.status(500).json({
      message: 'Something went really wrong'
    });
});

server.use('/auth', loginRouter);

server.listen(PORT, () => console.log(`Server running on ${PORT} `));