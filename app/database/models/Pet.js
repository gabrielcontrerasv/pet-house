const {  DataTypes } = require('sequelize');
const sequelize = require('../db');
const Animal = require('./Animal');
const Breed = require('./Breed');
const Gender = require('./Gender');
const User = require('./User');

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
},
{timestamps:false}
);
Pet.belongsTo(User)
Pet.belongsTo(Gender)
Pet.belongsTo(Breed)
Pet.belongsTo(Animal)
module.exports = Pet;