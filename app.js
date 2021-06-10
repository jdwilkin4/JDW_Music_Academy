require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const port = process.env.PORT
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
