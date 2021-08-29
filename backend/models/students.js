const mongoose = require('mongoose');
const crypto = require('crypto');
const { Schema } = mongoose

const studentSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxLength: 32
    },
    email: {
        type: String,
        trim: true,
        required: true,
        maxLength: 32,
        unique: true
    },
    hashed_password: {
        type: String,
        required: true,
    },
    salt: String,
    age: { type: Number },
    grade: { type: Number },
    instrument: {
        type: String,
        required: true,
    },
    about_profile: {
        type: String,
        trim: true
    },
    role: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('student', studentSchema)