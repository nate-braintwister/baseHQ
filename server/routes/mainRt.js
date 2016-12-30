const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/mainCtrl');


// GET home page
router.get('/', ctrl.home);



module.exports = router;