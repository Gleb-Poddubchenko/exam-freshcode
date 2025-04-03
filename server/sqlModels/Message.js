module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define('Messages', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
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
      tableName: 'Messages',
    });
  
    return Message;
  };