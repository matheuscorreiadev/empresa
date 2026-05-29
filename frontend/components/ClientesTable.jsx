"use client";

import { useEffect, useState } from "react";
import { api } from "@/services/api";

export default function ClientesTable() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    buscarClientes();
  }, []);

  async function buscarClientes() {
    const response = await api.get("/clientes");

    setClientes(response.data);
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold mb-6">
        Clientes
      </h2>

      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left p-2">Nome</th>
            <th className="text-left p-2">Email</th>
            <th className="text-left p-2">Telefone</th>
          </tr>
        </thead>

        <tbody>
          {clientes.map((cliente) => (
            <tr
              key={cliente.idCliente}
              className="border-b hover:bg-gray-100"
            >
              <td className="p-2">{cliente.nome}</td>
              <td className="p-2">{cliente.email}</td>
              <td className="p-2">{cliente.telefone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}