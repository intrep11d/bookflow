const express = require('express');
const { bookController, upload } = require('../controllers/bookController');
const router = express.Router();



// Route to add a new book, using the multer middleware for file uploads
router.post('/add', upload.single('bookImage'), bookController.addBook);

// Other routes can be added here

module.exports = router;
