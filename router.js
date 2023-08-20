const express = require('express');
const userController = require('./getAllData/dataController');
const router = express.Router();
router.get('/allData', dataController.getData);
module.exports = router;