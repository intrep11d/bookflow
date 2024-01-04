'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      publicationDate: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      isbn: {
        type: Sequelize.STRING(13),
        allowNull: false,
        unique: true
      },
      edition: {
        type: Sequelize.STRING,
        allowNull: true
      },
      format: {
        type: Sequelize.ENUM('hardcover', 'paperback', 'ebook', 'audiobook'),
        allowNull: false
      },
      totalCopies: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      availableCopies: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      bookImage: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          isUrl: true
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Books');
  }
};

