const Question = require('../models/Question.model');
const questionService = require('../services/Question.service');

const createQuestion = async (req, res) => {
    try {
        const question = await questionService.createQuestion(req.body);
        res.status(201).json(question);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllQuestions = async (req, res) => {
    try {
        const questions = await Question.find();
        res.status(200).json(questions);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getQuestionById = async (req, res) => {
    try {
        const question = await questionService.getQuestionById(req.params.id);
        res.status(200).json(question);
    } catch (error) {
        res.status(404).json({ error: 'Question not found' });
    }
};

const getQuestionsBySurvey = async (req, res) => {
    try {
        const questions = await questionService.getQuestionsBySurvey(req.params.surveyId);
        res.status(200).json(questions);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateQuestion = async (req, res) => {
    try {
        const question = await questionService.updateQuestion(req.params.id, req.body);
        res.status(200).json(question);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteQuestion = async (req, res) => {
    try {
        await questionService.deleteQuestion(req.params.id);
        res.status(204).json();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createQuestion,
    getAllQuestions,
    getQuestionById,
    getQuestionsBySurvey,
    updateQuestion,
    deleteQuestion
};
