const config = require('./config/config');
var express = require('express')
const cors = require('cors');
var bodyParser = require('body-parser')
var router = express.Router();
const sequelize = require('./app/database/db');
var app = express()

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

const RouterApi = require('./app/routes');



app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

RouterApi(app)
const port = process.env.port || 3005
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  sequelize.sync({force: true}).then(()=>{
    console.log('conectado sin novedad')
  })
  .catch((error) =>{
    console.log(`no se pudo conectar porque ${error}`)    
  })
})

//app.use(cors());