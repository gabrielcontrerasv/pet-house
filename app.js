
const express = require('express');
const app = express();
const sequelize = require('./database/db');


const port = process.env.port || 3008
// Begin routes

app.get('/', (req, res) => {
  res.send('Hello World!')
})


// start listening
app.listen(port, () => {
  console.log(` aplicacion iniciando desde el puerto ${port}`)
  sequelize.authenticate().then(()=>{
    console.log('conectado sin novedad')
  })
  .catch((error) =>{
    console.log(`no se pudo conectar porque ${error}`)
    
  })
})

