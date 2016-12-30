const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/usersCtrl');

// GET users index page
router.get('/', ctrl.index);

module.exports = router;
