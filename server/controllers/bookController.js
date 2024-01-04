const { Book } = require('../models'); // Import the book model
const multer = require('multer'); // For handling file uploads

// Set up multer for file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  }
});

const upload = multer({ storage: storage });

const bookController = {
  // Method for adding a new book
  addBook: async (req, res) => {
    try {
      // Extract book information from request body
      const { title, authors, genres, publicationDate, isbn, edition, format, totalCopies } = req.body;
      let bookImage = '';

      // Check if a file is uploaded
      if (req.file) {
        bookImage = req.file.path;
      }

      // Create a new book instance
      const newBook = await Book.create({
        title,
        authors, // Make sure to parse or transform as needed
        genres, // Make sure to parse or transform as needed
        publicationDate,
        isbn,
        edition,
        format,
        totalCopies,
        bookImage // File path of the uploaded image
      });

      // Save the new book to the database
      await newBook.save();

      // Send a success response
      res.status(201).json({ message: 'Book added successfully', book: newBook });
    } catch (error) {
      // Send an error response
      res.status(500).json({ message: 'Error adding book', error });
      console.log(error);
    }
  },

  // Other methods for book operations (e.g., getBooks, updateBook, deleteBook) can be added here
};

module.exports = {
  bookController,
  upload // Export the upload middleware for use in your routes
};
