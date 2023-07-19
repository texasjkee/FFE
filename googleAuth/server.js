const express = require('express');
const server = express();

const PORT = process.env.PORT || 4050;

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index');
});

server.get('/login', (req, res) => {
  res.render('login');
});

server.listen(PORT, () => console.log(`Server running on ${PORT} port`));