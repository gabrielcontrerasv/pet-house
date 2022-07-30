const {  DataTypes } = require('sequelize');
const sequelize = require('../db')

const Employee_service = sequelize.define('Employee_service',{
  id:{
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoincrement: true
  },
});

module.exports = Employee_service;