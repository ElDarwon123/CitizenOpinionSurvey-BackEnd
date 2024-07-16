const mongoose = require('mongoose')

const responseSchema = new mongoose.Schema({
    participationId: { type: mongoose.Schema.Types.ObjectId, ref: '_Participation'},
    questionId: { type: mongoose.Schema.Types.ObjectId, ref: '_Question'},
    response:  { type: String, required: true }
})

module.exports = mongoose.model('_Response', responseSchema)