const sequelize = require('../db')

const Role = require('./models/Role');
const User = require('./models/User');
const Employee = require('./models/Employee');
const Gender = require('./models/Gender');
const Pet = require('./models/Pet');
const Record = require('./models/Record');
const Catergorie = require('./models/Categorie');
const Service = require('./models/Service');
const Appointment = require('./models/Appointment');
const Specialitie = require('./models/Specialitie');


User.belongsTo(Role)
