const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Rota inicial
app.get("/", (req, res) => {
  res.send("Servidor do portfólio está rodando!");
});

// Rota de contato
app.post("/contact", (req, res) => {
  const { nome, email, mensagem } = req.body;
  if (!nome || !email || !mensagem) {
    return res.status(400).json({ error: "Preencha todos os campos." });
  }
  console.log("Mensagem recebida:", { nome, email, mensagem });
  res.status(200).json({ success: "Mensagem recebida com sucesso!" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
