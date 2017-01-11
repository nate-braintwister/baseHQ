const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/mainCtrl');


// GET home page
router.get('/', ctrl.home);

// GET locations page
router.get('/locations', ctrl.locations);

// GET user login page
router.get('/login', ctrl.login);

// GET privacy page
router.get('/privacy', ctrl.privacy);


module.exports = router;