const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageController');

// Define routes
router.get('/', pageController.home);
router.get('/about', pageController.about);
router.get('/contact', pageController.contact);

module.exports = router;
