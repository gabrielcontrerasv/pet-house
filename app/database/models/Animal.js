const {  DataTypes } = require('sequelize');
const sequelize = require('../db')

const Animal = sequelize.define('Animal' ,{
  id:{
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoincrement: true,
  },
  specie :{
    type: DataTypes.STRING
  }
},
{timestamps:false}
);

module.exports = Animal;