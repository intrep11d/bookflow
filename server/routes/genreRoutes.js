const express = require('express');
const router = express.Router();
const genreController = require('../controllers/genreController');

router.post('/add-genre', genreController.addGenre);
router.get('/get-all-genres', genreController.getAllGenres);

module.exports = router;