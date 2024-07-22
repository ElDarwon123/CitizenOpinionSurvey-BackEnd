const Survey = require('../models/Survey.model');

const createSurvey = async (req, res) => {
    try {
        const { title, description, startDate, endDate } = req.body;
        const icon = req.file ? { data: req.file.buffer, contentType: req.file.mimetype } : null;

        const newSurvey = new Survey({
            titulo: title,
            descripcion: description,
            inicio: new Date(startDate),
            fin: new Date(endDate),
            icon,
        });

        await newSurvey.save();
        res.status(201).json(newSurvey);
    } catch (error) {
        console.error('Error creating survey:', error);
        res.status(500).json({ error: error.message });
    }
};

const getAllSurveys = async () => {
    try {
        return await Survey.find();
    } catch (error) {
        console.error('Error fetching surveys:', error);
        throw new Error('Error fetching surveys');
    }
};

const getSurveyById = async (id) => {
    try {
        return await Survey.findById(id);
    } catch (error) {
        console.error('Error fetching survey by ID:', error);
        throw new Error('Error fetching survey by ID');
    }
};

const updateSurvey = async (id, surveyData) => {
    try {
        return await Survey.findByIdAndUpdate(id, surveyData, { new: true });
    } catch (error) {
        console.error('Error updating survey:', error);
        throw new Error('Error updating survey');
    }
};

const deleteSurvey = async (id) => {
    try {
        return await Survey.findByIdAndDelete(id);
    } catch (error) {
        console.error('Error deleting survey:', error);
        throw new Error('Error deleting survey');
    }
};

module.exports = {
    createSurvey,
    getAllSurveys,
    getSurveyById,
    updateSurvey,
    deleteSurvey
};
