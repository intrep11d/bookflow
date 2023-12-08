module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    isbn: { type: DataTypes.STRING, allowNull: false },
    publicationYear: DataTypes.INTEGER,
    genreId: DataTypes.INTEGER,
    publisherId: DataTypes.INTEGER,
    totalCopies: DataTypes.INTEGER,
    availableCopies: DataTypes.INTEGER
  });

  Book.associate = function(models) {
    Book.belongsToMany(models.Author, { through: 'BookAuthors', foreignKey: 'bookId', as: 'authors' });
    Book.belongsTo(models.Genre, { foreignKey: 'genreId', as: 'genre' });
    Book.hasMany(models.BorrowingRecord, { foreignKey: 'bookId', as: 'borrowings' });
  };

  return Book;
};
