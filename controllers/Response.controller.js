const responseService = require('../services/Response.service');

const createResponse = async (req, res) => {
    try {
        const response = await responseService.createResponse(req.body);
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllResponses = async (req, res) => {
    try {
        const responses = await responseService.getAllResponses();
        res.status(200).json(responses);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getResponseById = async (req, res) => {
    try {
        const response = await responseService.getResponseById(req.params.id);
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({ error: 'Response not found' });
    }
};

const updateResponse = async (req, res) => {
    try {
        const response = await responseService.updateResponse(req.params.id, req.body);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteResponse = async (req, res) => {
    try {
        await responseService.deleteResponse(req.params.id);
        res.status(204).json();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createResponse,
    getAllResponses,
    getResponseById,
    updateResponse,
    deleteResponse
};
