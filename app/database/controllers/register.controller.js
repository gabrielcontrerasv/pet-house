const bcrypt= require('bcrypt');
const User = require('../models/User');


exports.register =  async (req, res) => {
 const { name,lastname,document,phone,adress,email,password,genderId,birthday,passwordconfirm} = req.body
   if (!req.body.email || !req.body.password) {
      res.status(400).send({
          status: false,
          message: 'requieren los datos completos'
      });
  } else {
          const hash = await bcrypt.hash(password, 10);
          const usuario = await User.create({
          name, 
          lastname,
          document,
          phone,
          adress,
          email,
          password:hash,
          passwordconfirm:hash,
          genderId
      })
      res.json(`usuario registrado correctamente`)
  }
}

