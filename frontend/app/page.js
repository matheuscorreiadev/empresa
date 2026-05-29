import ClientesTable from "@/components/ClientesTable";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">
          Dashboard Empresa
        </h1>

        <ClientesTable />

      </div>
    </main>
  );
}