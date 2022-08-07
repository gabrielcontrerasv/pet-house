const Specialitie = require('../models/Specialitie');

exports.show = async (req, res) => {
  const specialitie = await Specialitie.findAll()
  res.json(specialitie)
};
