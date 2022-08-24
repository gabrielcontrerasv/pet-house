const {  DataTypes } = require('sequelize');
const sequelize = require('../db');
const Pet = require('./Pet');

const Record = sequelize.define('Record' ,{
  id:{
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement: true
  },
  record:{
    type: DataTypes.STRING,
    allowNull: false
  },
  diagnosis:{
    type: DataTypes.STRING,
    allowNull: false
  },
  treatment:{
    type: DataTypes.STRING,
    allowNull: false
  },
  date:{
    type: DataTypes.DATE,
    allowNull: false
  },
  PetId:{
    type: DataTypes.INTEGER,
    allowNull:false
  }
},
{timestamps:false});


Pet.hasMany(Record);
Record.belongsTo(Pet);
module.exports = Record;