const { Router } = require('express');
const route = Router();

const STATUS = require('../helper/status');
const conrtoller = require('../controller/author');

route.post('/author', (req, res) => {
  const author = req.body.author;
  const result = conrtoller(author);

  if (result) {
    res.json({ status: STATUS.OK, payload: result });
  } else { 
    res.json({ status: STATUS.BAD_REQUEST });
  }
});

module.exports = route;