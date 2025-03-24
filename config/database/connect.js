const mongoose = require('mongoose');

const connect = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGOODB_USER}:${process.env.MONGOODB_PASS}@cluster0.r3gez.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
        console.log("✅ Conectado ao banco de dados!");
    } catch (error) {
        console.error("❌ Erro ao conectar ao banco de dados:", error);
        process.exit(1); // Encerra o processo se a conexão falhar
    }
};

module.exports = connect;