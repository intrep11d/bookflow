module.exports = (sequelize, DataTypes) => {
  const BorrowingRecord = sequelize.define('BorrowingRecord', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    bookId: { type: DataTypes.INTEGER, allowNull: false },
    borrowDate: DataTypes.DATE,
    returnDate: DataTypes.DATE,
    status: { type: DataTypes.ENUM('Borrowed', 'Returned'), allowNull: false }
  });

  BorrowingRecord.associate = function(models) {
    BorrowingRecord.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    BorrowingRecord.belongsTo(models.Book, { foreignKey: 'bookId', as: 'book' });
  };

  return BorrowingRecord;
};
