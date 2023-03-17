const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstname : {
        type: String,
    },
    lastname : {
        type: String,
    },
    username : {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    confirmPassword: {
        type: String,
    },
    usertype: {
        type: String,
    },
    cart: {
        type: [String],
    },
    products: {
        type: [String],
    },
    status: {
        type: String,
        default: 'active'
    },
    transaction: {
        type: Number,
        default: 0
    },
    pincode: {
        type: String,
    },
    phone: {
        type: String,
    },
    address: {
        type: String,
    }
})

const User = mongoose.model('User',userSchema)
module.exports = User