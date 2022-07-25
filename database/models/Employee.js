const {  DataTypes } = require('sequelize');
const sequelize = require('../db')

const Employee = sequelize.define('Employee',{
  id:{
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoincrement: true
  },
  name:{
    type:DataTypes.STRING,
  },
  document:{
    type:DataTypes.INTEGER
  }
});

module.exports = Employee;