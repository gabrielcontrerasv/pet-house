const {  DataTypes } = require('sequelize');
const sequelize = require('../db');
const Pet = require('./Pet');
const Service = require('./Service');

const Appointment = sequelize.define('Appointment', {
  id:{
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement: true
  },
  date:{
    type:DataTypes.DATE,
    allowNull: false   
  },
  description:{
    type:DataTypes.STRING,
    allowNull: false
  },
  PetId:{
    type:DataTypes.INTEGER,
    allowNull: false
  }
},
{timestamps:false});

Appointment.belongsTo(Pet)
Appointment.belongsTo(Service)

module.exports = Appointment;