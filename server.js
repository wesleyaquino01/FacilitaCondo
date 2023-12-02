const express = require('express');
const cookie = require('cookie');
const jwt = require('jsonwebtoken');
const { authMiddleware, authenticateJWT } = require('./auth'); // Importar do arquivo auth.js
const app = express();
const port = 3000;

app.use(express.json());
app.use('/moradores', authMiddleware);

// app.use('/', routes);


app.listen(port, () => {
    console.log(`Servidor Rodando na porta http://localhost:${port}`)
})