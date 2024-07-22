const authenticateJWT = require('./auth.middlewares'); 

const authorizeAdmin = (req, res, next) => {
    authenticateJWT(req, res, () => {
        if (req.user.role === 'admin') {
            next();
        } else {
            res.status(403).json({ error: 'Access denied' });
        }
    });
};

module.exports = authorizeAdmin;
