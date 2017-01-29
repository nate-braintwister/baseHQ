const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/mainCtrl');


// GET home page
router.get('/', ctrl.home);

// GET locations page
router.get('/locations', ctrl.locations);

// GET browse rooms page
router.get('/browse-rooms', ctrl.browse);

// GET search rooms page
router.get('/search-for-a-room', ctrl.search);

// GET user login page
router.get('/login', ctrl.login);

// GET user registration page
router.get('/register', ctrl.register);

// GET privacy page
router.get('/privacy', ctrl.privacy);


module.exports = router;
