const Participation = require('../models/Participation.model');
const { generateCertificatePDF } = require('../utils/pdfGenerator');
const Certificate = require('../models/Certificate.model');
const { v4: uuidv4 } = require('uuid');

const createParticipation = async (participationData) => {
    const participation = new Participation(participationData);
    await participation.save();


    const certificateIdentifier = uuidv4(); 
    

    const certificateFilePath = await generateCertificatePDF({
        participationId: participation._id,
        emitionDate: participation.participationDate,
        identificator: certificateIdentifier
    });

    const certificate = new Certificate({
        participationId: participation._id,
        emitionDate: participation.participationDate,
        identificator: certificateIdentifier,
        cartificateFile: certificateFilePath
    });
    await certificate.save();

    // Actualizar la participación con el archivo del certificado
    participation.certificate = certificateFilePath;
    await participation.save();

    return participation;
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
