const userController = require('../database/controllers/user.controller');
const express = require('express')


  const router = express.Router();
  router.get("/", userController.show);
  //router.post("/login", userController.login);
  router.get("/:id", userController.showById);
  //router.post("/",userController.register);
  router.put("/:id",userController.updateById);
  router.patch("/role/:id",userController.updateUserRoleById);
  router.delete("/:id",userController.deleteById);

  module.exports = router;