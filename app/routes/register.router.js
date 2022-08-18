const RegisterController = require('../database/controllers/register.controller');
const express = require('express');
const router = express.Router();
  router.post("/", RegisterController.register);
  module.exports = router;