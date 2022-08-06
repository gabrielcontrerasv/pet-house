const appointmentController = require('../database/controllers/appointment.controller');
const express = require('express')


  const router = express.Router();
  router.get("/", appointmentController.show);
  router.get("/:id", appointmentController.showById);
  router.post("/",appointmentController.register);
  router.put("/:id",appointmentController.updateById);
  router.delete("/:id",appointmentController.deleteById);

  module.exports = router;