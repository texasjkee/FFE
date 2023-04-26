const express = require('express');
const route = express.Router();

const {filterProducts} = require('../helper/filtersProducts');

route.get('/products?', (req, res) => {
  const weight = Number(req.query.sortByWeight);
  const country = req.query.country;

  if(weight && country) {
    res.json({
      message: filterProducts(weight, country)
    })
  } else {
    res.json({
      message: 'Bad request'
    })
  }
})

module.exports = route;