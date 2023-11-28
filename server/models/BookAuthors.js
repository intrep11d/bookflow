module.exports = (sequelize, DataTypes) => {
    const BookAuthors = sequelize.define('BookAuthors', {
      // This assumes you have a composite primary key made up of BookISBN and AuthorID
      BookISBN: {
        type: DataTypes.STRING,
        references: {
          model: 'Books',
          key: 'ISBN'
        }
      },
      AuthorID: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Authors',
          key: 'AuthorID'
        }
      }
    }, {
      // Additional settings for the join table
      timestamps: false,
      sequelize,
      modelName: 'BookAuthors'
    });
  
    return BookAuthors;
  };
  