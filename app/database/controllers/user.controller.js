const User = require('../models/User');
exports.show = async (req, res) => {
  const usuarios = await User.findAll()
  res.json(usuarios)
};