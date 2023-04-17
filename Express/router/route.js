const path = require('path');

const express = require('express');

const router = express.Router(); 

router.get('/',(req, res) => {
  res.end('Hello dude:)');
})

router.get('/:params',(req, res) => {
  const format = req.params['params'].split('.')[1];
  const urlPath = req.url.slice(req.url.indexOf(':') + 1);

  if(format === 'jpg' || 'png') {
    res.sendFile(path.join(__dirname, `../src/img/${urlPath}`));
  } else if (format === 'html') {
    res.sendFile(path.join(__dirname, `../src/html/${urlPath}`));
  } else if (format === 'css') {
    res.sendFile(path.join(__dirname, `../src/css/${urlPath}`));
  } else if (format === 'js') {
    res.sendFile(path.join(__dirname, `../src/scripts/${urlPath}`));
  } else {
    res.end('Bad request :(');
  }
})

module.exports = router;