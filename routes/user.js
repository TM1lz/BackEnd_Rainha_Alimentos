const express = require('express');
const router = express.Router();
const userController = require('../controllers/user'); // Importando o controller de usuários

// Criar usuário
router.get('/', userController.getAll);
router.post('/create', userController.create);
router.post('/login', userController.login);
module.exports = router;