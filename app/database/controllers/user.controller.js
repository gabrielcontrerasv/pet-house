const bcrypt= require('bcrypt');
const User = require('../models/User');

exports.show = async (req, res) => {
  const usuarios = await User.findAll()
  res.json(usuarios)
};


exports.register =  async (req, res) => {
 const { name,lastName,document,phone,address,email,password,birthday,GenderId} = req.body
   if (!email || password || document || address || email || birthday || GenderId || phone || lastName) {
      res.status(400).send({
          status: false,
          message: 'requieren los datos completos'
      });
  } else {
          const hash = await bcrypt.hash(password, 10);
          const usuario = await User.create({
          name, 
          lastName,
          document,
          phone,
          address,
          email,
          birthday,
          password:hash,
          passwordconfirm:password,
          GenderId
      })
      res.json(`usuario ${hash} registrado correctamente`)
  }
}

exports.showById = async (req,res)=>{
  const {id} = req.body
  const usuario = await User.findByPk(id)
  res.json(usuario)
}

exports.showByEmail = async (req,res)=>{
  const {email} = req.body
  const usuario = await User.findOne({
    where : {email}
  })
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

exports.updateUserRoleById = async (req,res)=>{
  const {id,roleId} = req.body;
  const User = await User.update(
    {
      roleId,
    },
    {
      where: {id},
    }
  );
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