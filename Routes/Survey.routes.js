const express = require('express');
const router = express.Router();
const surveyController = require('../controllers/Survey.controller');

router.post('/surveys', surveyController.createSurvey);
router.get('/surveys', surveyController.getAllSurveys);
router.get('/surveys/:id', surveyController.getSurveyById);
router.put('/surveys/:id', surveyController.updateSurvey);
router.delete('/surveys/:id', surveyController.deleteSurvey);

module.exports = router;
