module.exports = (sequelize, DataTypes) => {
    const Genre = sequelize.define('Genre', {
      GenreID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Name: DataTypes.STRING
    });
  
    return Genre;
  };
  