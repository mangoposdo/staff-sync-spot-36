import { Link, useLocation } from "react-router-dom";
import { Home, Search, PlusCircle, MessageCircle, User } from "lucide-react";

const tabs = [
  { icon: Home, label: "Inicio", path: "/" },
  { icon: Search, label: "Eventos", path: "/eventos" },
  { icon: PlusCircle, label: "Crear", path: "/crear-evento" },
  { icon: MessageCircle, label: "Chat", path: "/chat" },
  { icon: User, label: "Perfil", path: "/perfil" },
];

const BottomNav = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-border safe-area-bottom">
      <div className="flex items-center justify-around h-16 px-2">
        {tabs.map((tab) => {
          const active = location.pathname === tab.path;
          return (
            <Link
              key={tab.path}
              to={tab.path}
              className={`flex flex-col items-center gap-0.5 min-w-[56px] py-1 transition-colors ${
                active ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {tab.icon === PlusCircle ? (
                <div className={`w-10 h-10 rounded-full flex items-center justify-center -mt-4 ${
                  active ? "bg-primary text-primary-foreground neon-glow" : "bg-card text-muted-foreground border border-border"
                }`}>
                  <tab.icon size={20} />
                </div>
              ) : (
                <tab.icon size={20} />
              )}
              <span className="text-[10px] font-medium">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
