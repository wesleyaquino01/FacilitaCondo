// auth.js
const basicAuth = require('express-basic-auth');
const jwt = require('jsonwebtoken');

const jwtSecretKey = 'sua_chave_secreta';

const users = {
    'Wesley': '123',
    'teste': 'teste123'
};

const authMiddleware = basicAuth({
    users: users,
    challenge: true,
    unauthorizedResponse: 'Autenticação falhou. Forneça credenciais válidas.'
});

const authenticateJWT = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Token de autenticação ausente' });
    }

    jwt.verify(token, jwtSecretKey, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Falha na autenticação do token' });
        }

        req.user = user;
        next();
    });
};

module.exports = { authMiddleware, authenticateJWT };
