const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User.model')

const login = async (username, password) => {

    const user = await User.findOne({ username });
    if (!user) {
        throw new Error('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error('Invalid Credentials');
    }

    const token = jwt.sign(
        { id: user._id, username: user.username, rol: user.rol },
        process.env.JWTSECRET,
        { expiresIn: '6h' }
    );
    
    return { token, user };
};

module.exports = {
    login
};
