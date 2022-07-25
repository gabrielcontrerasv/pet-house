
const express = require('express');
const app = express();
const sequelize = require('./database/db');
const User = require('./database/models/User');
const Employees = require('./database/models/Employee');
const Genres = require('./database/models/Genre');
const Pets = require('./database/models/Pet');
const Records = require('./database/models/Record');
const Service_catergories = require('./database/models/Service_categorie');
const Services = require('./database/models/Service');
const Appointments = require('./database/models/Appointment');
const Specialitie = require('./database/models/Specialitie');
const EmployeesServices = require('./database/models/Employee_service');



const port = process.env.port || 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  sequelize.sync({force:true}).then(()=>{
    console.log('conectado sin novedad')
  })
  .catch((error) =>{
    console.log(`no se pudo conectar porque ${error}`)    
  })
})

