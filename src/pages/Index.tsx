import { Search, Settings, Bell, ChevronDown, ArrowUpRight, ArrowDownRight, Calendar, Users, DollarSign, Percent } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
  },
];

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
                className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sidebar-accent"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-lg hover:bg-gray-100">
              <Settings size={20} className="text-gray-600" />
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-100 relative">
              <Bell size={20} className="text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          </div>
        </div>

        {/* Cards de Métricas */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Eventos</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+2 este mês</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Participantes</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-muted-foreground">+10% desde ontem</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Receita Total</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ 47.500</div>
              <p className="text-xs text-muted-foreground">+20% este mês</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Taxa de Conversão</CardTitle>
              <Percent className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15%</div>
              <p className="text-xs text-muted-foreground">+2% desde ontem</p>
            </CardContent>
          </Card>
        </div>

        {/* Lista de Eventos Ativos */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
          <h2 className="text-xl font-semibold mb-4">Eventos Ativos</h2>
          <div className="space-y-4">
            {eventosAtivos.map((evento) => (
              <div key={evento.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-medium text-lg">{evento.nome}</h3>
                    <p className="text-sm text-gray-500">
                      {new Date(evento.dataInicio).toLocaleDateString('pt-BR')} - {new Date(evento.dataFim).toLocaleDateString('pt-BR')}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    evento.status === 'Ativo' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {evento.status}
                  </span>
                </div>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progresso das Vendas</span>
                      <span>{Math.round((evento.ingressosVendidos / evento.totalIngressos) * 100)}%</span>
                    </div>
                    <Progress value={(evento.ingressosVendidos / evento.totalIngressos) * 100} className="h-2" />
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{evento.ingressosVendidos} ingressos vendidos</span>
                    <span>R$ {evento.valorArrecadado.toLocaleString('pt-BR')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;