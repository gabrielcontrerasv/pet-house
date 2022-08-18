const {  DataTypes } = require('sequelize');
const sequelize = require('../db');
const Gender = require('./Gender');
const Role = require('./Role')

const User = sequelize.define('User',{
  id:{
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  document: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  phone: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  adress: {
    type: DataTypes.STRING,
    allowNull: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password:{
    type: DataTypes.STRING,
    allowNull: false
  },
  birthday:{
    type: DataTypes.DATE,
    allowNull:false
  },
  passwordconfirm:{
    type: DataTypes.STRING,
    allowNull: false
  },
  RoleId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 3
  }
},
{timestamps:false}
);
User.belongsTo(Role)
User.belongsTo(Gender)
module.exports = User;
