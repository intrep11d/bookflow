module.exports = (sequelize, DataTypes) => {
    const Author = sequelize.define('Author', {
      AuthorID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      FirstName: DataTypes.STRING,
      LastName: DataTypes.STRING,
      DateOfBirth: DataTypes.DATEONLY,
      Nationality: DataTypes.STRING
    });
  
    return Author;
  };
  