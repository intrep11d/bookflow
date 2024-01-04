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
      isbn: {
        type: Sequelize.STRING,
        allowNull: false
      },
      publicationYear: {
        type: Sequelize.INTEGER
      },
      genreId: {
        type: Sequelize.INTEGER
      },
      authorId: {
        type: Sequelize.INTEGER
      },
      totalCopies: {
        type: Sequelize.INTEGER
      },
      availableCopies: {
        type: Sequelize.INTEGER
      },
      bookImage: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Books');
  }
};
