const EmployeeController = require('../database/controllers/employee.controller');
module.exports = app => {
  var router = require("express").Router();
  router.get("/", EmployeeController.show);
  app.use('/employees', router);
};