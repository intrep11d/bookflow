const User = require('./user');
const Book = require('./book');
const Author = require('./author');
const Publisher = require('./publisher');
const Genre = require('./genre');
const BorrowingRecord = require('./borrowingRecord');
const BookAuthors = require('./bookAuthors');

// Define relationships
Book.belongsTo(Genre, { foreignKey: 'GenreID' });
Book.belongsTo(Publisher, { foreignKey: 'PublisherID' });
Book.belongsToMany(Author, { through: BookAuthors, foreignKey: 'BookISBN' });
Author.belongsToMany(Book, { through: BookAuthors, foreignKey: 'AuthorID' });

BorrowingRecord.belongsTo(Book, { foreignKey: 'BookISBN' });
BorrowingRecord.belongsTo(User, { foreignKey: 'UserID' });

User.hasMany(BorrowingRecord, { foreignKey: 'UserID' });

// Sync all models with database
sequelize.sync();

module.exports = {
  User,
  Book,
  Author,
  Publisher,
  Genre,
  BorrowingRecord,
  BookAuthors
};
