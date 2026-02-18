import MobileLayout from "@/components/MobileLayout";
import { motion } from "framer-motion";
import { Star, MapPin, Clock, Award, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Perfil = () => {
  return (
    <MobileLayout title="Mi Perfil">
      <div className="mt-4">
        {/* Profile header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-xl p-5 text-center mb-4"
        >
          <div className="w-20 h-20 rounded-full bg-primary/20 border-2 border-primary/40 mx-auto mb-3 flex items-center justify-center">
            <span className="text-2xl font-heading font-bold text-primary">JS</span>
          </div>
          <h2 className="font-heading font-bold text-lg">Juan Sánchez</h2>
          <p className="text-xs text-muted-foreground">Miembro desde Ene 2026</p>

          <div className="flex items-center justify-center gap-1 mt-2">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={14} className={s <= 4 ? "text-primary fill-primary" : "text-muted-foreground"} />
            ))}
            <span className="text-xs text-muted-foreground ml-1">4.8 (12 reseñas)</span>
          </div>
        </motion.div>

        {/* Quick info */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[
            { icon: Calendar, label: "Eventos", value: "15" },
            { icon: Clock, label: "Horas", value: "120" },
            { icon: Award, label: "Rating", value: "4.8" },
          ].map((item) => (
            <div key={item.label} className="glass rounded-xl p-3 text-center">
              <item.icon className="w-4 h-4 text-primary mx-auto mb-1" />
              <div className="text-sm font-heading font-bold">{item.value}</div>
              <div className="text-[10px] text-muted-foreground">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Roles */}
        <div className="glass rounded-xl p-4 mb-4">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">Mis Roles</h3>
          <div className="flex flex-wrap gap-2">
            {["Mesero", "Bartender", "Montaje"].map((r) => (
              <Badge key={r} variant="secondary" className="text-xs">{r}</Badge>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-2">
          <Button variant="neonOutline" className="w-full justify-start text-xs h-11">
            Editar Perfil
          </Button>
          <Button variant="neonOutline" className="w-full justify-start text-xs h-11">
            Mi Disponibilidad
          </Button>
          <Button variant="neonOutline" className="w-full justify-start text-xs h-11">
            Configuración
          </Button>
          <Button variant="ghost" className="w-full justify-start text-xs h-11 text-destructive">
            Cerrar Sesión
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Perfil;
