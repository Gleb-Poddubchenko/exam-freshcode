module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define('Message', {
      sender: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      conversation_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    }, {
      timestamps: true,
    });
  
    Message.associate = (models) => {
      Message.belongsTo(models.Conversation, {
        foreignKey: 'conversation_id',
      });
  
      Message.belongsTo(models.User, {
        foreignKey: 'sender',
      });
    };
  
    return Message;
  };