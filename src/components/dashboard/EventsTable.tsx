import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Share2, Edit, Trash2, ArrowUpRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";

type EventStatus = 'Ativo' | 'Rascunho' | 'Encerrado';

interface Event {
  id: number;
  nome: string;
  status: EventStatus;
  ingressosVendidos: number;
  totalIngressos: number;
  valorArrecadado: number;
  dataInicio: string;
  dataFim: string;
  tendencia: "up" | "down";
  checkoutUrl: string;
}

const getStatusColor = (status: EventStatus) => {
  switch (status) {
    case 'Ativo':
      return 'bg-green-100 text-green-800';
    case 'Rascunho':
      return 'bg-yellow-100 text-yellow-800';
    case 'Encerrado':
      return 'bg-gray-100 text-gray-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const EventsTable = ({ events }: { events: Event[] }) => {
  const copyCheckoutLink = (url: string) => {
    navigator.clipboard.writeText(url);
    toast.success("Link de checkout copiado!");
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { 
      day: '2-digit',
      month: '2-digit'
    });
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Progresso</TableHead>
          <TableHead>Valor Arrecadado</TableHead>
          <TableHead>Data</TableHead>
          <TableHead>Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {events.map((evento) => (
          <TableRow key={evento.id}>
            <TableCell className="font-medium">{evento.nome}</TableCell>
            <TableCell>
              <span className={`px-3 py-1 rounded-xl text-sm ${getStatusColor(evento.status)}`}>
                {evento.status}
              </span>
            </TableCell>
            <TableCell>
              <div className="space-y-2">
                <Progress 
                  value={(evento.ingressosVendidos / evento.totalIngressos) * 100} 
                  className="h-2 rounded-xl bg-gray-100"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{evento.ingressosVendidos} de {evento.totalIngressos} ingressos</span>
                  <span className="font-medium">
                    {Math.round((evento.ingressosVendidos / evento.totalIngressos) * 100)}%
                  </span>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex flex-col gap-1">
                <div className="text-lg font-semibold">
                  R$ {evento.valorArrecadado.toLocaleString('pt-BR')}
                </div>
                {evento.tendencia === 'up' && (
                  <div className="flex items-center gap-1 text-sm text-crypto-green">
                    <ArrowUpRight size={16} />
                    <span>Em alta</span>
                  </div>
                )}
              </div>
            </TableCell>
            <TableCell>
              <div className="text-sm text-gray-500">
                {formatDate(evento.dataInicio)} - {formatDate(evento.dataFim)}
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="rounded-xl" onClick={() => copyCheckoutLink(evento.checkoutUrl)}>
                  <Share2 size={16} />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-xl">
                  <Edit size={16} />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-xl">
                  <Trash2 size={16} />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};