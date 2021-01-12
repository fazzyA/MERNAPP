const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        default: 'faiza'
    },
    email: {
        type: String,
        default: 'faz.pak@gmail.com',
    },
    password: {
        type: String,
        default: '1111',
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User
