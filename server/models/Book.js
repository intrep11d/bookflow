// module.exports = (sequelize, DataTypes) => {
//   const Book = sequelize.define('Book', {
//     id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//     title: { type: DataTypes.STRING, allowNull: false },
//     isbn: { type: DataTypes.STRING, allowNull: false },
//     publicationYear: DataTypes.INTEGER,
//     genreId: DataTypes.INTEGER,
//     authorId: DataTypes.INTEGER,
//     totalCopies: DataTypes.INTEGER,
//     availableCopies: DataTypes.INTEGER,
//     bookImage: {
//       type: DataTypes.STRING,
//       allowNull: true,
//       }
//   });

//   Book.associate = function(models) {
//     Book.belongsToMany(models.Author, { through: 'BookAuthors', foreignKey: 'bookId', as: 'authors' });
//     Book.belongsTo(models.Genre, { foreignKey: 'genreId', as: 'genre' });
//     Book.hasMany(models.BorrowingRecord, { foreignKey: 'bookId', as: 'borrowings' });
//   };

//   return Book;
// };

module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    // Assuming you have these fields based on your earlier description
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    publicationDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    isbn: {
      type: DataTypes.STRING(13),
      allowNull: false,
      unique: true
    },
    edition: {
      type: DataTypes.STRING,
      allowNull: true
    },
    format: {
      type: DataTypes.ENUM('hardcover', 'paperback', 'ebook', 'audiobook'),
      allowNull: false
    },
    totalCopies: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    availableCopies: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    bookImage: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: true
      }
    },
    synopsis: {
      type: DataTypes.TEXT, // TEXT for long strings
      allowNull: true
    },
    // Add any other attributes you need
  }, {
    tableName: 'Books',
    timestamps: true,
  });

  Book.associate = function(models) {
    // Associations can be defined here
    Book.belongsToMany(models.Author, { through: 'BookAuthors', foreignKey: 'bookId', as: 'authors' });
    Book.belongsToMany(models.Genre, { through: 'BookGenres', foreignKey: 'bookId', as: 'genres' });
    Book.hasMany(models.BorrowingRecord, { foreignKey: 'bookId', as: 'borrowings' });
    // Any other associations
  };

  return Book;
};

