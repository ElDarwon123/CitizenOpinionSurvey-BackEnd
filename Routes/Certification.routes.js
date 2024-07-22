const express = require('express');
const router = express.Router();
const certificateController = require('../controllers/Certificate.controller');
const authenticateToken = require('../middlewares/auth.middlewares');
const authorizeAdmin = require('../middlewares/auth-admin.middleware');

router.post('/certificates',   certificateController.createCertificate);
router.get('/certificates',  certificateController.getAllCertificates);
router.get('/certificates/:id', authorizeAdmin, certificateController.getCertificateById);
router.get('/certificates/:userId/:surveyId', authorizeAdmin, certificateController.generateCertificate);
router.put('/certificates/:id', authorizeAdmin, certificateController.updateCertificate);
router.delete('/certificates/:id', authorizeAdmin, certificateController.deleteCertificate);

module.exports = router;
