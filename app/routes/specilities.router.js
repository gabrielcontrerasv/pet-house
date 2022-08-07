const specialitieController = require('../database/controllers/specialitie.controller');
const express = require('express')


  const router = express.Router();
  router.get("/", specialitieController.show);
  module.exports = router;