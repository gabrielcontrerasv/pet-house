const Animal = require('../models/Animal');
exports.show = async (req, res) => {
  const pets = await Animal.findAll()
  res.json(pets)
};

exports.registro =  async (req, res) => {
  const pet = await Animal.create()
}

exports.showById = async (req,res)=>{
  const {id} = req.params;
  const pet = await Animal.findByPk(id)
  res.json(pet)
}

