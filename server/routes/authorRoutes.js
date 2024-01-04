const express = require('express');
const authorController = require('../controllers/authorController');
const router = express.Router();   

// Route to add an author
router.post('/add-author', authorController.addAuthor);
router.get('/get-all-authors', authorController.getAllAuthors);

// Additional routes for other operations can be added here

module.exports = router;
