const Gender = require('../models/Gender');

exports.show = async (req, res) => {
  const genders = await Gender.findAll()
  res.json(genders)
};
