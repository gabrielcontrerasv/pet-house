const { Sequelize } = require('sequelize')
const {database} = require('../../config')

const sequelize = new Sequelize(
  database.database,
  database.username, 
  database.password, {
    host: database.host,
    port: '3306',
    dialect: 'mysql'
  }
);

db.Employee =   require('../database/models/Employee')(sequelize,DataTypes);

module.exports = sequelize;