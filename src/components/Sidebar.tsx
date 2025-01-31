import { Home, Calendar, TrendingUp, Tag, Wallet, Bell, Settings, HelpCircle, MessageSquare, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

const menuItems = [
  { icon: Home, label: "Visão Geral", path: "/" },
  { icon: Calendar, label: "Eventos", path: "/eventos" },
  { icon: TrendingUp, label: "Análises", path: "/analises" },
  { icon: Tag, label: "Promoções", path: "/promocoes" },
  { icon: Wallet, label: "Pagamentos", path: "/pagamentos" },
  { icon: Bell, label: "Notificações", path: "/notificacoes", badge: 4 },
];

const bottomMenuItems = [
  { icon: Settings, label: "Configurações", path: "/configuracoes" },
  { icon: HelpCircle, label: "Ajuda", path: "/ajuda" },
  { icon: MessageSquare, label: "Suporte", path: "/suporte", badge: 1 },
  { icon: LogOut, label: "Sair", path: "/logout" },
];

export const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-sidebar flex flex-col fixed left-0 text-white">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-sidebar-accent rounded-lg flex items-center justify-center">
            <span className="text-sidebar font-bold">E</span>
          </div>
          <span className="text-xl font-bold">EventPro</span>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              <item.icon size={20} />
              <span>{item.label}</span>
              {item.badge && (
                <span className="ml-auto bg-sidebar-accent text-sidebar w-6 h-6 rounded-full flex items-center justify-center text-sm">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>

        <div className="mt-8 p-6 bg-sidebar-accent/10 rounded-xl">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-sidebar-accent rounded-full mx-auto" />
            <div className="text-center">
              <h3 className="font-medium">Precisa de ajuda?</h3>
              <p className="text-sm text-white/60">Nossa equipe está aqui para você</p>
            </div>
            <button className="w-full bg-sidebar-accent text-sidebar py-2 rounded-lg hover:bg-sidebar-accent/80 transition-colors">
              Falar com Suporte
            </button>
          </div>
        </div>
      </div>

      <div className="mt-auto p-6">
        <nav className="space-y-2">
          {bottomMenuItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              <item.icon size={20} />
              <span>{item.label}</span>
              {item.badge && (
                <span className="ml-auto bg-sidebar-accent text-sidebar w-6 h-6 rounded-full flex items-center justify-center text-sm">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};