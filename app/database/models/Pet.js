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
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  microchip: {
    type: DataTypes.STRING
  },
  birthday:{
    type:DataTypes.DATE,
    allowNull: false
  },
  status:{
    type:DataTypes.BOOLEAN,
    allowNull: false
  },
  weight:{
    type:DataTypes.INTEGER,
    allowNull: false
  },
  status:{
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  photo:{
    type:DataTypes.STRING
  },
  AnimalId:{
    type:DataTypes.INTEGER,
    allowNull: true
  },
  UserId:{
    type:DataTypes.INTEGER,
    allowNull: true
  }
},
{timestamps:false}
);

User.hasMany(Pet);
Pet.belongsTo(User)
Pet.belongsTo(Gender)
Pet.belongsTo(Breed)
Pet.belongsTo(Animal)
module.exports = Pet;