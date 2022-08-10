const config = require('./config/config');
var express = require('express')
const cors = require('cors');
var bodyParser = require('body-parser')
var router = express.Router();
const sequelize = require('./app/database/db');
var app = express()



const RouterApi = require('./app/routes');

require('./utils/auth')

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

