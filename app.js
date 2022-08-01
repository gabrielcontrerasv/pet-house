const config = require('./config/config');
const express = require('express');
const app = express();
const sequelize = require('./app/database/db');
const Role = require('./app//database/models/Role');
const User = require('./app//database/models/User');
const Employee = require('./app/database/models/Employee');
const Gender = require('./app/database/models/Gender');
const Pet = require('./app/database/models/Pet');
const Record = require('./app/database/models/Record');
const Catergorie = require('./app/database/models/Categorie');
const Service = require('./app/database/models/Service');
const Appointment = require('./app/database/models/Appointment');
const Specialitie = require('./app/database/models/Specialitie');
const Breed = require('./app/database/models/Breed')
const Animal = require('./app/database/models/Animal')
require("./app/routes/users")(app);
require("./app/routes/employees")(app);
require("./app/routes/animals")(app);


const port = process.env.port || 30019
app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.use(express.urlencoded({extended:false}))

app.listen(port, () => {
  sequelize.sync({force: true}).then(()=>{
    console.log('conectado sin novedad')
  })
  .catch((error) =>{
    console.log(`no se pudo conectar porque ${error}`)    
  })
})

