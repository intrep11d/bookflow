const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { login } = require('../controllers/authController');
const verifyToken = require('../middleware/verifyToken');
const authorize = require('../middleware/authorize');

router.post('/signup', userController.signup);
router.get('/verify-email/:token', userController.verifyEmail);
router.post('/login', login);
router.get('/essential', userController.patronAccountDisplay);
router.put('/update/:id', userController.updateUser);
router.get('/user/:id', userController.getUserById);

module.exports = router;
