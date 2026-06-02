// "use client";

// import { useEffect, useState } from "react";
// import { api } from "@/services/api";

// export default function ClientesTable() {
//   const [clientes, setClientes] = useState([]);

//   useEffect(() => {
//     buscarClientes();
//   }, []);

//   async function buscarClientes() {
//     const response = await api.get("/clientes");

//     setClientes(response.data);
//   }

//   return (
//     <div className="bg-white p-6 rounded-2xl shadow-xl">
//       <h2 className="text-2xl font-bold mb-6">
//         Clientes
//       </h2>

//       <table className="w-full">
//         <thead>
//           <tr className="border-b">
//             <th className="text-left p-2">Nome</th>
//             <th className="text-left p-2">Email</th>
//             <th className="text-left p-2">Telefone</th>
//           </tr>
//         </thead>

//         <tbody>
//           {clientes.map((cliente) => (
//             <tr
//               key={cliente.idCliente}
//               className="border-b hover:bg-gray-100"
//             >
//               <td className="p-2">{cliente.nome}</td>
//               <td className="p-2">{cliente.email}</td>
//               <td className="p-2">{cliente.telefone}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }




"use client";

import { useEffect, useState } from "react";
import { api } from "@/services/api";

export default function ClientesTable() {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    buscarClientes();
  }, []);

  async function buscarClientes() {
    try {
      setLoading(true);
      setErro(null);
      const response = await api.get("/clientes");
      setClientes(response.data);
    } catch (error) {
      setErro("Erro ao carregar clientes. A API pode estar inicializando, tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  if (loading) return (
    <div className="bg-white p-6 rounded-2xl shadow-xl text-center text-gray-500">
      Carregando clientes...
    </div>
  );

  if (erro) return (
    <div className="bg-white p-6 rounded-2xl shadow-xl">
      <p className="text-red-500 mb-4">{erro}</p>
      <button
        onClick={buscarClientes}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Tentar novamente
      </button>
    </div>
  );

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold mb-6">Clientes</h2>
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
            <tr key={cliente.idCliente} className="border-b hover:bg-gray-100">
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