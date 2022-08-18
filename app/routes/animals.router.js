const animalController = require('../database/controllers/animal.controller');
const express = require('express')


  const router = express.Router();
  router.get("/", animalController.show);
  router.get("/:id", animalController.showById);
  router.post("/",animalController.register);
  router.put("/:id",animalController.updateById);
  router.delete("/:id",animalController.deleteById);

  module.exports = router;