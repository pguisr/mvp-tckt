import { Search, Settings, Bell, ChevronDown, ArrowUpRight, ArrowDownRight, Calendar, Users, DollarSign, Percent, Filter, Share2, Edit, Trash2, BarChart3, Ticket, MessageSquare } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

        <Tabs defaultValue="visao-geral" className="space-y-6">
          <TabsList className="bg-white border">
            <TabsTrigger value="visao-geral" className="flex items-center gap-2">
              <BarChart3 size={16} />
              Visão Geral
            </TabsTrigger>
            <TabsTrigger value="ingressos" className="flex items-center gap-2">
              <Ticket size={16} />
              Ingressos
            </TabsTrigger>
            <TabsTrigger value="participantes" className="flex items-center gap-2">
              <Users size={16} />
              Participantes
            </TabsTrigger>
            <TabsTrigger value="financeiro" className="flex items-center gap-2">
              <DollarSign size={16} />
              Financeiro
            </TabsTrigger>
            <TabsTrigger value="feedback" className="flex items-center gap-2">
              <MessageSquare size={16} />
              Feedback
            </TabsTrigger>
          </TabsList>

          {/* Conteúdo da Visão Geral */}
          <TabsContent value="visao-geral" className="space-y-6">
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
                <Button>Novo Evento</Button>
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
          </TabsContent>

          {/* Conteúdo da aba Ingressos */}
          <TabsContent value="ingressos">
            <Card>
              <CardHeader>
                <CardTitle>Gestão de Ingressos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Lote 1 - Early Bird</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-500">Preço:</span>
                            <span className="font-medium">R$ 100,00</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-500">Vendidos:</span>
                            <span className="font-medium">45/100</span>
                          </div>
                          <Progress value={45} className="h-2" />
                          <Button className="w-full mt-4">Editar Lote</Button>
                        </div>
                      </CardContent>
                    </Card>
                    {/* Adicionar novo lote */}
                    <Card className="border-dashed">
                      <CardContent className="flex items-center justify-center h-full">
                        <Button variant="outline" className="h-24 w-full">
                          <Plus size={24} className="mr-2" /> Adicionar Novo Lote
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Conteúdo da aba Participantes */}
          <TabsContent value="participantes">
            <Card>
              <CardHeader>
                <CardTitle>Lista de Participantes</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Tipo de Ingresso</TableHead>
                      <TableHead>Data da Compra</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>João Silva</TableCell>
                      <TableCell>joao@email.com</TableCell>
                      <TableCell>VIP</TableCell>
                      <TableCell>15/02/2024</TableCell>
                      <TableCell>
                        <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
                          Confirmado
                        </span>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Conteúdo da aba Financeiro */}
          <TabsContent value="financeiro">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Resumo Financeiro</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h3 className="text-sm font-medium text-green-800">Receita Total</h3>
                      <p className="text-2xl font-bold text-green-900">R$ 47.500,00</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h3 className="text-sm font-medium text-blue-800">Taxas</h3>
                      <p className="text-2xl font-bold text-blue-900">R$ 2.375,00</p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h3 className="text-sm font-medium text-purple-800">Lucro Líquido</h3>
                      <p className="text-2xl font-bold text-purple-900">R$ 45.125,00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Conteúdo da aba Feedback */}
          <TabsContent value="feedback">
            <Card>
              <CardHeader>
                <CardTitle>Avaliações e Comentários</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                        MS
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">Maria Santos</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Evento muito bem organizado! A estrutura estava excelente e a programação foi cumprida conforme o planejado.
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-sm text-gray-500">15/02/2024</span>
                          <span className="text-sm text-gray-500">•</span>
                          <div className="flex items-center text-yellow-400">
                            ★★★★★
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;