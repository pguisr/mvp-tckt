import { Home, Wallet, ArrowLeftRight, Bell, ShoppingBag, Newspaper, Settings, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

const menuItems = [
  { icon: Home, label: "Dashboard", path: "/" },
  { icon: Wallet, label: "Wallet", path: "/wallet" },
  { icon: ArrowLeftRight, label: "Trade", path: "/trade" },
  { icon: Bell, label: "Notifications", path: "/notifications", badge: 4 },
  { icon: ShoppingBag, label: "Marketplace", path: "/marketplace" },
];

const bottomMenuItems = [
  { icon: Newspaper, label: "News", path: "/news", badge: 3 },
  { icon: Settings, label: "Settings", path: "/settings" },
  { icon: LogOut, label: "Log Out", path: "/logout" },
];

export const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-sidebar flex flex-col fixed left-0 text-white">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-sidebar-accent rounded-lg flex items-center justify-center">
            <span className="text-sidebar font-bold">X</span>
          </div>
          <span className="text-xl font-bold">X Wallet</span>
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
              <h3 className="font-medium">The new update</h3>
              <p className="text-sm text-white/60">Version 3.2.0</p>
            </div>
            <button className="w-full bg-sidebar text-white py-2 rounded-lg hover:bg-sidebar/80 transition-colors">
              Let's Go →
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