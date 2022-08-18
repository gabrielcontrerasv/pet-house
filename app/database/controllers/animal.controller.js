const Animal = require('../models/Animal');

exports.show = async (req, res) => {
  const Animals = await Animal.findAll()
  res.json(Animals)
};

exports.register =  async (req, res) => {
  const {specie} = req.body;
  const animal = await Animal.create({
    specie
})
  res.send(animal)
  
}

exports.showById = async (req,res)=>{
  const {id} = req.body;
  const Animals = await Animal.findByPk(id)
  res.json(Animals)
}
exports.updateById = async (req,res)=>{
  const {id} = req.params;
  const Animal = await Animal.findByPk(id)
  res.json(Animal)
}

exports.deleteById = async (req,res)=>{
  const {id} = req.params;
  const Animal = await Animal.destroy({
    where: {
      id
    },
    force: true
  });
  res.send(`animal eliminado`)
}
