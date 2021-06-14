const express = require('express');
const router = express.Router();

//middleware specific to this router
router.use(function timelog(req, res, next) {
    console.log(`Time: ${Date.now()}`)
    next()
})

//route for the home page
router.get('/', function (req, res) {
    res.send('JDW Music Academy')
})

//route for the about page
router.get('/about', function (req, res) {
    res.send('About page JDW Music Academy')
})

//route for the classes page
router.get('/classes', function (req, res) {
    res.send('Music classes')
})

module.exports = router
