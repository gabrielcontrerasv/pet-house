const User = require('../models/User');

exports.show = async (req, res) => {
  const usuarios = await User.findAll()
  res.json(usuarios)
};


exports.register =  async (req, res) => {
 const { name,lastname,document,phone,adress,email,password} = req.body
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
      res.json(`usuario ${name} registrado correctamente`)
  }
}

exports.showById = async (req,res)=>{
  const {id} = req.body;
  const usuario = await User.findByPk(id)
  res.json(usuario)
}

exports.login = async (req,res)=>{
  const {email,password} = req.body;
  const user = await User.find({
    where: {
      email,
      password

    }
  })
  .then(
    function(user) {
       res.send(`bienvenido ${user}`);
    }, function(errors) {
      res.send(errors);
  }
)
}

exports.updateById = async (req,res)=>{
  const {id} = req.body;
  const User = await User.findByPk(id)
  res.json(User)
}

exports.deleteById = async (req,res)=>{
  const {id} = req.body;
  const User = await User.destroy({
    where: {
      id: id
    },
    force: true
  });
  res.send(`Usuario eliminado`)
}