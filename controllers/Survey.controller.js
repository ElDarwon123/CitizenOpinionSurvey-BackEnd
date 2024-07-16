const surveyService = require('../services/Survey.service');

const createSurvey = async (req, res) => {
    try {
        const survey = await surveyService.createSurvey(req.body);
        res.status(201).json(survey);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllSurveys = async (req, res) => {
    try {
        const surveys = await surveyService.getAllSurveys();
        res.status(200).json(surveys);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getSurveyById = async (req, res) => {
    try {
        const survey = await surveyService.getSurveyById(req.params.id);
        res.status(200).json(survey);
    } catch (error) {
        res.status(404).json({ error: 'Survey not found' });
    }
};

const updateSurvey = async (req, res) => {
    try {
        const survey = await surveyService.updateSurvey(req.params.id, req.body);
        res.status(200).json(survey);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteSurvey = async (req, res) => {
    try {
        await surveyService.deleteSurvey(req.params.id);
        res.status(204).json();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createSurvey,
    getAllSurveys,
    getSurveyById,
    updateSurvey,
    deleteSurvey
};
