module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
  });

  Author.associate = function(models) {
    Author.belongsToMany(models.Book, { through: 'BookAuthors', foreignKey: 'authorId', as: 'books' });
  };

  return Author;
};
