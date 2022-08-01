const {  DataTypes } = require('sequelize');
const sequelize = require('../db');


const Role = sequelize.define('Role',{
  id:{
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoincrement: true
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false
  }

}
,
{timestamps:false}
);

module.exports = Role;