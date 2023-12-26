const { Genre } = require('../models/');

const genreController = {
    addGenre: async (req, res) => {
        try {
          const { name } = req.body; // Assuming the genre's name is sent in the request body
    
          // Check if the genre already exists
          const existingGenre = await Genre.findOne({ where: { name } });
          if (existingGenre) {
            return res.status(409).json({ message: 'Genre already exists' });
          }
    
          // Create a new genre
          const newGenre = await Genre.create({ name });
          res.status(201).json(newGenre);
        } catch (error) {
          res.status(500).json({ message: 'Error adding genre', error });
        }
      },
    
};

module.exports = genreController;