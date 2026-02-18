import { motion } from "framer-motion";
import { FileText, Users, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "1. Publica tu evento",
    desc: "Describe el evento, fecha, ubicación y los roles que necesitas. Toma menos de 2 minutos.",
  },
  {
    icon: Users,
    title: "2. Recibe postulaciones",
    desc: "El staff disponible se postula a tu evento. Revisa perfiles, experiencia y ratings.",
  },
  {
    icon: CheckCircle,
    title: "3. Confirma tu equipo",
    desc: "Elige a los mejores candidatos, chatea con ellos y confirma la contratación.",
  },
];

const HowItWorksSection = () => {
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
            ¿Cómo <span className="text-primary">funciona</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            En 3 simples pasos consigue al equipo perfecto para tu evento.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>

              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/30 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
