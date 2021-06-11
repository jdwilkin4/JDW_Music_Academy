require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const port = process.env.PORT || 8000
const app = express()

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
