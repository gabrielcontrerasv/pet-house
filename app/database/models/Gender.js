const {  DataTypes } = require('sequelize');
const sequelize = require('../db')

const Gender = sequelize.define('Gender',{
  id:{
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoincrement: true
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false
  }

}
,
{timestamps:false}
);

module.exports = Gender;