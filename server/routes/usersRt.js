const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/usersCtrl');

// GET users index page
router.get('/', ctrl.index);

// GET user profile page
router.get('/your-profile', ctrl.profile);


module.exports = router;
