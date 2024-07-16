const mongoose = require('mongoose')

const RevokedToken = new mongoose.Schema({
    token: { type: String, required: true},
    expiryDate: { type: Date, required: true }
})

module.exports = mongoose.model('_RevokedToken', RevokedToken)