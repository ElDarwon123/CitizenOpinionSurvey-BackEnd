const Role = require('../models/Role.model');

const createRole = async (roleData) => {
    const role = new Role(roleData);
    return role.save();
};

const getAllRoles = async () => {
    return Role.find();
};

const getRoleById = async (id) => {
    return Role.findById(id);
};

const updateRole = async (id, roleData) => {
    return Role.findByIdAndUpdate(id, roleData, { new: true });
};

const deleteRole = async (id) => {
    return Role.findByIdAndDelete(id);
};

module.exports = {
    createRole,
    getAllRoles,
    getRoleById,
    updateRole,
    deleteRole
};
