module.exports = (sequelize, DataTypes) => {
    const Publisher = sequelize.define('Publisher', {
      PublisherID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Name: DataTypes.STRING,
      Address: DataTypes.STRING,
      PhoneNumber: DataTypes.STRING,
      Email: DataTypes.STRING
    });
  
    return Publisher;
  };
  