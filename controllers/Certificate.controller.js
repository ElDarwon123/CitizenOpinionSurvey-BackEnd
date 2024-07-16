const certificateService = require('../services/Certificate.service');

const createCertificate = async (req, res) => {
    try {
        const certificate = await certificateService.createCertificate(req.body);
        res.status(201).json(certificate);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllCertificates = async (req, res) => {
    try {
        const certificates = await certificateService.getAllCertificates();
        res.status(200).json(certificates);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getCertificateById = async (req, res) => {
    try {
        const certificate = await certificateService.getCertificateById(req.params.id);
        res.status(200).json(certificate);
    } catch (error) {
        res.status(404).json({ error: 'Certificate not found' });
    }
};

const updateCertificate = async (req, res) => {
    try {
        const certificate = await certificateService.updateCertificate(req.params.id, req.body);
        res.status(200).json(certificate);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteCertificate = async (req, res) => {
    try {
        await certificateService.deleteCertificate(req.params.id);
        res.status(204).json();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createCertificate,
    getAllCertificates,
    getCertificateById,
    updateCertificate,
    deleteCertificate
};
