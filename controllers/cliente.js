const Client = require("../models/cliente"); // Importa o modelo do cliente

const clienteController = {
  // Cria o cliente
  create: async (req, res) => {
    try {
      const { razaoSocial, cpfCnpj, nome, cidade, email, telefone, mensagem } = req.body;

      // Cria um novo cliente
      const newClient = new Client({
        razaoSocial,
        cpfCnpj,
        nome,
        cidade,
        email,
        telefone,
        mensagem,
      });

      await newClient.save(); // Salva o cliente no banco de dados

      res.status(201).json({ message: 'Cliente criado com sucesso', client: newClient });
    } catch (error) {
      console.error("Erro ao criar cliente:", error);
      res.status(500).json({ message: 'Erro ao criar cliente', error: error.message || error });
    }
  },
  // Lê os dados do cliente
  read: async (req, res) => {
    try {
      // Sua lógica para ler os dados do cliente
    } catch (error) {
      res.status(500).json({ error: "Erro ao ler dados do cliente" });
    }
  },

  // Atualiza os dados do cliente
  update: async (req, res) => {
    try {
      // Sua lógica para atualizar os dados do cliente
    } catch (error) {
      res.status(500).json({ error: "Erro ao atualizar cliente" });
    }
  },

  // Deleta o cliente
  delete: async (req, res) => {
    try {
      // Sua lógica para deletar o cliente
    } catch (error) {
      res.status(500).json({ error: "Erro ao deletar cliente" });
    }
  }
};

module.exports = clienteController; // Certifique-se de exportar corretamente
