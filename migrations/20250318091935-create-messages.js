'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Messages', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      sender: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      body: {
        type: Sequelize.STRING,
        allowNull: false
      },
      conversation: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Conversations', key: 'id' }
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Messages');
  }
};
