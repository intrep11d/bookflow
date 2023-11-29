module.exports = (sequelize, DataTypes) => {
  const BookAuthors = sequelize.define('BookAuthors', {
    bookId: { type: DataTypes.INTEGER, allowNull: false },
    authorId: { type: DataTypes.INTEGER, allowNull: false }
  });

  // No need to define associations here as it's a junction table

  return BookAuthors;
};
