const { User } = require('../models'); // import the User model

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: DataTypes.STRING, unique: true, allowNull: false },
    passwordHash: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    role: { type: DataTypes.ENUM('Patron', 'Staff', 'Admin'), allowNull: false }
  });

  User.associate = function(models) {
    User.hasOne(models.UserProfile, { foreignKey: 'userId', as: 'profile' });
    User.hasMany(models.BorrowingRecord, { foreignKey: 'userId', as: 'borrowings' });
  };

  return User;
};
