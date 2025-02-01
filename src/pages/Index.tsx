import { Search, Settings, Bell, ChevronDown, ArrowUpRight, ArrowDownRight, Calendar, Users, DollarSign, Percent, Filter, Share2, Edit, Trash2, Plus } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
    tendencia: "up",
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
    tendencia: "down",
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
                className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sidebar-accent w-[300px]"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter size={16} />
              Filtros
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-lg hover:bg-gray-100">
              <Settings size={20} className="text-gray-600" />
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-100 relative">
              <Bell size={20} className="text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
              <div className="w-8 h-8 bg-sidebar-accent rounded-full flex items-center justify-center text-black font-medium">
                JP
              </div>
              <ChevronDown size={16} className="text-gray-600" />
            </div>
          </div>
        </div>

        {/* Cards de Métricas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
              <div className="text-2xl font-bold">1.234</div>
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

        {/* Lista de Eventos */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Eventos Ativos</CardTitle>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Novo Evento
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome do Evento</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Progresso</TableHead>
                  <TableHead>Valor Arrecadado</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {eventosAtivos.map((evento) => (
                  <TableRow key={evento.id}>
                    <TableCell className="font-medium">{evento.nome}</TableCell>
                    <TableCell>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        evento.status === 'Ativo' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {evento.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>{evento.ingressosVendidos} vendidos</span>
                          <span>{Math.round((evento.ingressosVendidos / evento.totalIngressos) * 100)}%</span>
                        </div>
                        <Progress value={(evento.ingressosVendidos / evento.totalIngressos) * 100} className="h-2" />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span>R$ {evento.valorArrecadado.toLocaleString('pt-BR')}</span>
                        {evento.tendencia === 'up' ? (
                          <ArrowUpRight className="text-green-500" size={16} />
                        ) : (
                          <ArrowDownRight className="text-red-500" size={16} />
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm text-gray-500">
                        {new Date(evento.dataInicio).toLocaleDateString('pt-BR')} - {new Date(evento.dataFim).toLocaleDateString('pt-BR')}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon">
                          <Share2 size={16} />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Edit size={16} />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;