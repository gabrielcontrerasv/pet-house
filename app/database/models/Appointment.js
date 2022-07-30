const {  DataTypes } = require('sequelize');
const sequelize = require('../db')

const Appointment = sequelize.define('Appointment', {
  id:{
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoincrement: true
  },
  date:{
    type:DataTypes.DATE,
    allowNull: false   
  },
  description:{
    type:DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Appointment;