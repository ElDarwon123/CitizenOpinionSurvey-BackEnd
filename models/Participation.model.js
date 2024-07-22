const mongoose = require('mongoose')

const participationSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: '_User' },
    surveyId: { type: mongoose.Schema.Types.ObjectId, ref: '_Survey' },
    participationDate: { type: Date, required: true },
    certificate: { type: String, trim: true }
})

module.exports = mongoose.model('_Participation', participationSchema)