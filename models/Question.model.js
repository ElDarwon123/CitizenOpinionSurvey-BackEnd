const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
    surveyId: { type: mongoose.Schema.Types.ObjectId, ref: '_Survey' },
    question: { type: String, required: true },
    responseType: {
        type: String,
        enum: ['Abierta', 'Opcion Multiple'],
        required: true
    },
    responseOptions: { type: String }
})

module.exports = mongoose.model('_Question', questionSchema)