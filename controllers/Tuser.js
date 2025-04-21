const Tuser = require('../models/Tuser');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'segredo_forte_123'; // Ideal usar variável de ambiente

const TuserController = {
  create: async (req, res) => {
    const { username, email, password, confirmPassword } = req.body;

    if (!username || !email || !password || !confirmPassword) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'As senhas não coincidem.' });
    }

    try {
      const existingUser = await Tuser.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: 'E-mail já está em uso.' });
      }

      const newUser = new Tuser({ username, email, password });
      await newUser.save();

      const token = jwt.sign(
        { id: newUser._id, email: newUser.email, role: newUser.role },
        JWT_SECRET,
        { expiresIn: '7d' }
      );

      res.status(201).json({
        message: 'Usuário criado com sucesso!',
        user: {
          id: newUser._id,
          username: newUser.username,
          email: newUser.email,
          role: newUser.role
        },
        token,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao criar usuário.' });
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email e senha são obrigatórios.' });
    }

    try {
      const user = await Tuser.findOne({ email });
      if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado.' });
      }

      const isMatch = await user.matchPassword(password);
      if (!isMatch) {
        return res.status(401).json({ error: 'Senha incorreta.' });
      }

      const token = jwt.sign(
        { id: user._id, email: user.email, role: user.role },
        JWT_SECRET,
        { expiresIn: '7d' }
      );

      res.status(200).json({
        message: 'Login bem-sucedido!',
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          role: user.role
        },
        token,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao fazer login.' });
    }
  }
};

module.exports = TuserController;
