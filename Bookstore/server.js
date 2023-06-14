const mongoose = require('mongoose');
const express = require('express');
const server = express();

const authorRoute = require('./router/authorRoute');
const bookRoute = require('./router/bookRoute');

const PORT = 3333;

server.use(express.json());
server.use(express.static('public'));

server.use(authorRoute);
server.use(bookRoute);

server.set('view engine', 'ejs');
server.set('views', __dirname + '/views');

server.get('/',(req, res) => {
  res.render('index');
})

server.use((err, req, res, next) => {
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);
    
    res.status(500).json({
      message: 'Something went really wrong'
    });
});

server.listen(PORT, () => console.log(`Server running on ${PORT}`));

mongoose.connect('mongodb://127.0.0.1:27017/bookstore')
    .then(()=> console.log('Connected to mongoDB'))
    .catch((err) => console.log(err));