const express = require('express');
const router = express.Router();

const sauceCtrl = require('../controllers/sauces');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.get('/', auth, sauceCtrl.allSauceGet);
router.get('/:id', auth, sauceCtrl.oneSauceGet);
router.post('/', auth, sauceCtrl.sauceCreate );
router.put('/:id', auth, sauceCtrl.sauceModify );
router.delete('/:id', auth, sauceCtrl.sauceDelete);
router.post('/:id/like', auth, sauceCtrl.sauceReact);


module.exports = router;