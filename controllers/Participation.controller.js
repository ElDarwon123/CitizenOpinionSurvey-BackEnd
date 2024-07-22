const participationService = require('../services/Participation.service');
const certificateService = require('../services/Certificate.service');
const { v4: uuidv4 } = require('uuid');
const path = require('path')
const { generateCertificatePDF } = require('../utils/pdfGenerator');
const createParticipation = async (req, res) => {
    try {
        const { userId, surveyId, participationDate } = req.body;

        // Crear la participación
        const participation = await participationService.createParticipation({
            userId,
            surveyId,
            participationDate,
        });

        // Crear el identificador único para el certificado
        const uniqueId = uuidv4();
        const filePath = path.join(__dirname, '..', 'certificados', `${uniqueId}.pdf`);

        // Generar el PDF
        await generateCertificatePDF({
            participationId: participation._id,
            emitionDate: new Date(),
            identificator: uniqueId,
            cartificateFile: `certificados/${uniqueId}.pdf`
        });

        // Crear el certificado
        const certificate = await certificateService.createCertificate({
            participationId: participation._id,
            emitionDate: new Date(),
            identificator: uniqueId,
            cartificateFile: `certificados/${uniqueId}.pdf`
        });

        res.status(201).json({ participation, certificate });
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
        if (participation) {
            res.status(200).json(participation);
        } else {
            res.status(404).json({ error: 'Participation not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
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
        if (participation) {
            res.status(200).json(participation);
        } else {
            res.status(404).json({ error: 'Participation not found' });
        }
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
