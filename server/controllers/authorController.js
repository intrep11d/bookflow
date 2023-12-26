const { Author } = require('../models/');

const authorController = {
  // Add an author
  addAuthor: async (req, res) => {
    try {
      // Destructure firstName and lastName from the request body
      const { firstName, lastName } = req.body;

      // Create a new author with firstName and lastName
      const newAuthor = await Author.create({ 
        firstName, 
        lastName 
      });

      // Respond with the newly created author
      res.status(201).json(newAuthor);
    } catch (error) {
      // Send an error response if something goes wrong
      res.status(500).json({ message: 'Error adding author', error });
    }
  },

  // Additional controller methods for other operations like getting, updating, deleting authors can be added here
};

module.exports = authorController;

