const express = require('express');
const authorController = require('../controllers/authorController');
const router = express.Router();

// Route to add an author
router.post('/authors', authorController.addAuthor);

// Additional routes for other operations can be added here

module.exports = router;
