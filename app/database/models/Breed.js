const {  DataTypes } = require('sequelize');
const sequelize = require('../db')

const Breed = sequelize.define('Breed' ,{
  id:{
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoincrement: true,
    unique:true
  },
  race :{
    type: DataTypes.STRING,
    unique: true
  }
},
{timestamps:false}
);

module.exports = Breed;