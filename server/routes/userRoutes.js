const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/signup', userController.signup);
router.get('/verify-email/:token', userController.verifyEmail);

module.exports = router;
