const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staffController');

// Fetch all staff accounts
router.get('/get-staff', staffController.staffAccountDisplay);

// Add a new staff account
router.post('/create-staff', staffController.addStaff);

module.exports = router;
