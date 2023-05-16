const express = require('express');
const server = express();

const postRoute = require('./router/postRoute');
const formRoute = require('./router/formRoute');
const fileRoute = require('./router/fileRoute');

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

server.get('/form',(req, res) => {
  res.render('form');
})

server.get('/file',(req, res) => {
  res.render('file');
})

server.use(postRoute);
server.use(formRoute);
server.use(fileRoute);

server.listen(PORT, () => {
  console.log(`Listening on ${PORT} port`)
})