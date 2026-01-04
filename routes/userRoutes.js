const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.cadastrarUsuario);
router.post('/login', userController.login);
router.get('/', userController.listarUsuarios);
router.get('/:id', userController.buscarUsuarioPorId);
router.put('/:id', userController.atualizarUsuario);
router.delete('/:id', userController.removerUsuario);

module.exports = router;
