require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
//const expressValidator = require('express-validator');
const port = process.env.PORT || 8000;
const mongoUri = process.env.MONGO_URI;
const app = express();
const landingPages = require('./routes/landingPages');
const teachers = require('./routes/teachers');
const students = require('./routes/students');

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })

//check for connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
    console.log('DB connected')
})

//middleware routes
app.use('/', landingPages);
app.use('/', teachers);
app.use('/', students);

//middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());
//app.use(expressValidator());

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
