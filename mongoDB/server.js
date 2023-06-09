const express = require('express');
const mongoose = require('mongoose');
const server = express();

const PORT = 3333;

const authorRoute = require('./router/authorRoute');
const articleRoute = require('./router/articleRoute');
const viewArticleRoute = require('./router/viewArticleRoute');

//Middleware.
server.use(express.json());

//Static
server.use(express.static('public'));
server.use(express.urlencoded({ extended: true }));

//Engine template
server.set('view engine', 'ejs');
server.set('views', __dirname + '/views');

//Render

server.get('/',(req, res) => {
  res.render('index');
})

server.get('/author',(req, res) => {
  res.render('author');
})

server.get('/article',(req, res) => {
  res.render('article');
})

server.get('/viewArticle',(req, res) => {
  res.render('viewArticle');
})

//Router.

server.use(authorRoute);
server.use(articleRoute);
server.use(viewArticleRoute);

//Global Error Handler. IMPORTANT  function params MUST start with err.
server.use((err, req, res, next) => {
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);
    
    res.status(500).json({
      message: 'Something went really wrong'
    });
});

server.listen(PORT, () => console.log(`Server running on ${PORT}`));

//Connect to Data Base
mongoose.connect('mongodb://127.0.0.1:27017/FFE').then(()=> {
     console.log('Connected to mongoDB');
}).catch((error) => {
    console.log(error);
});