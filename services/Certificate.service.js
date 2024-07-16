const Certificate = require('../models/Certificate.model');

const createCertificate = async (certificateData) => {
    const certificate = new Certificate(certificateData);
    return certificate.save();
};

const getAllCertificates = async () => {
    return Certificate.find().populate('_Participation');
};

const getCertificateById = async (id) => {
    return Certificate.findById(id).populate('_Participaion');
};

const updateCertificate = async (id, certificateData) => {
    return Certificate.findByIdAndUpdate(id, certificateData, { new: true });
};

const deleteCertificate = async (id) => {
    return Certificate.findByIdAndDelete(id);
};

module.exports = {
    createCertificate,
    getAllCertificates,
    getCertificateById,
    updateCertificate,
    deleteCertificate
};
