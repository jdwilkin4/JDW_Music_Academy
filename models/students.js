const mongoose = require('mongoose');
const { Schema } = mongoose

const studentSchema = new Schema({
    name: String,
    age: Number,
    grade: Number,
    instrument: String
})

module.exports = mongoose.model('student', studentSchema)