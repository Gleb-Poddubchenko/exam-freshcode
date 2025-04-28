module.exports = (sequelize, DataTypes) => {
  const Catalog = sequelize.define('Catalog', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    catalogName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false,
  });

  Catalog.associate = (models) => {
    Catalog.belongsTo(models.User, {
      foreignKey: 'userId',
    });

    Catalog.belongsToMany(models.Conversation, {
      through: 'CatalogConversations',
      foreignKey: 'catalogId',
    });
  };

  return Catalog;
};