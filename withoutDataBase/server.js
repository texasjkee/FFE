const express = require('express');
const server = express();

const {authorRoute} = require('./router/authorRoute');
const {arr} = require('./router/authorRoute');
const articleRoute = require('./router/articleRoute');
const viewArticleRoute = require('./router/viewArticleRoute');

const PORT = 3333;

server.use(express.json());
server.use(express.static('public'));
server.use(express.urlencoded({ extended: true }));
// TO_DO: Why is this needed?

server.set('view engine', 'ejs');
server.set('views', __dirname + '/views');

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

server.use(authorRoute);
server.use(articleRoute);
server.use(viewArticleRoute);

server.listen(PORT, () => {
  console.log(`Listening on ${PORT} port`)
})