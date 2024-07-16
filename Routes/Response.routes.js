const express = require('express');
const router = express.Router();
const responseController = require('../controllers/Response.controller');

router.post('/responses', responseController.createResponse);
router.get('/responses', responseController.getAllResponses);
router.get('/responses/:id', responseController.getResponseById);
router.put('/responses/:id', responseController.updateResponse);
router.delete('/responses/:id', responseController.deleteResponse);

module.exports = router;
