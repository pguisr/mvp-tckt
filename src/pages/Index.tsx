import { Search, Settings, Bell, ChevronDown, Plus, Filter } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricCards } from "@/components/dashboard/MetricCards";
import { EventsTable } from "@/components/dashboard/EventsTable";

// Dados simulados
const eventosAtivos = [
  {
    id: 1,
    nome: "Festival de Verão 2024",
    status: "Ativo",
    ingressosVendidos: 450,
    totalIngressos: 1000,
    valorArrecadado: 45000,
    dataInicio: "2024-01-20",
    dataFim: "2024-01-22",
    tendencia: "up" as const,
    checkoutUrl: "https://checkout.exemplo.com/festival-verao-2024"
  },
  {
    id: 2,
    nome: "Workshop de Fotografia",
    status: "Pendente",
    ingressosVendidos: 25,
    totalIngressos: 50,
    valorArrecadado: 2500,
    dataInicio: "2024-02-15",
    dataFim: "2024-02-15",
    tendencia: "down" as const,
    checkoutUrl: "https://checkout.exemplo.com/workshop-foto"
  },
];

const metricas = {
  totalEvents: 12,
  totalParticipants: 1234,
  totalRevenue: 47500,
  conversionRate: 15,
  nextPayment: {
    amount: 42500,
    date: "15/02/2024"
  }
};

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="ml-64 p-8">
        {/* Cabeçalho */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Buscar eventos..."
                className="pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sidebar-accent w-[300px]"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2 rounded-xl">
              <Filter size={16} />
              Filtros
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-xl hover:bg-gray-100">
              <Settings size={20} className="text-gray-600" />
            </button>
            <button className="p-2 rounded-xl hover:bg-gray-100 relative">
              <Bell size={20} className="text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-100 cursor-pointer">
              <div className="w-8 h-8 bg-sidebar-accent rounded-xl flex items-center justify-center text-black font-medium">
                JP
              </div>
              <ChevronDown size={16} className="text-gray-600" />
            </div>
          </div>
        </div>

        {/* Cards de Métricas */}
        <MetricCards {...metricas} />

        {/* Lista de Eventos */}
        <Card className="rounded-xl overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Eventos Ativos</CardTitle>
            <Button className="rounded-xl">
              <Plus className="mr-2 h-4 w-4" />
              Novo Evento
            </Button>
          </CardHeader>
          <CardContent>
            <EventsTable events={eventosAtivos} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;