const express = require('express')
const basicAuth = require('express-basic-auth');
const cookie = require('cookie');
const jwt = require('jsonwebtoken');
const app = express()
const cors = require('cors');
const port = 3000

const jwtSecretKey = 'sua_chave_secreta';
var moradoresCondominio = [
    {
        "nome_completo": "Nome Completo",
        "cpf": "123.456.789-00",
        "idade": 30,
        "sexo": "Masculino",
        "responsavel": "Sim",
        "numero_de_moradores": 2,
        "cep": "01001-000",
        "bairro": "aaaa",
        "complemento": "askaksakskas"
    }      
]

const users = {
    'Wesley': '123',
    'teste': 'teste123'
};

const authMiddleware = basicAuth({
    users: users,
    challenge: true,
    unauthorizedResponse: 'Autenticação falhou. Forneça credenciais válidas.'
});

app.use(cors());
app.use(express.json());
app.use('/moradores', authMiddleware);

const authenticateJWT = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Token de autenticação ausente' });
    }

    jwt.verify(token.split(' ')[1], jwtSecretKey, (err, decodedToken) => {
        if (err) {
            return res.status(403).json({ message: 'Falha na autenticação do token' });
        }

        req.user = decodedToken.username;
        next();
    });
};



// app.post('/login', (req, res) => {
//     const { username, password } = req.body;

//     // Verificar as credenciais (substitua por sua lógica de autenticação)
//     if (users[username] && users[username] === password) {
//         const token = jwt.sign({ username }, jwtSecretKey, { expiresIn: '2h' });

//         // Configurar o cookie seguro
//         res.setHeader('Set-Cookie', cookie.serialize('token', token, {
//             httpOnly: true,
//             secure: process.env.NODE_ENV !== 'development', // Defina como true em um ambiente de produção
//             maxAge: 3600, // Tempo de vida do cookie em segundos (1 hora neste exemplo)
//             sameSite: 'strict' // Garante que o cookie só será enviado em uma solicitação se a origem estiver no mesmo site
//         }));

//         res.json({ token });
//     } else {
//         res.status(401).json({ message: 'Credenciais inválidas' });
//     }
// });

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Verificar as credenciais (substitua por sua lógica de autenticação)
    if (users[username] && users[username] === password) {
        const token = jwt.sign({ username }, jwtSecretKey, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Credenciais inválidas' });
    }
});



app.get('/', (req, res) => {
    res.send('Seja Bem-Vindo a Api do Wesley!')
})

app.get('/moradores', (req, res) => {
    res.json(moradoresCondominio)
})

app.get('/moradores/:id', authenticateJWT,(req, res) => {
    const id_morador = req.params.id;
    // Converta o id para um número, pois ele pode estar em formato de string
    const morador = moradoresCondominio[parseInt(id_morador)];

    if (morador) {
        res.json(morador);
    } else {
        res.status(404).json({ message: 'Morador não encontrado' });
    }
});

app.post('/moradores', authenticateJWT,(req, res) => {
    const novo_morador_params = req.body;

    // Verificar se todos os campos obrigatórios foram fornecidos
    const camposObrigatorios = ['nome_completo', 'cpf', 'idade', 'sexo', 'responsavel', 'numero_de_moradores', 'cep'];
    const camposFaltando = camposObrigatorios.filter(campo => !(campo in novo_morador_params));

    if (camposFaltando.length > 0) {
        return res.status(400).json({ message: `Campos obrigatórios faltando: ${camposFaltando.join(', ')}` });
    }

    const novo_morador = {
        id: 1 + moradoresCondominio.length,
        nome_completo: novo_morador_params.nome_completo,
        cpf: novo_morador_params.cpf,
        idade: novo_morador_params.idade,
        sexo: novo_morador_params.sexo,
        responsavel: novo_morador_params.responsavel,
        numero_de_moradores: novo_morador_params.numero_de_moradores,
        cep: novo_morador_params.cep,
        bairro: novo_morador_params.bairro || '',  // Campo opcional
        complemento: novo_morador_params.complemento || ''  // Campo opcional
    };

    moradoresCondominio.push(novo_morador);

    res.status(201).json(moradoresCondominio);
});


app.put('/moradores/:id', authenticateJWT,(req, res) => {
    const id_morador = req.params.id;
    const moradorAtualizado = req.body;

    if (
        !moradorAtualizado.nome_completo ||
        !moradorAtualizado.cpf ||
        !moradorAtualizado.idade ||
        !moradorAtualizado.sexo ||
        !moradorAtualizado.responsavel ||
        !moradorAtualizado.numero_de_moradores ||
        !moradorAtualizado.cep ||
        !moradorAtualizado.bairro ||
        !moradorAtualizado.complemento
    ) {
        res.status(400).json({ message: 'Todos os campos são obrigatórios para a atualização do morador.' });
        return;
    }

    const index = moradoresCondominio.findIndex(morador => morador.id === parseInt(id_morador));

    if (index !== -1) {
        moradoresCondominio[index] = {
            ...moradoresCondominio[index],
            ...moradorAtualizado
        };
        res.status(200).json({ message: 'Morador atualizado com sucesso', morador: moradoresCondominio[index] });
    } else {
        res.status(404).json({ message: 'Morador não encontrado' });
    }
});


app.delete('/moradores/:id', authenticateJWT,(req, res) => {
    const id_morador = req.params.id;

    const index = moradoresCondominio.findIndex(morador => morador.id === parseInt(id_morador));

    if (index !== -1) {
        const moradorRemovido = moradoresCondominio.splice(index, 1);
        res.json({ message: 'Morador removido com sucesso', morador: moradorRemovido[0] });
    } else {
        res.status(404).json({ message: 'Morador não encontrado' });
    }
});



app.listen(port, () => {
    console.log(`Servidor Rodando na porta http://localhost:${port}`)
})