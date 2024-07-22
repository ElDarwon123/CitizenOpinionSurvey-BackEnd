const express = require('express');
const router = express.Router();
const surveyController = require('../controllers/Survey.controller');
const upload = require('../libs/uploadImg');
const authorizeAdmin = require('../middlewares/auth-admin.middleware');

router.use(express.urlencoded({ extended: true }))
router.post('/surveys', surveyController.createSurvey);
router.post('/add-question', surveyController.addQuestionToSurvey);
router.get('/surveys', surveyController.getAllSurveys);
router.get('/surveys/:id', surveyController.getSurveyById);
router.put('/surveys/:id', surveyController.updateSurvey);
router.delete('/surveys/:id', surveyController.deleteSurvey);

module.exports = router;
