require('dotenv').config(); // Carrega variáveis do .env
const cors = require('cors');
const express = require('express');
const app = express();
const connect = require('./config/database/connect');
// Rotas complexas com controllers Imports
const clienteRouter = require('./routes/cliente');
// Middlewares
app.use(cors());
app.use(express.json());
connect();
// Rota simples
app.get('/', (req, res) => {
  res.send('Servidor funcionando! 🚀');
});
// Rotas complexas com controllers
app.use('/cliente', clienteRouter);
// Porta configurável via .env ou default 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});