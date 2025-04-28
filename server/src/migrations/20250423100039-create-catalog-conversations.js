'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CatalogConversations', {
      catalogId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Catalogs',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      conversationId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Conversations',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CatalogConversations');
  }
};