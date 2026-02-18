import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Calendar, MapPin, DollarSign, Clock } from "lucide-react";

const mockEvents = [
  {
    id: 1,
    title: "Boda García-López",
    date: "15 Mar 2026",
    location: "Salón Imperial, CDMX",
    role: "Meseros",
    hours: 6,
    rate: 250,
    status: "Open",
  },
  {
    id: 2,
    title: "Corporativo Fintech Summit",
    date: "22 Mar 2026",
    location: "Centro de Convenciones",
    role: "Host/Hostess",
    hours: 8,
    rate: 300,
    status: "Open",
  },
  {
    id: 3,
    title: "Cumpleaños Privado",
    date: "28 Mar 2026",
    location: "Residencia Las Lomas",
    role: "Bartenders",
    hours: 5,
    rate: 350,
    status: "Open",
  },
  {
    id: 4,
    title: "Gala Beneficencia",
    date: "10 Abr 2026",
    location: "Hotel Four Seasons",
    role: "Meseros",
    hours: 7,
    rate: 280,
    status: "Open",
  },
];

const EventosStaff = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="mb-8">
          <h1 className="font-heading text-2xl font-bold">Eventos Disponibles</h1>
          <p className="text-sm text-muted-foreground">Encuentra eventos que coincidan con tu perfil y disponibilidad</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {mockEvents.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-lg p-5 hover:border-primary/30 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-heading font-semibold mb-1">{event.title}</h3>
                  <Badge variant="secondary" className="text-xs">{event.role}</Badge>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full border bg-primary/20 text-primary border-primary/30">
                  {event.status}
                </span>
              </div>

              <div className="space-y-2 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-2"><Calendar size={14} />{event.date}</div>
                <div className="flex items-center gap-2"><MapPin size={14} />{event.location}</div>
                <div className="flex items-center gap-2"><Clock size={14} />{event.hours} horas</div>
                <div className="flex items-center gap-2">
                  <DollarSign size={14} />
                  <span className="text-primary font-semibold">${event.rate * event.hours} MXN</span>
                  <span className="text-xs">({event.hours}h × ${event.rate}/h)</span>
                </div>
              </div>

              <Button variant="neon" size="sm" className="w-full">Aplicar</Button>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EventosStaff;
