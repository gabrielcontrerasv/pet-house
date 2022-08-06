const {  DataTypes } = require('sequelize');
const sequelize = require('../db')

const Animal = sequelize.define('Animal' ,{
  id:{
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoincrement: true,
    unique:true
  },
  specie :{
    type: DataTypes.STRING,
    unique: true
  }
},
{timestamps:false}
);

module.exports = Animal;