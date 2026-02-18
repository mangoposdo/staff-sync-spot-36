import MobileLayout from "@/components/MobileLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Calendar, MapPin, DollarSign, Clock } from "lucide-react";

const mockEvents = [
  { id: 1, title: "Boda García-López", date: "15 Mar", location: "Salón Imperial", role: "Meseros", hours: 6, rate: 250, status: "Open" },
  { id: 2, title: "Fintech Summit", date: "22 Mar", location: "Centro Convenciones", role: "Host/Hostess", hours: 8, rate: 300, status: "Open" },
  { id: 3, title: "Cumpleaños Privado", date: "28 Mar", location: "Residencia Las Lomas", role: "Bartenders", hours: 5, rate: 350, status: "Open" },
  { id: 4, title: "Gala Beneficencia", date: "10 Abr", location: "Four Seasons", role: "Meseros", hours: 7, rate: 280, status: "Open" },
];

const EventosStaff = () => {
  return (
    <MobileLayout title="Eventos Disponibles">
      <div className="space-y-3 mt-4">
        {mockEvents.map((event, i) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="glass rounded-xl p-4"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-heading font-semibold text-sm">{event.title}</h3>
                <Badge variant="secondary" className="text-[10px] mt-1">{event.role}</Badge>
              </div>
              <div className="text-right">
                <div className="text-base font-heading font-bold text-primary">
                  ${(event.rate * event.hours).toLocaleString()}
                </div>
                <div className="text-[10px] text-muted-foreground">MXN</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 text-[11px] text-muted-foreground my-3">
              <span className="flex items-center gap-1"><Calendar size={11} />{event.date}</span>
              <span className="flex items-center gap-1"><MapPin size={11} />{event.location}</span>
              <span className="flex items-center gap-1"><Clock size={11} />{event.hours}h</span>
            </div>

            <Button variant="neon" size="sm" className="w-full h-9 text-xs">
              Aplicar
            </Button>
          </motion.div>
        ))}
      </div>
    </MobileLayout>
  );
};

export default EventosStaff;
