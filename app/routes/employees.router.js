const employeeController = require('../database/controllers/employee.controller');
const express = require('express')


  const router = express.Router();
  router.get("/", employeeController.show);
  router.get("/:id", employeeController.showById);
  router.post("/",employeeController.register);
  router.put("/:id",employeeController.updateById);
  router.delete("/:id",employeeController.deleteById);

  module.exports = router;