const recordController = require('../database/controllers/record.controller');
const express = require('express')


  const router = express.Router();
  router.get("/", recordController.show);
  router.post("/", recordController.register);
  router.get("/:id", recordController.showByPet);
  module.exports = router;