const {Router} = require('express');
const router = Router();

router.get('/hero',(req, res) => {
  res.status(200).json({message: 'hero'})
});

module.exports = router;