const {  DataTypes } = require('sequelize');
const sequelize = require('../db');
const Employee = require('./Employee');

const Service = sequelize.define('Service' ,{
  id:{
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoincrement: true
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

Service.belongsTo(Employee)
module.exports = Service;