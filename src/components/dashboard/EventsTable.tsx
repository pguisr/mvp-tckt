import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Share2, Edit, Trash2, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";

interface Event {
  id: number;
  nome: string;
  status: string;
  ingressosVendidos: number;
  totalIngressos: number;
  valorArrecadado: number;
  dataInicio: string;
  dataFim: string;
  tendencia: "up" | "down";
  checkoutUrl: string;
}

export const EventsTable = ({ events }: { events: Event[] }) => {
  const copyCheckoutLink = (url: string) => {
    navigator.clipboard.writeText(url);
    toast.success("Link de checkout copiado!");
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nome do Evento</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Progresso</TableHead>
          <TableHead>Valor Arrecadado</TableHead>
          <TableHead>Data</TableHead>
          <TableHead>Link de Checkout</TableHead>
          <TableHead>Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {events.map((evento) => (
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
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyCheckoutLink(evento.checkoutUrl)}
                className="flex items-center gap-2"
              >
                <Share2 size={14} />
                Copiar Link
              </Button>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
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
  );
};