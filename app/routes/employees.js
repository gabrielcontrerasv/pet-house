const employeeController = require('../database/controllers/employee.controller');
module.exports = app => {
  const router = require("express").Router();
  router.get("/", employeeController.show);
  router.get("/:id", employeeController.showById);
  router.post("/",employeeController.registro);
  //router.delete("/:id", employeeController.delete);
  app.use('/employees', router);
};