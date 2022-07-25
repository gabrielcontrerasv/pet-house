const {  DataTypes } = require('sequelize');
const sequelize = require('../db')

const Genre = sequelize.define('Genre',{
  id:{
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoincrement: true
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false
  }

});

module.exports = Genre;