const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { login } = require('../controllers/authController');

router.post('/signup', userController.signup);
router.get('/verify-email/:token', userController.verifyEmail);
router.post('/login', login);

module.exports = router;
