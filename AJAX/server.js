const express = require('express');
const server = express();

const productRoute = require('./router/post');

const PORT = 3333;

server.use(express.json())
server.use(express.static('public'));
server.use(express.urlencoded({ extended: true }));
// TO_DO: Why is this needed?

server.set('view engine', 'ejs');
server.set('views', __dirname + '/views');

server.get('/',(req, res) => {
  res.render('index');
})

server.use(productRoute);

server.listen(PORT, () => {
  console.log(`Listening on ${PORT} port`)
})

