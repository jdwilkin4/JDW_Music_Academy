const express = require('express');
const router = express.Router();
const { students } = require('../controllers/students');

router.post('/students', students);

module.exports = router