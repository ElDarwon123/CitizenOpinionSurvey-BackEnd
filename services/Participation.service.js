const Participation = require('../models/Participation.model');

const createParticipation = async (participationData) => {
    const participation = new Participation(participationData);
    return participation.save();
};

const getAllParticipations = async () => {
    return Participation.find().populate('_User').populate('_Survey');
};

const getParticipationById = async (id) => {
    return Participation.findById(id).populate('_User').populate('_Survey');
};

const getSurveyResults = async (sondeo_id) => {
    return await Participation.find({surveyId: sondeo_id}).populate('_User').populate('_Survey') 
}

const updateParticipation = async (id, participationData) => {
    return Participation.findByIdAndUpdate(id, participationData, { new: true });
};

const deleteParticipation = async (id) => {
    return Participation.findByIdAndDelete(id);
};

module.exports = {
    createParticipation,
    getAllParticipations,
    getParticipationById,
    getSurveyResults,
    updateParticipation,
    deleteParticipation
};
