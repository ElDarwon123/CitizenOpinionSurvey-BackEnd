const Response = require('../models/Response.model');

const createResponse = async (responseData) => {
    const response = new Response(responseData);
    return response.save();
};

const getAllResponses = async () => {
    return Response.find().populate('_Participation').populate('_Question');
};

const getResponseById = async (id) => {
    return Response.findById(id).populate('_Participation').populate('_Question');
};

const updateResponse = async (id, responseData) => {
    return Response.findByIdAndUpdate(id, responseData, { new: true });
};

const deleteResponse = async (id) => {
    return Response.findByIdAndDelete(id);
};

module.exports = {
    createResponse,
    getAllResponses,
    getResponseById,
    updateResponse,
    deleteResponse
};
