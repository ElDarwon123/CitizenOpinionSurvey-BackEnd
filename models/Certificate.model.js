const mongoose = require('mongoose')

const certificateSchema = new mongoose.Schema({
    participationId: { type: mongoose.Schema.Types.ObjectId, ref: '_Participations'},
    emitionDate: { type: Date, default: Date.now },
    identificator: { type: String, unique: true, required: true },
    cartificateFile: { type: String, trim:true},
})

module.exports = mongoose.model('_Certificate', certificateSchema)