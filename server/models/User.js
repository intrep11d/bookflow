module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      UserID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      FirstName: DataTypes.STRING,
      LastName: DataTypes.STRING,
      DateOfBirth: DataTypes.DATEONLY,
      Address: DataTypes.STRING,
      PhoneNumber: DataTypes.STRING,
      Email: DataTypes.STRING,
      PasswordHash: DataTypes.STRING,
      Role: DataTypes.ENUM('Patron', 'Staff', 'Admin') // New field to distinguish user roles
    });
  
    return User;
  };
  