const User = require('../models/User');
const jwt = require('jsonwebtoken');

const userController = {


  // Buscar todos usuários
  getAll: async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
  },

  // Criar usuário
  create: async (req, res) => {
    try {
      const {  email, password } = req.body;

      // Verificar se o email já existe
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: 'Email já cadastrado' });
      }

      // Criação do usuário (sem hash manual, mongoose faz!)
      const newUser = new User({
        email,
        password,
      });

      await newUser.save();
      res.status(201).json({ message: 'Usuário criado com sucesso', user: newUser });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Login
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: 'Usuário não encontrado' });
      }

      // Verificar senha usando método do Schema
      const isMatch = await user.matchPassword(password);
      if (!isMatch) {
        return res.status(400).json({ error: 'Senha inválida' });
      }

      // Token
      const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET || 'seu-segredo',
        { expiresIn: '1h' }
      );

      res.status(200).json({ message: 'Login bem-sucedido', token });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao fazer login' });
    }
  }
};

module.exports = userController;
