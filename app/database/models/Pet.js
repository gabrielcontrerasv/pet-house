const {  DataTypes } = require('sequelize');
const sequelize = require('../db')

const Pet = sequelize.define('Pet' ,{
  id:{
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoincrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  code_number: {
    type: DataTypes.STRING
  },
  birdthay:{
    type:DataTypes.DATE,
    allowNull: false
  },
  isIntern:{
    type:DataTypes.BOOLEAN,
    allowNull: false
  },
  weight:{
    type:DataTypes.INTEGER,
    allowNull: false
  },
  isNeutered:{
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  photo:{
    type:DataTypes.STRING
  }

});

module.exports = Pet;