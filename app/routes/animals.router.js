const petController = require('../database/controllers/pet.controller');
const express = require('express')


  const router = express.Router();
  router.get("/", petController.show);
  router.get("/:id", petController.showById);
  router.post("/",petController.register);
  router.put("/:id",petController.updateById);
  router.delete("/:id",petController.deleteById);

  module.exports = router;