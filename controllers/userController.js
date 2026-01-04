const db = require('../models/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'seusegredoaqui'; // use environment variables in real projects

// CREATE - cadastro de usuário
exports.cadastrarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;
    if (!nome || !email || !senha) return res.status(400).json({ erro: 'Todos os campos são obrigatórios!' });

    const hashSenha = await bcrypt.hash(senha, 10);

    db.query('INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)', [nome, email, hashSenha], (err, result) => {
        if (err) return res.status(500).json({ erro: err.message });
        res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso!', id: result.insertId });
    });
};

// READ - List all users
exports.listarUsuarios = (req, res) => {
    db.query('SELECT id, nome, email FROM users', (err, results) => {
        if (err) return res.status(500).json({ erro: err.message });
        res.json(results);
    });
};

// READ - Search for user by ID
exports.buscarUsuarioPorId = (req, res) => {
    const { id } = req.params;
    db.query('SELECT id, nome, email FROM users WHERE id = ?', [id], (err, result) => {
        if (err) return res.status(500).json({ erro: err.message });
        if (result.length === 0) return res.status(404).json({ erro: 'Usuário não encontrado!' });
        res.json(result[0]);
    });
};

// UPDATE - Update user
exports.atualizarUsuario = (req, res) => {
    const { id } = req.params;
    const { nome, email } = req.body;
    db.query('UPDATE users SET nome = ?, email = ? WHERE id = ?', [nome, email, id], (err, result) => {
        if (err) return res.status(500).json({ erro: err.message });
        res.json({ mensagem: 'Usuário atualizado com sucesso!' });
    });
};

// DELETE - Remove user
exports.removerUsuario = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM users WHERE id = ?', [id], (err, result) => {
        if (err) return res.status(500).json({ erro: err.message });
        res.json({ mensagem: 'Usuário removido com sucesso!' });
    });
};

// LOGIN - Simple authentication
exports.login = (req, res) => {
    const { email, senha } = req.body;
    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
        if (err) return res.status(500).json({ erro: err.message });
        if (results.length === 0) return res.status(404).json({ erro: 'Usuário não encontrado!' });

        const usuario = results[0];
        const senhaValida = await bcrypt.compare(senha, usuario.senha);
        if (!senhaValida) return res.status(401).json({ erro: 'Senha incorreta!' });

        const token = jwt.sign({ id: usuario.id, nome: usuario.nome }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ mensagem: 'Login realizado com sucesso!', token });
    });
};
