const Pet = require('../models/Pet');

exports.show = async (req, res) => {
  const Pets = await Pet.findAll()
  res.json(Pets)
};

exports.register =  async (req, res) => {
  const {username} = req.body;
  res.send(username)
  //const Pet = await Pet.create()
}

exports.showById = async (req,res)=>{
  const {id} = req.params;
  const Pet = await Pet.findByPk(id)
  res.json(Pet)
}
exports.updateById = async (req,res)=>{
  const {id} = req.params;
  const Pet = await Pet.findByPk(id)
  res.json(Pet)
}

exports.deleteById = async (req,res)=>{
  const {id} = req.params;
  const Pet = await Pet.destroy({
    where: {
      id: id
    },
    force: true
  });
  res.send(`mascota eliminada`)
}
