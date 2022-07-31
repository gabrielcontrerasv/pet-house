const {  DataTypes } = require('sequelize');
const sequelize = require('../db')

const Categorie = sequelize.define('Categorie' ,{
  id:{
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoincrement: true
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  }
},
{timestamps:false});

module.exports = Categorie;