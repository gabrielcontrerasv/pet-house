const express = require('express');
const app = express();
const sequelize = require('./database/db');
require('./database/asociations');


app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use(require('./routes/Employees'));
const port = process.env.port || 3001



app.listen(port, () => {
  sequelize.sync({force:false}).then(()=>{
    console.log('conectado sin novedad')
  })
  .catch((error) =>{
    console.log(`no se pudo conectar porque ${error}`)    
  })
})

