const mongoose = require('mongoose')

const certificateSchema = new mongoose.Schema({
    participationId: { type: mongoose.Schema.Types.ObjectId, ref: '_Participation'},
    emitionDate: { type: Date, required: true },
    identificator: { type: String, unique: true, required: true },
    cartificateFile: { type: String, required: true },
})

module.exports = mongoose.model('_Certificate', certificateSchema)