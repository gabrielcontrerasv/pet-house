const express = require('express');
const app = express();
const sequelize = require('./app/database/db');
require("./app/routes/users")(app);

const port = process.env.port || 3002
app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  sequelize.sync({force:false}).then(()=>{
    console.log('conectado sin novedad')
  })
  .catch((error) =>{
    console.log(`no se pudo conectar porque ${error}`)    
  })
})

