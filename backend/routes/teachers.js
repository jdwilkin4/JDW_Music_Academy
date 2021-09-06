const express = require('express');
const router = express.Router();
const { teachers } = require('../controllers/teachers');

router.post('/teachers', teachers);

module.exports = router;
