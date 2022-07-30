const express = require('express');
const router = express.Router();
const EmployeeController = require('../Controllers/EmployeeController')

  router.get('/employees', EmployeeController.all)

  router.get('/', (req, res) => {
    res.json({foo:"bar"})
  })  


  module.exports = router;