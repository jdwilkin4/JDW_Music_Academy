const express = require('express');
const router = express.Router();
const { homePage } = require('../controllers/homePage');
const { aboutPage } = require('../controllers/aboutPage');
const { musicClasses } = require('../controllers/musicClasses')

//middleware specific to this router
router.use(function timelog(req, res, next) {
    console.log(`Time: ${Date.now()}`)
    next()
})

//route for the home page
router.get('/', homePage)

//route for the about page
router.get('/about', aboutPage)

//route for the classes page
router.get('/classes', musicClasses)

module.exports = router
