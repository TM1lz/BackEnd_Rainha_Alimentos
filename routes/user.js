const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const { tokenValid } = require('../middleware/authMiddleware');

// Rota para verificar a validade do token
router.get('/validartoken', tokenValid, (req, res) => {
    res.json({
        message: 'Token verificado com sucesso',
        token: res.locals.token, // Retorna o token na resposta
      });
});

// Rota de login
router.post('/login', userController.login);

module.exports = router;
