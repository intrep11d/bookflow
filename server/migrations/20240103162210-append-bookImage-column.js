'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Books', 'bookImage', {
      type: Sequelize.STRING(2048), // Example length, adjust as needed
      allowNull: true,
      validate: {
        isUrl: true
      }
    });
  },
    

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Books', 'bookImage', {
      type: Sequelize.STRING,
      allowNull: true
    });
  }

};