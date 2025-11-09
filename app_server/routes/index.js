var express = require('express');
var router = express.Router();
const contrlMain = require('../controllers/main.js');

/* Get Home*/
router.get('/', contrlMain.index);

module.exports = router;
