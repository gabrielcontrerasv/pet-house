const Service = require('../models/Service');

exports.show = async (req, res) => {
  const services = await Service.findAll()
  res.json(services)
};
