const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema(
  {
    razaoSocial: {
      type: String,
      required: true,
    },
    cpfCnpj: {
      type: String,
      required: true,
    },
    nome: {
      type: String,
      required: true,
    },
    cidade: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      match: [/.+\@.+\..+/, "Por favor, insira um email válido"],
    },
    telefone: {
      type: String,
      required: true,
    },
    mensagem: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Cria campos createdAt e updatedAt automaticamente
  }
);

// Criando o modelo a partir do schema
const Client = mongoose.model("Client", clientSchema);

// Exportando o modelo
module.exports = Client;
