const mongoose = require('mongoose');
const crypto = require('crypto');
const uuidv1 = require('uuidv1');
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
    },
    history: {
        type: Array,
        default: []
    }
}, { timestamps: true })

//virtual field
studentSchema.virtual('password')
    .set(function (password) {
        this._password = password
        this.salt = uuidv1()
        this.hashed_password = this.encryptPassword(password)
    })
    .get(function () {
        return this._password
    })


studentSchema.methods = {
    encryptPassword: (password) => {
        if (!password) return '';
        try {
            crypto.createHmac('sha256', this.salt)
                .update(password)
                .digest('hex')
        } catch (error) {
            return ''
        }
    }
}

module.exports = mongoose.model('Student', studentSchema)