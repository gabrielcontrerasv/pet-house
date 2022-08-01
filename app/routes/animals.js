const animalController = require('../database/controllers/animal.controller');
module.exports = app => {
  const router = require("express").Router();
  router.get("/", animalController.show);
  router.get("/:id", animalController.showById);
  router.post("/",animalController.registro);
  app.use('/animals', router);
};