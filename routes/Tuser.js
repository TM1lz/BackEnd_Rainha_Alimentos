const express = require('express');
const router = express.Router();
const  TuserController = require('../controllers/Tuser');
const { authenticateToken, authorizeAdmin } = require('../middleware/authMiddleware');

// Rota protegida para criar cliente
router.post('/register',TuserController.create);
router.post('/login',TuserController.login);



module.exports = router;