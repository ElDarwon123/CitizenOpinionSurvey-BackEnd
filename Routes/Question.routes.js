const express = require('express');
const router = express.Router();
const questionController = require('../controllers/Question.controller');

router.post('/questions', questionController.createQuestion);
router.get('/questions', questionController.getAllQuestions);
router.get('/questions/:id', questionController.getQuestionById);
router.put('/questions/survey/:id', questionController.getQuestionBySurvey);
router.put('/questions/:id', questionController.updateQuestion);
router.delete('/questions/:id', questionController.deleteQuestion);

module.exports = router;
