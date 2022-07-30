const {  DataTypes } = require('sequelize');
const sequelize = require('../db')

const Record = sequelize.define('Record' ,{
  id:{
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoincrement: true
  },
});

module.exports = Record;