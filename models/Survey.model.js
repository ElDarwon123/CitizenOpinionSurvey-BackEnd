const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    poblationalProfile: { type: String },
    icon: { type: String, trim: true }, 
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: '_Questions' }]
}, {
    timestamps: true
});

module.exports = mongoose.model('_Survey', surveySchema);
