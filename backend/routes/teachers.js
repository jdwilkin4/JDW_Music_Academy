const express = require('express');
const router = express.Router();
const { teachers } = require('../controllers/teachers');

router.get('/teachers', teachers);

module.exports = router;
