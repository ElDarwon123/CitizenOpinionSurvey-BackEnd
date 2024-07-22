const surveyService = require('../services/Survey.service');
const Survey = require('../models/Survey.model');
const upload = require('../libs/uploadImg');
const questionService = require('../services/Question.service');

const createSurvey = async (req, res) => {
    console.log('Received request to create survey');
    console.log('Request body:', req.body);

    upload.single('icon')(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }

        const { title, description, startDate, endDate, poblationalProfile, questions } = req.body;

        try {
            const newSurvey = new Survey({
                title,
                description,
                startDate,
                endDate,
                poblationalProfile,
                icon: req.file ? `${req.protocol}://${req.get('host')}/imagenes/${req.file.filename}` : null
            });

            const savedSurvey = await newSurvey.save();

            if (Array.isArray(questions)) {
                const questionPromises = questions.map(question => {
                    return questionService.createQuestion({
                        ...question,
                        surveyId: savedSurvey._id
                    });
                });

                const savedQuestions = await Promise.all(questionPromises);
                savedSurvey.questions = savedQuestions.map(q => q._id);
            }

            await savedSurvey.save();
            res.status(201).json(savedSurvey);
        } catch (error) {
            console.error('Error creating survey:', error.message);
            res.status(500).json({ error: error.message });
        }
    });
};

const addQuestionToSurvey = async (req, res) => {
    const { surveyId, question, responseType, responseOptions } = req.body;

    try {
        const survey = await Survey.findById(surveyId);
        if (!survey) {
            return res.status(404).json({ error: 'Survey not found' });
        }

        const newQuestion = {
            question,
            responseType,
            responseOptions
        };

        survey.preguntas.push(newQuestion);
        await survey.save();

        res.status(201).json(survey);
    } catch (error) {
        console.error('Error adding question:', error.message);
        res.status(500).json({ error: error.message });
    }
};

const getAllSurveys = async (req, res) => {
    try {
        const surveys = await Survey.find()
        res.status(200).json(surveys);
    } catch (error) {
        console.error('Error getting surveys:', error.message);
        res.status(500).json({ error: error.message });
    }
};

const getSurveyById = async (req, res) => {
    try {
        const survey = await surveyService.getSurveyById(req.params.id);
        if (survey) {
            if (survey.icon) {
                await res.set('Content-Type', survey.icon.contentType);
                await res.send(survey.icon.data);
            } else {
                res.status(200).json(survey);
            }
        } else {
            res.status(404).json({ error: 'Survey not found' });
        }
        res.status(404).json({ error: 'Survey not found' });
    } catch (error) {
        console.error('Error in getSurveyById controller:', error);
        res.status(404).json({ error: 'Survey not found' });
    }
};

const updateSurvey = async (req, res) => {
    try {
        const survey = await surveyService.updateSurvey(req.params.id, req.body);
        res.status(200).json(survey);
    } catch (error) {
        console.error('Error in updateSurvey controller:', error);
        res.status(400).json({ error: error.message });
    }
};

const deleteSurvey = async (req, res) => {
    try {
        await surveyService.deleteSurvey(req.params.id);
        res.status(204).json();
    } catch (error) {
        console.error('Error in deleteSurvey controller:', error);
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createSurvey,
    addQuestionToSurvey,
    getAllSurveys,
    getSurveyById,
    updateSurvey,
    deleteSurvey
};

