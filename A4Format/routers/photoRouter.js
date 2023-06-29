const upload = require('../storage/multerStorage');
const {Router} = require('express');
const router = Router();

const photoController = require('../controllers/photoController');

router.post('/photo', upload.single('photo'), photoController.addPhoto);
router.get('/photos', photoController.getAll);

module.exports = router;