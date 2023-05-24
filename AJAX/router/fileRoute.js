const { Router } = require('express');
const upload = require('../middleware/fileMiddleware');

const route = Router();

route.post('/file', upload.single('file'), (req, res) => {

  if (req.file) {
    res.json({message: 'Everything is fine'})
  } else {
    res.json({message: 'It is not txt'})
  }
});

module.exports = route;