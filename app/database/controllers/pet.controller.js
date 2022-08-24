const Pet = require('../models/Pet');

exports.show = async (req, res) => {
  const Pets = await Pet.findAll()
  res.json(Pets)
};

exports.register =  async (req, res) => {
  const {name,microchip,birthday,weight,status,photo,AnimalId,UserId,GenderId,BreedId} = req.body;
  if (!req.body.name || !req.body.UserId) {
    res.status(400).send({
        status: false,
        message: 'requieren los datos completos'
    });
  }
  else {
    const regPet = await Pet.create(
      {
        name,
        microchip,
        birthday,
        status,
        weight,
        photo,
        AnimalId,
        UserId,
        GenderId,
        BreedId
      }
    )
    res.send(`Mascota ${regPet.name} ha sido registrada`)
  }
  
}

exports.showById = async (req,res)=>{
  const {id} = req.body;
  const Pets = await Pet.findByPk(id)
  res.json(Pets)
}

exports.showByUser = async (req,res)=>{
  const {id} = req.body;
  const Pets = await Pet.findAll({
    //include: User
    where: { UserId: id },
  });
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
