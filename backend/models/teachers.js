const mongoose = require('mongoose');
const crypto = require('crypto');
const uuidv1 = require('uuidv1');
const { Schema } = mongoose;

const teacherSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxLength: 32
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        maxLength: 32
    },
    hashed_password: {
        type: String,
        required: true
    },
    instrument: {
        type: String,
        required: true,
        maxLength: 32,
        trim: true
    },
    about_profile: {
        type: String,
        maxLength: 250,
        trim: true
    },
    salt: String,
    role: {
        type: Number,
        default: 1
    },
    history: {
        type: Array,
        default: []
    }

}, { timestamps: true })

//virtual fields
teacherSchema.virtual('password')
    .set(function (password) {
        this._password = password
        this.salt = uuidv1()
        this.hashed_password = this.encryptPassword(password)
    })
    .get(function () {
        return this._password
    })

teacherSchema.methods = {
    encryptPassword: (password) => {
        if (!password) return ''
        try {
            crypto.createHmac('sha256', this.salt)
                .update(password)
                .digest('hex')
        } catch (error) {
            return ''
        }
    }
}
module.exports = mongoose.model('Teacher', teacherSchema)