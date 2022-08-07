const Role = require('../models/Role');

exports.show = async (req, res) => {
  const role = await Role.findAll()
  res.json(role)
};
