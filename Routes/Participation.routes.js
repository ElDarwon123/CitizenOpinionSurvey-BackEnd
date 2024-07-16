const express = require('express');
const router = express.Router();
const participationController = require('../controllers/Participation.controller');

router.post('/participations', participationController.createParticipation);
router.get('/participations', participationController.getAllParticipations);
router.get('/participations/:id', participationController.getParticipationById);
router.put('/participations/result/:id', participationController.getSurveyResults);
router.put('/participations/:id', participationController.updateParticipation);
router.delete('/participations/:id', participationController.deleteParticipation);

module.exports = router;
