const Question = require('../models/Question.model');

const createQuestion = async (questionData) => {
    const question = new Question(questionData);
    await question.save();
    return question;
};

const getAllQuestions = async (req, res) => {
    try {
        const question = Question.find().populate('_surveys'); 
        res.status(200),json(question)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getQuestionById = async (id) => {
    return Question.findById(id).populate('_surveys')
};

const getQuestionsBySurvey = async (surveyId) => {
    return Question.find({ surveyId }).populate('_surveys'); 
};

const updateQuestion = async (id, questionData) => {
    return Question.findByIdAndUpdate(id, questionData, { new: true });
};

const deleteQuestion = async (id) => {
    return Question.findByIdAndDelete(id);
};

module.exports = {
    createQuestion,
    getAllQuestions,
    getQuestionById,
    getQuestionsBySurvey,
    updateQuestion,
    deleteQuestion
};
