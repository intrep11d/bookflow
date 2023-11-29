module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define('Genre', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING
  });

  Genre.associate = function(models) {
    Genre.hasMany(models.Book, { foreignKey: 'genreId', as: 'books' });
  };

  return Genre;
};
