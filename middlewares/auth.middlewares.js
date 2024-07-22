const jwt = require('jsonwebtoken');
const User = require('../models/User.model'); 

const authenticateJWT = (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Invalid token.' });
        }


        try {
            const dbUser = await User.findById(user.id);
            if (!dbUser) {
                return res.status(401).json({ error: 'User not found.' });
            }

            req.user = dbUser; 
            next();
        } catch (error) {
            res.status(500).json({ error: 'Internal server error.' });
        }
    });
};

module.exports = authenticateJWT;
