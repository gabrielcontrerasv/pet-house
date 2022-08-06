const userController = require('../database/controllers/user.controller');
const express = require('express')


  const router = express.Router();
  router.get("/", userController.show);
  router.get("/login", userController.login);
  router.get("/:id", userController.showById);
  router.post("/",userController.register);
  router.put("/:id",userController.updateById);
  router.delete("/:id",userController.deleteById);

  module.exports = router;