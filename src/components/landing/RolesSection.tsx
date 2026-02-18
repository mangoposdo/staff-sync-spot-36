import { motion } from "framer-motion";
import {
  Wine,
  GlassWater,
  UserCheck,
  Sparkles,
  Wrench,
  Shield,
  ClipboardList,
} from "lucide-react";

const roles = [
  { icon: Wine, label: "Meseros", desc: "Servicio profesional de mesa" },
  { icon: GlassWater, label: "Bartenders", desc: "Coctelería y bebidas" },
  { icon: UserCheck, label: "Host / Hostess", desc: "Recepción e imagen" },
  { icon: Sparkles, label: "Limpieza", desc: "Orden antes y después" },
  { icon: Wrench, label: "Montaje", desc: "Armado y desmontaje" },
  { icon: Shield, label: "Seguridad", desc: "Control y protección" },
  { icon: ClipboardList, label: "Coordinadores", desc: "Logística del evento" },
];

const RolesSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            Todo el <span className="text-primary">staff</span> que necesitas
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Desde meseros hasta coordinadores, encuentra al personal ideal para cualquier tipo de evento.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {roles.map((role, i) => (
            <motion.div
              key={role.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group glass rounded-lg p-6 text-center hover:border-primary/40 transition-all duration-300 cursor-pointer"
            >
              <role.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading font-semibold text-sm mb-1">{role.label}</h3>
              <p className="text-xs text-muted-foreground">{role.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RolesSection;
