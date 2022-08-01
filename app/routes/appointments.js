const appointmentController = require('../../app/database/controllers/appointment.controller');
const passport = require('passport');

module.exports = app => {
  const router = require("express").Router();
  router.get("/", appointmentController.show);
  router.get("/:id", appointmentController.showById);
  router.post("/",appointmentController.registro);
  //router.delete("/:id", appointmentController.delete);
  app.use('/appointments', router);
};