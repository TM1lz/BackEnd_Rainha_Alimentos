const express = require('express');
const router = express.Router();
const  clienteController = require('../controllers/cliente');
const { authenticateToken, authorizeAdmin } = require('../middleware/authMiddleware');

// Rota protegida para criar cliente
router.post('/', clienteController.create);

// Rota protegida para ler os dados do cliente - Somente administrador
router.get('/', authenticateToken, authorizeAdmin, clienteController.read);

// Rota protegida para atualizar dados do cliente - Somente administrador
router.put('/:id', authenticateToken, authorizeAdmin, clienteController.update);

// Rota protegida para deletar cliente - Somente administrador
router.delete('/:id', authenticateToken, authorizeAdmin, clienteController.delete);

module.exports = router;
