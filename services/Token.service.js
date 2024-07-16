const RevToken = require('../models/RevokedToken.model')
const jwt = require('jsonwebtoken')

const remokeToken = async (token) => {
    const decoded = jwt.decode(token)
    const expiryDate = new Date(decoded.exp * 1000)

    const revokedToken = new RevToken({
        token,
        expiryDate
    })

    await revokedToken.save()

}

const isTokenRemoved = async (token) => {
    const revokedToken = await RevToken.findOne({token: token})
    return !!revokedToken
}

module.exports = {
    remokeToken,
    isTokenRemoved
}