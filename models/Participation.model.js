const mongoose = require('mongoose')

const participationSchema = new mongoose.Schema({
    usaerId: { type: mongoose.Schema.Types.ObjectId, ref: '_User' },
    surveyId: { type: mongoose.Schema.Types.ObjectId, ref: '_Survey' },
    participationDate: { type: Date, required: true },
    certificate: { type: String }
})

module.exports = mongoose.model('_Participation', participationSchema)