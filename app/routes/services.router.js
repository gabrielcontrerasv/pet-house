const serviceController = require('../database/controllers/service.controller');
const express = require('express')


  const router = express.Router();
  router.get("/", serviceController.show);
  /*router.get("/:id", serviceController.showById);
  router.post("/",serviceController.register);
  router.put("/:id",serviceController.updateById);
  router.delete("/:id",serviceController.deleteById);*/

  module.exports = router;