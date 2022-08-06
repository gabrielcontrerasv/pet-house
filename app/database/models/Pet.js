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
  code_number: {
    type: DataTypes.STRING
  },
  birthday:{
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
  status:{
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
module.exports = Pet;