const Animal = require('../models/Animal');
exports.show = async (req, res) => {
  const animales = await Animal.findAll()
  res.json(animales)
};