const Question = require('../models/Question.model');

const createQuestion = async (questionData) => {
    const question = new Question(questionData);
    await question.save();
    return question
};

const getAllQuestions = async () => {
    return Question.find().populate('_Survey');
};

const getQuestionById = async (id) => {
    return Question.findById(id).populate('Survey');
};

const getQuestionBySurvey = async (sondeo_id) => {
    
    return await Question.find({ surveyId: sondeo_id })
}

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
    getQuestionBySurvey,
    updateQuestion,
    deleteQuestion
};
