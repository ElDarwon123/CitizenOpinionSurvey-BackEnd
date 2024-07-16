const participationService = require('../services/Participation.service');

const createParticipation = async (req, res) => {
    try {
        const participation = await participationService.createParticipation(req.body);
        res.status(201).json(participation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllParticipations = async (req, res) => {
    try {
        const participations = await participationService.getAllParticipations();
        res.status(200).json(participations);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getParticipationById = async (req, res) => {
    try {
        const participation = await participationService.getParticipationById(req.params.id);
        res.status(200).json(participation);
    } catch (error) {
        res.status(404).json({ error: 'Participation not found' });
    }
};

const getSurveyResults = async (req, res) => {
    try {
        
        const surveyResults = await participationService.getSurveyResults(req.params.id);
        res.status(200).json(surveyResults);

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const updateParticipation = async (req, res) => {
    try {
        const participation = await participationService.updateParticipation(req.params.id, req.body);
        res.status(200).json(participation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteParticipation = async (req, res) => {
    try {
        await participationService.deleteParticipation(req.params.id);
        res.status(204).json();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createParticipation,
    getAllParticipations,
    getParticipationById,
    getSurveyResults,
    updateParticipation,
    deleteParticipation
};
