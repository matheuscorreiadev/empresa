// const express = require("express");
// const router = express.Router();

// const {
//   listarClientes,
//   criarCliente,
// } = require("../controllers/clienteController");

// router.get("/", listarClientes);
// router.post("/", criarCliente);

// module.exports = router;



const express = require("express");
const router = express.Router();

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// Listar clientes
router.get("/", async (req, res) => {
  try {
    const clientes = await prisma.cliente.findMany();

    res.status(200).json(clientes);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: error.message,
    });
  }
});

// Buscar cliente por ID
router.get("/:id", async (req, res) => {
  try {
    const cliente = await prisma.cliente.findUnique({
      where: {
        idCliente: Number(req.params.id),
      },
    });

    if (!cliente) {
      return res.status(404).json({
        message: "Cliente não encontrado",
      });
    }

    res.json(cliente);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

// Criar cliente
router.post("/", async (req, res) => {
  try {
    const cliente = await prisma.cliente.create({
      data: {
        ...req.body,
        dataCadastro: new Date(),
      },
    });

    res.status(201).json(cliente);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = router;