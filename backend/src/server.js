// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();

// const clienteRoutes = require("./routes/clienteRoutes");

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use("/clientes", clienteRoutes);

// app.listen(process.env.PORT, () => {
//   console.log("Servidor rodando!");
// });

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const clienteRoutes = require("./routes/clienteRoutes");

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());

// Rota de teste
app.get("/", (req, res) => {
  res.json({
    status: "online",
    message: "API Empresa funcionando 🚀",
  });
});

// Rotas dos clientes
app.use("/clientes", clienteRoutes);

// Tratamento de erro global
app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    error: true,
    message: err.message,
  });
});

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});