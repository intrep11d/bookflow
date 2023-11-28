module.exports = (sequelize, DataTypes) => {
    const BorrowingRecord = sequelize.define('BorrowingRecord', {
      RecordID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      BookISBN: {
        type: DataTypes.STRING,
        references: {
          model: 'Books',
          key: 'ISBN'
        }
      },
      UserID: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'UserID'
        }
      },
      BorrowDate: DataTypes.DATEONLY,
      DueDate: DataTypes.DATEONLY,
      ReturnDate: DataTypes.DATEONLY
    });
  
    return BorrowingRecord;
  };
  