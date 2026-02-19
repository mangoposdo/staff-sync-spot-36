import MobileLayout from "@/components/MobileLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAppMode } from "@/hooks/useAppMode";
import {
  Wine, GlassWater, UserCheck, Sparkles, Wrench, Shield, ClipboardList,
  FileText, Users, CheckCircle, ArrowRight, CalendarPlus, Search,
} from "lucide-react";

const roles = [
  { icon: Wine, label: "Meseros" },
  { icon: GlassWater, label: "Bartenders" },
  { icon: UserCheck, label: "Host/Hostess" },
  { icon: Sparkles, label: "Limpieza" },
  { icon: Wrench, label: "Montaje" },
  { icon: Shield, label: "Seguridad" },
  { icon: ClipboardList, label: "Coordinadores" },
];

const clientSteps = [
  { icon: FileText, title: "Publica", desc: "Describe tu evento y los roles que necesitas" },
  { icon: Users, title: "Recibe", desc: "El staff se postula a tu evento" },
  { icon: CheckCircle, title: "Confirma", desc: "Elige y confirma a los mejores" },
];

const staffSteps = [
  { icon: Search, title: "Explora", desc: "Encuentra eventos cerca de ti" },
  { icon: CalendarPlus, title: "Aplica", desc: "Postúlate a los eventos que te interesen" },
  { icon: CheckCircle, title: "Trabaja", desc: "Recibe confirmación y asiste" },
];

const Index = () => {
  const { mode } = useAppMode();
  const isStaff = mode === "staff";
  const steps = isStaff ? staffSteps : clientSteps;

  return (
    <MobileLayout showLogo>
      {/* Hero */}
      <section className="py-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-medium bg-secondary text-secondary-foreground mb-4">
            {isStaff ? "Encuentra trabajo" : "Marketplace de Staff"}
          </span>

          <h1 className="font-heading text-2xl font-bold leading-tight text-foreground mb-2">
            {isStaff ? (
              <>Encuentra <span className="text-primary">eventos</span> para trabajar</>
            ) : (
              <>El mejor <span className="text-primary">staff</span> para tu evento</>
            )}
          </h1>

          <p className="text-muted-foreground text-sm mb-6">
            {isStaff
              ? "Explora eventos disponibles, postúlate y construye tu reputación."
              : "Conectamos organizadores con personal profesional. Publica, recibe postulaciones y confirma en minutos."
            }
          </p>

          <Link to={isStaff ? "/eventos" : "/auth?tab=register&role=client"}>
            <Button className="w-full h-12 text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90">
              {isStaff ? "Ver Eventos Disponibles" : "Publicar Evento"}
              <ArrowRight size={16} />
            </Button>
          </Link>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            {(isStaff
              ? [{ value: "120+", label: "Eventos" }, { value: "$25/h", label: "Promedio" }, { value: "4.8★", label: "Rating" }]
              : [{ value: "500+", label: "Staff" }, { value: "2 min", label: "Publicar" }, { value: "4.8★", label: "Rating" }]
            ).map((s) => (
              <div key={s.label} className="text-center bg-secondary/50 rounded-xl py-3">
                <div className="text-base font-heading font-bold text-primary">{s.value}</div>
                <div className="text-[10px] text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Roles */}
      <section className="py-6">
        <h2 className="font-heading text-lg font-bold text-foreground mb-1">Categorías de Staff</h2>
        <p className="text-xs text-muted-foreground mb-4">Todo el personal que necesitas</p>

        <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide">
          {roles.map((role, i) => (
            <motion.div
              key={role.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl p-4 min-w-[100px] text-center flex-shrink-0 bg-card border border-border shadow-sm"
            >
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mx-auto mb-2">
                <role.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xs font-medium text-foreground">{role.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="py-6">
        <h2 className="font-heading text-lg font-bold text-foreground mb-5">¿Cómo funciona?</h2>
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
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <step.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-sm text-foreground">{i + 1}. {step.title}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-6 pb-4">
        <div className="rounded-xl p-6 text-center bg-primary/5 border border-primary/20">
          <h2 className="font-heading text-lg font-bold text-foreground mb-2">¿Listo para empezar?</h2>
          <p className="text-xs text-muted-foreground mb-4">Crea tu cuenta gratis en menos de 1 minuto</p>
          <Link to="/auth?tab=register">
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Comenzar ahora <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </section>
    </MobileLayout>
  );
};

export default Index;
