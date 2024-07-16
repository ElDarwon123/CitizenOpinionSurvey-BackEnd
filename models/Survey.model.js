const mongoose = require('mongoose')

const surveySchema = new mongoose.Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true },
    openingDate: { type: Date, required: true },
    closingDate: { type: Date, required: true },
    poblationalProfile: { type: String },
    icon: { type: String },
})

module.exports = mongoose.model('_Survey', surveySchema)