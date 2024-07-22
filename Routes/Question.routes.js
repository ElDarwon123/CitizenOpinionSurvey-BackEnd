const express = require('express');
const router = express.Router();
const questionController = require('../controllers/Question.controller');
const authenticateToken = require('../middlewares/auth.middlewares');
const authorizeAdmin = require('../middlewares/auth-admin.middleware');

router.post('/questions', questionController.createQuestion);
router.get('/questions', questionController.getAllQuestions);
router.get('/questions/:id', authorizeAdmin, questionController.getQuestionById);
router.get('/questions/survey/:id', authorizeAdmin, questionController.getQuestionsBySurvey);
router.patch('/questions/:id', authorizeAdmin, questionController.updateQuestion);
router.delete('/questions/:id', authorizeAdmin, questionController.deleteQuestion);

module.exports = router;
