const express = require('express');
const route = express.Router();

const { filterByPrice } = require('../helper/filtersProducts');

route.get('/products?', (req, res) => {
  const min = +req.query.min;
  const max = +req.query.max;
  console.log(min, max)
  if(min && max) {
    res.json({
      message: filterByPrice(min, max)
    })
  } else {
    res.json({
      message: 'Bad request'
    })
  }
})

route.post('/products?', (req, res) => {
  console.log(req.body)
  res.json({message: req.body})
})
module.exports = route;