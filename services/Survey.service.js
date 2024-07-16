const Survey = require('../models/Survey.model');
const Question = require('../models/Question.model')

const createSurvey = async (surveyData) => {
    const survey = new Survey(surveyData);
    return survey.save();
};

const getAllSurveys = async () => {
    return Survey.find();
};

const getSurveyById = async (id) => {
    return Survey.findById(id);
};

const updateSurvey = async (id, surveyData) => {
    return Survey.findByIdAndUpdate(id, surveyData, { new: true });
};

const deleteSurvey = async (id) => {
    return Survey.findByIdAndDelete(id);
};

module.exports = {
    createSurvey,
    getAllSurveys,
    getSurveyById,
    updateSurvey,
    deleteSurvey
};
