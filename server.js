const express = require("express");
const cors = require("cors");

const clienteRoutes = require("./src/routes/cliente.routes");
const petRoutes = require("./src/routes/pet.routes");
const servicoRoutes = require("./src/routes/servico.routes");
const atendimentoRoutes = require("./src/routes/atendimento.routes");

const app = express();
app.use(cors());
app.use(express.json());

// Rotas
app.use("/cliente", clienteRoutes);
app.use("/pet", petRoutes);
app.use("/servico", servicoRoutes);
app.use("/atendimento", atendimentoRoutes);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});