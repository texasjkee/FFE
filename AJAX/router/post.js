const express = require('express');
const route = express.Router();

route.post('/posts?', (req, res) => {
  console.log(req.body)
  res.json({message: req.body})
})
module.exports = route;