import MobileLayout from "@/components/MobileLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Plus, Calendar, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

const mockEvents = [
  {
    id: 1,
    title: "Boda García-López",
    date: "15 Mar 2026",
    location: "Salón Imperial, CDMX",
    roles: [{ type: "Meseros", qty: 4 }, { type: "Bartenders", qty: 2 }],
    status: "Open",
    applications: 8,
  },
  {
    id: 2,
    title: "Corporativo Fintech",
    date: "22 Mar 2026",
    location: "Centro de Convenciones",
    roles: [{ type: "Host/Hostess", qty: 3 }, { type: "Seguridad", qty: 2 }],
    status: "In Review",
    applications: 12,
  },
  {
    id: 3,
    title: "Lanzamiento Startup",
    date: "5 Abr 2026",
    location: "Rooftop Polanco",
    roles: [{ type: "Bartenders", qty: 3 }, { type: "Meseros", qty: 2 }],
    status: "Confirmed",
    applications: 6,
  },
];

const statusColors: Record<string, string> = {
  Open: "bg-primary/20 text-primary border-primary/30",
  "In Review": "bg-accent/20 text-accent border-accent/30",
  Confirmed: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
};

const DashboardClient = () => {
  return (
    <MobileLayout
      title="Mi Dashboard"
      rightAction={
        <Link to="/crear-evento">
          <Button variant="neon" size="sm" className="h-8 px-3 text-xs">
            <Plus size={14} /> Nuevo
          </Button>
        </Link>
      }
    >
      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 mt-4 mb-6">
        {[
          { label: "Activos", value: "3" },
          { label: "Postulaciones", value: "26" },
          { label: "Confirmados", value: "8" },
          { label: "Rating", value: "4.9★" },
        ].map((s) => (
          <div key={s.label} className="glass rounded-xl p-3">
            <div className="text-xl font-heading font-bold text-primary">{s.value}</div>
            <div className="text-[10px] text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Events */}
      <h2 className="font-heading text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
        Mis Eventos
      </h2>

      <div className="space-y-3">
        {mockEvents.map((event, i) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="glass rounded-xl p-4 active:scale-[0.98] transition-transform cursor-pointer"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-heading font-semibold text-sm">{event.title}</h3>
              <span className={`text-[10px] px-2 py-0.5 rounded-full border ${statusColors[event.status]}`}>
                {event.status}
              </span>
            </div>

            <div className="flex flex-wrap gap-3 text-[11px] text-muted-foreground mb-3">
              <span className="flex items-center gap-1"><Calendar size={11} />{event.date}</span>
              <span className="flex items-center gap-1"><MapPin size={11} />{event.location}</span>
              <span className="flex items-center gap-1"><Users size={11} />{event.applications} postulaciones</span>
            </div>

            <div className="flex gap-1.5 flex-wrap">
              {event.roles.map((r) => (
                <Badge key={r.type} variant="secondary" className="text-[10px] px-2 py-0.5">
                  {r.qty}× {r.type}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </MobileLayout>
  );
};

export default DashboardClient;
