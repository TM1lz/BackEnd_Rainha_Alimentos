const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema(
  {
    razaoSocial: {
      type: String,
      required: false,
    },
    cpfCnpj: {
      type: String,
      required: false,
    },
    nome: {
      type: String,
      required: false,
    },
    cidade: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
      lowercase: true,
      match: [/.+\@.+\..+/, "Por favor, insira um email válido"],
    },
    telefone: {
      type: String,
      required: false,
    },
    mensagem: {
      type: String,
      required: false,
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
