const User = require('../models/User');

exports.show = async (req, res) => {
  const usuarios = await User.findAll()
  res.json(usuarios)
};


exports.registro =  async (req, res) => {
 const { name,lastname,document,phone,adress,email,password} = req.params
   if (!req.body.email || !req.body.password) {
      res.status(400).send({
          status: false,
          message: 'requieren los datos completos'
      });
  } else {
          const usuario = await User.create({
          name, 
          lastname,
          document,
          phone,
          adress,
          email,
          password,
      })
      res.json(req.params)
  }
}

exports.showById = async (req,res)=>{
  const {id} = req.params;
  const usuario = await User.findByPk(id)
  res.json(usuario)
}
