const express = require('express');

const studRoute = require('./routes/studentsRoute');

const PORT = 3333;

const server = express();

server.set('view engine', 'ejs');
server.set('views', __dirname + '/views');

server.get('/',(req, res) => {
  res.render(students)
})

server.use('/list',studRoute);

server.listen(PORT, () => console.log(`Listening on ${PORT}`) )
