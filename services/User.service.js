const User = require('../models/User.model');
const bcrypt = require('bcrypt');

const createUser = async (userData) => {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const user = new User({
        ...userData,
        password: hashedPassword
    });
    return user.save();
};

const getAllUsers = async () => {
    return User.find().populate('roleId');
};

const getUserById = async (id) => {
    return User.findById(id).populate('roleId');
};

const updateUser = async (id, userData) => {
    if (userData.password) {
        userData.password = await bcrypt.hash(userData.password, 10);
    }
    return User.findByIdAndUpdate(id, userData, { new: true });
};

const deleteUser = async (id) => {
    return User.findByIdAndDelete(id);
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};
