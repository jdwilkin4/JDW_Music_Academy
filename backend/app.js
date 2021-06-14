require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const port = process.env.PORT || 8000
const app = express()

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

//check for connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
    //we are connected
})

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
