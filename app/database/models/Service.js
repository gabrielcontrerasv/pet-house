const {  DataTypes } = require('sequelize');
const sequelize = require('../db');
const Employee = require('./Employee');

const Service = sequelize.define('Service' ,{
  id:{
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement: true
  },
  service: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
},
   { timestamps : false}
);

module.exports = Service;