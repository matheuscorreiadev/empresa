const express = require("express");
const cors = require("cors");
require("dotenv").config();

const clienteRoutes = require("./routes/clienteRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/clientes", clienteRoutes);

app.listen(process.env.PORT, () => {
  console.log("Servidor rodando!");
});