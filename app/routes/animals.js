const animalController = require('../database/controllers/animal.controller');
module.exports = app => {
  var router = require("express").Router();
  router.get("/", animalController.show);
  app.use('/animals', router);
};