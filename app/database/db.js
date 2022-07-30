const { Sequelize } = require('sequelize')
const {database} = require('../../config')

const sequelize = new Sequelize(
  database.database,
  database.username, 
  database.password, {
    host: database.host,
    port: '3307',
    dialect: 'mysql'
  }
);


module.exports = sequelize;