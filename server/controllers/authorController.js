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

  // Get all authors
  getAllAuthors: async (req, res) => {
    try {
      // Retrieve all authors from the database
      const authors = await Author.findAll({
        attributes: ['id', 'firstName', 'lastName'] // Specify the fields you want to return
      });
  
      // Map over the authors to combine firstName and lastName into a single name field
      const authorsWithName = authors.map(author => ({
        id: author.id,
        name: `${author.firstName} ${author.lastName}`
      }));
  
      // Respond with the list of authors
      res.status(200).json(authorsWithName);
    } catch (error) {
      // Send an error response if something goes wrong
      res.status(500).json({ message: 'Error getting authors', error });
    }
  }
}

module.exports = authorController;

