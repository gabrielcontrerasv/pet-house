const Pet = require('../models/Pet');

exports.show = async (req, res) => {
  const Pets = await Pet.findAll()
  res.json(Pets)
};

exports.register =  async (req, res) => {
  const {name,code_number,birthday,isIntern,weight,status,photo,AnimalId,UserId,GenderId,BreedId} = req.body;
  res.send(username)
  const Pet = await Pet.create(
    {
      name,
      code_number,
      birthday,
      isIntern,
      weight,
      status,
      photo,
      AnimalId,
      UserId,
      GenderId,
      BreedId
    }
  )
  res.send(`Mascota ${name} registrada`)
}

exports.showById = async (req,res)=>{
  const {id} = req.body;
  const Pets = await Pet.findByPk(id)
  res.json(Pets)
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
