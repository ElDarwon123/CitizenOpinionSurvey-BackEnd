const roleService = require('../services/Role.service');

const createRole = async (req, res) => {
    try {
        const role = await roleService.createRole(req.body);
        res.status(201).send(role);
    } catch (error) {
        res.status(400).send(error);
    }
};

const getAllRoles = async (req, res) => {
    try {
        const roles = await roleService.getAllRoles();
        res.status(200).send(roles);
    } catch (error) {
        res.status(400).send(error);
    }
};

const getRoleById = async (req, res) => {
    try {
        const role = await roleService.getRoleById(req.params.id);
        if (!role) return res.status(404).send({ message: 'Role not found' });
        res.status(200).send(role);
    } catch (error) {
        res.status(400).send(error);
    }
};

const updateRole = async (req, res) => {
    try {
        const role = await roleService.updateRole(req.params.id, req.body);
        if (!role) return res.status(404).send({ message: 'Role not found' });
        res.status(200).send(role);
    } catch (error) {
        res.status(400).send(error);
    }
};

const deleteRole = async (req, res) => {
    try {
        const role = await roleService.deleteRole(req.params.id);
        if (!role) return res.status(404).send({ message: 'Role not found' });
        res.status(200).send({ message: 'Role deleted successfully' });
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = {
    createRole,
    getAllRoles,
    getRoleById,
    updateRole,
    deleteRole
};
