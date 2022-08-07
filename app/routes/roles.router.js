const rolController = require('../database/controllers/role.controller');
const express = require('express')


  const router = express.Router();
  router.get("/", rolController.show);
  module.exports = router;