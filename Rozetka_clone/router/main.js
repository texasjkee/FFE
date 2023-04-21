const express = require('express');

const route = express.Router();

route.get('/user', (req, res) => {
  res.render('index')
})

module.exports = route;