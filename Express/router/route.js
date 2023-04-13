const fs = require('fs');

const express = require('express');
const router = express.Router(); 
const path = require('path');

router.get('/',(req, res) => {
  res.end('Hello dude:)');
})

router.get('/:params',(req, res) => {
  const format = req.params['params'].split('.')[1];

  if(format === 'jpg' || 'png') {
    res.sendFile(path.join(__dirname, `../src/img/dog.jpg`));
  } else if (format === 'html') {
    res.sendFile(path.join(__dirname, `../src/html/index.html`));
  } else if (format === 'css') {
    res.sendFile(path.join(__dirname, `../src/css/style.css`));
  } else if (format === 'js') {
    res.sendFile(path.join(__dirname, `../src/scripts/script.js`));
  } else {
    res.end('Bad request :(');
  }
})

module.exports = router;