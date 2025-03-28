const jwt = require('jsonwebtoken');

// Middleware para autenticação de token
const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization') && req.header('Authorization').split(' ')[1]; // Token enviado no header
  if (!token) {
    return res.status(401).json({ error: 'Acesso não autorizado, token necessário' });
  }

  // Verifica se o token é válido
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Token inválido' });
    }
    req.user = user; // Anexa o usuário à requisição para acessos posteriores
    next();
  });
};

// Middleware para garantir que apenas administradores podem acessar as rotas
const tokenValid = (req, res, next) => {
  const token = req.header('Authorization') && req.header('Authorization').split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Acesso não autorizado, token necessário' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Token inválido' });
    }
    req.user = user; // Anexa o usuário à requisição para acessos posteriores
    res.locals.token = token; // Armazena o token para acesso posterior
    next();
  });
};
const authorizeAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Acesso restrito, apenas administradores' });
  }
  next();
};

module.exports = { authenticateToken, authorizeAdmin, tokenValid };
