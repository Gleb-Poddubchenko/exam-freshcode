module.exports = (sequelize, DataTypes) => {
  const Conversation = sequelize.define('Conversation', {
    participant1: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    participant2: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    blackList1: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    blackList2: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    favoriteList1: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    favoriteList2: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  }, {
    timestamps: true,
  });

  return Conversation;
};