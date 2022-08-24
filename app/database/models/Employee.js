const {  DataTypes } = require('sequelize');
const sequelize = require('../db');
const Specialitie = require('./Specialitie');

const Employee = sequelize.define('Employee',{
  id:{
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement: true
  },
  name:{
    type:DataTypes.STRING,
  },
  document:{
    type:DataTypes.INTEGER
  }
},
{timestamps:false}
);

Employee.belongsTo(Specialitie)
module.exports = Employee;