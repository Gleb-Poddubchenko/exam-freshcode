module.exports = (sequelize, DataTypes) => {
  const Contest = sequelize.define('Contest', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    orderId: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    contestType: {
      allowNull: false,
      type: DataTypes.ENUM('name', 'tagline', 'logo'),
    },
    fileName: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    originalFileName: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    title: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    typeOfName: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    industry: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    focusOfWork: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    targetCustomer: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    styleName: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    nameVenture: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    typeOfTagline: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    brandStyle: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    createdAt: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prize: {
      allowNull: false,
      type: DataTypes.DECIMAL,
    },
    priority: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: false,
  });

  Contest.associate = function (models) {
    Contest.hasMany(models.Offer, {
      foreignKey: 'contestId',
      sourceKey: 'id',
    });
  };

  return Contest;
};