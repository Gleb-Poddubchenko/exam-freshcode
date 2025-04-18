'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Users', 'role', {
      type: Sequelize.ENUM('customer', 'creator', 'moderator'),
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Users', 'role', {
      type: Sequelize.ENUM('customer', 'creator'),
      allowNull: false,
    });
  },
};