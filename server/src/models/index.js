const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

console.log('>> server/models/index.js подключён');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';


const config = require(path.join(__dirname, '..', 'config', 'postgresConfig.json'))[env];
console.log('CONFIG LOADED:', config);

const db = {};


const sequelize = new Sequelize(config.database, config.username, config.password, config);


fs
  .readdirSync(__dirname)
  .filter(file =>
    file.indexOf('.') !== 0 &&
    file !== basename &&
    file.slice(-3) === '.js'
  )
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });


const Conversation = require('../../sqlModels/Conversation')(sequelize, Sequelize.DataTypes);
const Message = require('../../sqlModels/Message')(sequelize, Sequelize.DataTypes);

db.Conversation = Conversation;
db.Message = Message;


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;