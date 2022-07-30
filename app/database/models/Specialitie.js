const {  DataTypes } = require('sequelize');
const sequelize = require('../db')

const Specialitie = sequelize.define('Specialitie',{
  id:{
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoincrement: true
  },
  specialitie: {
    type: DataTypes.STRING,
    allowNull: false
  }

},
{timestamps:false}
);

module.exports = Specialitie;