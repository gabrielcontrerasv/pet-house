const userController = require('../../app/database/controllers/user.controller');
const passport = require('passport');

module.exports = app => {
  const router = require("express").Router();
  router.get("/", userController.show);
  router.get("/:id", userController.showById);
  router.post("/",userController.registro);
  app.use('/users', router);
};