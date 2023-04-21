const express = require('express');
const server = express();

const mainRoute = require('./router/main');

const PORT = 3333;

server.use(express.static('public'));
server.use('/css', express.static(__dirname + 'public/css'));
server.use('/img', express.static(__dirname + 'public/img'));

server.set('view engine', 'ejs');
server.set('views', __dirname + '/views');

server.get('/', (req, res) => {
  res.render('index');
})

server.use(mainRoute);

server.listen(PORT, (err) => {
  console.log(`Server running on ${PORT}`)
});
