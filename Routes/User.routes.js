const express = require('express');
const router = express.Router();
const userController = require('../controllers/User.controller');
const authenticateJWT = require('../middlewares/auth.middlewares')
router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.get('/user/profile', authenticateJWT, userController.getProfile);
router.patch('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
