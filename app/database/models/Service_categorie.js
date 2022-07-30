const {  DataTypes } = require('sequelize');
const sequelize = require('../db')

const Service_Categorie = sequelize.define('Service_Categorie' ,{
  id:{
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoincrement: true
  },
  categorie: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Service_Categorie;