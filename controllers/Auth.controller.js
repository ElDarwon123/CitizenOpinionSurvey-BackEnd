const authService = require('../services/Auth.service')
const tokenService = require('../services/Token.service')

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const { token, user } = await authService.login(username, password);
        res.json({ token, user });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};

const logout = async (req, res) => {
    const token = req.headers['authorization'].split(' ')[1]
    try {
        
        await tokenService.remokeToken(token)
        res.status(200).json({ message: 'Logout successful' })

    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

module.exports = {
    login,
    logout
};
