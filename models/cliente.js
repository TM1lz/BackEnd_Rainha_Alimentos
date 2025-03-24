const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  razaoSocial: {
    type: String,
    required: true,
    trim: true,
  },
  cpfCnpj: {
    type: String,
    required: true,
    trim: true,
  },
  nome: {
    type: String,
    required: true,
    trim: true,
  },
  cidade: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: [/.+\@.+\..+/, 'Por favor, insira um email válido'],
  },
  telefone: {
    type: String,
    required: true,
    trim: true,
  },
  mensagem: {
    type: String,
    required: true,
    trim: true,
  },
}, {
  timestamps: true // Cria campos createdAt e updatedAt automaticamente
});

// Criando o modelo a partir do schema
const Client = mongoose.model('Client', clientSchema);

// Exportando o modelo
module.exports = Client;
