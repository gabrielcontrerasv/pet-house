const genderController = require('../database/controllers/gender.controller');
const express = require('express')


  const router = express.Router();
  router.get("/", genderController.show);
  module.exports = router;