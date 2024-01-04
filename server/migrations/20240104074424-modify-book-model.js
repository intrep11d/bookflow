'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Books', 'publisherId');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Books', 'publisherId', {
      type: Sequelize.INTEGER,
      allowNull: true
    });
  }
};
