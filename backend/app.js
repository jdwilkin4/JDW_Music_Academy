require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const port = process.env.PORT || 8000
const mongoUri = process.env.MONGO_URI
const app = express()
const landingPages = require('./routes/landingPages');

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })

//check for connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
    console.log('DB connected')
})

app.use('/jdwmusic', landingPages);


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
