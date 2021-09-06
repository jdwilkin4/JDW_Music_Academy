const express = require('express');
const router = express.Router();
const { students } = require('../controllers/students');

router.get('/students', students);

module.exports = router