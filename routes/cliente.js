const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/cliente');  // Corrigido aqui

router.post('/', clienteController.create);
router.get('/', clienteController.read);
router.put('/:id', clienteController.update);
router.delete('/:id', clienteController.delete);

module.exports = router;
