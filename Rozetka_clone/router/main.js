const express = require('express');

const products = require('../dataBase/products');

const route = express.Router();

route.get('/products/:id', (req, res) => {
  //TO_DO: url/:id & url:id
  const urlId = Number(req.params.id) 
  const product = products.find(el => el.id === urlId)
  if(product) {
    res.render('index', {product})
  } else {
   res.end('Bad request') 
  }
})

module.exports = route;