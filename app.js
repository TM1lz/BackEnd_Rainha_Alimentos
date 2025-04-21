require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const connect = require('./config/database/connect');

// Rotas complexas com controllers
const clienteRouter = require('./routes/cliente');
const userRouter = require('./routes/user');
const TuserRouter = require('./routes/Tuser');

// Middlewares
app.use(cors());
app.use(cors({ allowedHeaders: ['Authorization', 'Content-Type'] }));

app.use(express.json());
connect();

// Rota simples
app.get('/', (req, res) => {
  res.send('Servidor funcionando! 🚀');
});

// Rotas complexas
app.use('/Tuser', TuserRouter);
app.use('/user', userRouter);
app.use('/cliente', clienteRouter);

// Porta configurável
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
