import MobileLayout from "@/components/MobileLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Wine, GlassWater, UserCheck, Sparkles, Wrench, Shield, ClipboardList,
  FileText, Users, CheckCircle, ArrowRight,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const roles = [
  { icon: Wine, label: "Meseros" },
  { icon: GlassWater, label: "Bartenders" },
  { icon: UserCheck, label: "Host/Hostess" },
  { icon: Sparkles, label: "Limpieza" },
  { icon: Wrench, label: "Montaje" },
  { icon: Shield, label: "Seguridad" },
  { icon: ClipboardList, label: "Coordinadores" },
];

const steps = [
  { icon: FileText, title: "Publica", desc: "Describe tu evento y los roles que necesitas" },
  { icon: Users, title: "Recibe", desc: "El staff se postula a tu evento" },
  { icon: CheckCircle, title: "Confirma", desc: "Elige y confirma a los mejores" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero — full screen, no bottom nav */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden pb-8">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="absolute inset-0 gradient-hero opacity-80" />

        <div className="relative z-10 px-6 pb-safe">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-medium border border-primary/30 text-primary mb-4">
              Marketplace de Staff
            </span>

            <h1 className="font-heading text-3xl sm:text-5xl font-bold leading-tight mb-3">
              El mejor{" "}
              <span className="text-primary neon-text">staff</span>
              {" "}para tu evento
            </h1>

            <p className="text-muted-foreground text-sm sm:text-base mb-6 max-w-md">
              Conectamos organizadores con personal profesional. Publica, recibe postulaciones y confirma en minutos.
            </p>

            <div className="flex flex-col gap-3">
              <Link to="/auth?tab=register&role=client">
                <Button variant="neon" size="lg" className="w-full text-base py-6">
                  Publicar Evento
                </Button>
              </Link>
              <Link to="/auth?tab=register&role=staff">
                <Button variant="neonOutline" size="lg" className="w-full text-base py-6">
                  Trabajar como Staff
                </Button>
              </Link>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { value: "500+", label: "Staff" },
                { value: "2 min", label: "Publicar" },
                { value: "4.8★", label: "Rating" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-lg font-heading font-bold text-primary">{s.value}</div>
                  <div className="text-[10px] text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Roles */}
      <section className="px-6 py-10">
        <h2 className="font-heading text-xl font-bold mb-1">Categorías de Staff</h2>
        <p className="text-xs text-muted-foreground mb-5">Todo el personal que necesitas</p>

        <div className="flex gap-3 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide">
          {roles.map((role, i) => (
            <motion.div
              key={role.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-xl p-4 min-w-[100px] text-center flex-shrink-0"
            >
              <role.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <span className="text-xs font-medium">{role.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-10">
        <h2 className="font-heading text-xl font-bold mb-6">¿Cómo funciona?</h2>

        <div className="space-y-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <step.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-sm">{i + 1}. {step.title}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-10 pb-24">
        <div className="glass rounded-xl p-6 text-center">
          <h2 className="font-heading text-lg font-bold mb-2">¿Listo para empezar?</h2>
          <p className="text-xs text-muted-foreground mb-4">Crea tu cuenta gratis en menos de 1 minuto</p>
          <Link to="/auth?tab=register">
            <Button variant="neon" className="w-full">
              Comenzar ahora <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
