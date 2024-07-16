const express = require('express');
const router = express.Router();
const certificateController = require('../controllers/Certificate.controller');

router.post('/certificates', certificateController.createCertificate);
router.get('/certificates', certificateController.getAllCertificates);
router.get('/certificates/:id', certificateController.getCertificateById);
router.put('/certificates/:id', certificateController.updateCertificate);
router.delete('/certificates/:id', certificateController.deleteCertificate);

module.exports = router;
