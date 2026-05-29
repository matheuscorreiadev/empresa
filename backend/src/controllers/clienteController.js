const prisma = require("../config/prisma");

exports.listarClientes = async (req, res) => {
  try {
    const clientes = await prisma.cliente.findMany();

    res.json(clientes);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.criarCliente = async (req, res) => {
  try {
    const cliente = await prisma.cliente.create({
      data: req.body,
    });

    res.json(cliente);
  } catch (error) {
    res.status(500).json(error);
  }
};