module.exports = (sequelize, DataTypes) => {
    const UserProfile = sequelize.define('UserProfile', {
      userId: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      address: DataTypes.STRING,
      phoneNumber: DataTypes.STRING
    });
  
    UserProfile.associate = function(models) {
      UserProfile.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    };
  
    return UserProfile;
  };
 