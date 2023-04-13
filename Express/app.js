const express = require('express');
const route = require('./router/route.js');
const app = express();

const PORT = 3333;

const path = require('path');

app.use(route);

app.listen(PORT, err => {
  console.log(`Server running on ${PORT}`);
});
