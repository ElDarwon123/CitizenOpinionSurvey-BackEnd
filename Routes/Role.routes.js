const express = require('express');
const router = express.Router();
const roleController = require('../controllers/Role.controller');

router.post('/roles', roleController.createRole);
router.get('/roles', roleController.getAllRoles);
router.get('/roles/:id', roleController.getRoleById);
router.put('/roles/:id', roleController.updateRole);
router.delete('/roles/:id', roleController.deleteRole);

module.exports = router;
