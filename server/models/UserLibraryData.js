module.exports = (sequelize, DataTypes) => {
    const UserLibraryData = sequelize.define('UserLibraryData', {
      home: DataTypes.STRING,
      borrow: {type: DataTypes.INTEGER, defaultValue: 0},
      overdue: DataTypes.INTEGER,
      lost: DataTypes.INTEGER,
      favAuth: DataTypes.STRING,
      genre: DataTypes.STRING
    });
  
    UserLibraryData.associate = function(models) {
      // associations can be defined here
      UserLibraryData.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    };

    UserLibraryData.addHook('beforeCreate', async (userLibraryData, options) => {
        const user = await sequelize.models.User.findByPk(userLibraryData.userId);
        // Set some value based on the user data
        userLibraryData.borrow = user.someField;
      });
  
    return UserLibraryData;
  };
  