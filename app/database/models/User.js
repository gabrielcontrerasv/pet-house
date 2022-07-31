const {  DataTypes } = require('sequelize');
const sequelize = require('../db')

const User = sequelize.define('User',{
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
  documento: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  phone: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  adress: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password:{
    type: DataTypes.STRING,
    allowNull: false
  }
},
{timestamps:false}
);

module.exports = User;