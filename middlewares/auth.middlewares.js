const jwt = require('jsonwebtoken')
const tokenService = require('../services/Token.service')

const authenticateToken = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.sendStatus(401)
    }

    const isRevoked = await tokenService.isTokenRemoved(token)

    if (isRevoked) {
        res.sendStatus(403)
    }

    jwt.verify(token, process.env.JWTSECRET, (err, user) => {
        if (err) {
            return res.sendStatus(403)
        }
        req.user = user
        next()
    })
}

module.exports = {
    authenticateToken
}