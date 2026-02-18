import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Plus, Calendar, MapPin, Users, Clock } from "lucide-react";
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
    title: "Corporativo Fintech Summit",
    date: "22 Mar 2026",
    location: "Centro de Convenciones",
    roles: [{ type: "Host/Hostess", qty: 3 }, { type: "Seguridad", qty: 2 }],
    status: "In Review",
    applications: 12,
  },
  {
    id: 3,
    title: "Fiesta de lanzamiento Startup",
    date: "5 Abr 2026",
    location: "Rooftop Polanco",
    roles: [{ type: "Bartenders", qty: 3 }, { type: "Meseros", qty: 2 }, { type: "Limpieza", qty: 1 }],
    status: "Confirmed",
    applications: 6,
  },
];

const statusColors: Record<string, string> = {
  Open: "bg-primary/20 text-primary border-primary/30",
  "In Review": "bg-accent/20 text-accent border-accent/30",
  Confirmed: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  Completed: "bg-muted text-muted-foreground border-border",
  Cancelled: "bg-destructive/20 text-destructive border-destructive/30",
};

const DashboardClient = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-heading text-2xl font-bold">Mi Dashboard</h1>
            <p className="text-sm text-muted-foreground">Gestiona tus eventos y solicitudes de staff</p>
          </div>
          <Link to="/crear-evento">
            <Button variant="neon">
              <Plus size={16} /> Crear Solicitud
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Eventos Activos", value: "3" },
            { label: "Postulaciones", value: "26" },
            { label: "Staff Confirmado", value: "8" },
            { label: "Rating Promedio", value: "4.9★" },
          ].map((s) => (
            <div key={s.label} className="glass rounded-lg p-4">
              <div className="text-2xl font-heading font-bold text-primary">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Events list */}
        <div className="space-y-4">
          {mockEvents.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-lg p-5 hover:border-primary/30 transition-all cursor-pointer"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-heading font-semibold">{event.title}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full border ${statusColors[event.status]}`}>
                      {event.status}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar size={12} />{event.date}</span>
                    <span className="flex items-center gap-1"><MapPin size={12} />{event.location}</span>
                    <span className="flex items-center gap-1"><Users size={12} />{event.applications} postulaciones</span>
                  </div>
                  <div className="flex gap-2 mt-3">
                    {event.roles.map((r) => (
                      <Badge key={r.type} variant="secondary" className="text-xs">
                        {r.qty}x {r.type}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button variant="neonOutline" size="sm">Ver Detalles</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardClient;
