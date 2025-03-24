const Client = require('../models/cliente');

const clienteController = {

  // Cria o formulário que foi mandado pelo cliente
  create: async (req, res) => {
    try {
      const { razaoSocial, cpfCnpj, nome, cidade, email, telefone, mensagem } = req.body;

      // Cria um novo cliente
      const newClient = await Client({
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
      console.error("Erro ao criar cliente:", error); // Log do erro
      res.status(500).json({ error: error.message || 'Erro ao criar cliente' }); // Passa a mensagem de erro para o cliente
    }
  },

  // Lê o formulário enviado pelo cliente, mas apenas administradores terão acesso
  read: async (req, res) => {
    try {
      // Sua lógica para ler os dados do cliente
    } catch (error) {
      res.status(500).json({ error: "Erro ao ler dados do cliente" });
    }
  },

  // Atualiza o formulário enviado pelo cliente, mas apenas administradores terão acesso
  update: async (req, res) => {
    try {
      // Sua lógica para atualizar os dados do cliente
    } catch (error) {
      res.status(500).json({ error: "Erro ao atualizar cliente" });
    }
  },

  // Deleta o formulário enviado pelo cliente, mas apenas administradores terão acesso
  delete: async (req, res) => {
    try {
      // Sua lógica para deletar o cliente
    } catch (error) {
      res.status(500).json({ error: "Erro ao deletar cliente" });
    }
  }
};

// Correção aqui: use module.exports para exportar o controller
module.exports = clienteController;
