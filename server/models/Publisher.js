module.exports = (sequelize, DataTypes) => {
  const Publisher = sequelize.define('Publisher', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    email: DataTypes.STRING
  });

  Publisher.associate = function(models) {
    Publisher.hasMany(models.Book, { foreignKey: 'publisherId', as: 'books' });
  };

  return Publisher;
};
