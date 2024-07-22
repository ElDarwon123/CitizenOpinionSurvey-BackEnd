const certificateService = require('../services/Certificate.service');
const PDFDocument = require('pdfkit');
const User = require('../models/User.model');
const Sondeo = require('../models/Survey.model');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const path = require('path')
const { generateCertificatePDF } = require('../utils/pdfGenerator');

const createCertificate = async (req, res) => {
    const uniqueId = uuidv4();
    try {
        const { participationId } = req.body;
        const filePath = path.join(__dirname, '..', 'certificados', `${uniqueId}.pdf`);
        
        await generateCertificatePDF({
            participationId,
            emitionDate: Date.now,
            identificator: uniqueId,
            cartificateFile: filePath
        });
        const certificateData = {
            participationId,
            emitionDate: new Date(),
            identificator: uniqueId,
            cartificateFile: `certificados/${uniqueId}.pdf`
        };
        const certificate = await certificateService.createCertificate(certificateData);



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

const generateCertificate = async (req, res) => {
    try {
        const { userId, surveyId } = req.params;
        const user = await User.findById(userId);
        const sondeo = await Sondeo.findById(surveyId);

        if (!user || !sondeo) {
            return res.status(404).json({ error: 'User or survey not found' });
        }

        const doc = new PDFDocument();
        let filename = `certificate-${userId}-${surveyId}.pdf`;
        filename = encodeURIComponent(filename);
        
        res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"');
        res.setHeader('Content-type', 'application/pdf');

        doc.fontSize(25).text('Certificate of Participation', { align: 'center' });
        doc.moveDown();
        doc.fontSize(18).text(`This certifies that ${user.nombres} ${user.apellidos}`, { align: 'center' });
        doc.moveDown();
        doc.fontSize(15).text(`has participated in the survey: ${sondeo.titulo}`, { align: 'center' });
        doc.moveDown();
        doc.text(`Date: ${new Date().toLocaleDateString()}`, { align: 'center' });

        doc.pipe(res);
        doc.end();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
module.exports = {
    createCertificate,
    getAllCertificates,
    getCertificateById,
    updateCertificate,
    deleteCertificate,
    generateCertificate
};
