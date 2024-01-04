

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: DataTypes.STRING, unique: true, allowNull: false },
    passwordHash: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    role: { type: DataTypes.ENUM('Patron', 'Staff', 'Admin'), allowNull: false },
    status: { type: DataTypes.ENUM, values: ['Verified', 'Unverified', 'Blocked'],
      defaultValue: 'Unverified',
      allowNull: false
    },
    emailVerificationToken: { type: DataTypes.STRING, },
    isEmailVerified: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
  });

  User.associate = function(models) {
    User.hasOne(models.UserProfile, { foreignKey: 'userId', as: 'profile' });
    User.hasMany(models.BorrowingRecord, { foreignKey: 'userId', as: 'borrowings' });
  };

  return User;
};
