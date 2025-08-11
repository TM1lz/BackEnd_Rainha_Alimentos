const Client = require("../models/cliente"); // Importa o modelo do cliente

const clienteController = {
  // Cria o cliente
  create: async (req, res) => {
    try {
      const { razaoSocial, cpfCnpj, nome, cidade, email, telefone, mensagem } = req.body;
      if (!razaoSocial || !cpfCnpj || !cidade ) {
        razaoSocial = "<RAZAO_SOCIAL>";
        cpfCnpj = "<CPF_CNPJ>";
        cidade = "<CIDADE>";
       const newClient = new Client({
        razaoSocial,
        cpfCnpj,
        nome,
        cidade,
        email,
        telefone,
        mensagem,
        });
        await newClient.save();
      }else{
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
    }
      res.status(201).json({ message: 'Cliente criado com sucesso', client: newClient });
    } catch (error) {
      console.error("Erro ao criar cliente:", error);
      res.status(500).json({ message: 'Erro ao criar cliente', error: error.message || error });
    }
  },

  // Lê os dados de todos os clientes ou de um cliente específico
  read: async (req, res) => {
    try {
      const { id } = req.params;
      
      if (id) {
        const client = await Client.findById(id);
        if (!client) {
          return res.status(404).json({ error: "Cliente não encontrado" });
        }
        return res.json(client);
      }

      const clients = await Client.find();
      res.json(clients);
    } catch (error) {
      console.error("Erro ao ler dados do cliente:", error);
      res.status(500).json({ error: "Erro ao ler dados do cliente" });
    }
  },

  // Atualiza os dados do cliente
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const updatedClient = await Client.findByIdAndUpdate(id, req.body, { new: true });
      
      if (!updatedClient) {
        return res.status(404).json({ error: "Cliente não encontrado" });
      }
      
      res.json({ message: "Cliente atualizado com sucesso", client: updatedClient });
    } catch (error) {
      console.error("Erro ao atualizar cliente:", error);
      res.status(500).json({ error: "Erro ao atualizar cliente" });
    }
  },

  // Deleta o cliente
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedClient = await Client.findByIdAndDelete(id);
      
      if (!deletedClient) {
        return res.status(404).json({ error: "Cliente não encontrado" });
      }
      
      res.json({ message: "Cliente deletado com sucesso" });
    } catch (error) {
      console.error("Erro ao deletar cliente:", error);
      res.status(500).json({ error: "Erro ao deletar cliente" });
    }
  }
};

module.exports = clienteController;
