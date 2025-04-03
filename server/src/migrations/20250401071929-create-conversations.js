'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Conversations', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      participant1: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      participant2: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      blackList1: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      blackList2: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      favoriteList1: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      favoriteList2: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Conversations');
  },
};
