import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Lock, User, Briefcase } from "lucide-react";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const initialTab = searchParams.get("tab") === "register" ? "register" : "login";
  const initialRole = searchParams.get("role") || "client";

  const [tab, setTab] = useState<"login" | "register">(initialTab);
  const [role, setRole] = useState(initialRole);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft size={16} /> Volver al inicio
        </Link>

        <div className="font-heading text-2xl font-bold text-primary neon-text mb-2">Tu Staff</div>
        <p className="text-muted-foreground text-sm mb-8">
          {tab === "login" ? "Inicia sesión en tu cuenta" : "Crea tu cuenta gratuita"}
        </p>

        {/* Tab toggle */}
        <div className="flex rounded-lg bg-card p-1 mb-8">
          <button
            onClick={() => setTab("login")}
            className={`flex-1 text-sm font-medium py-2.5 rounded-md transition-all ${
              tab === "login" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Iniciar Sesión
          </button>
          <button
            onClick={() => setTab("register")}
            className={`flex-1 text-sm font-medium py-2.5 rounded-md transition-all ${
              tab === "register" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Registrarse
          </button>
        </div>

        {tab === "register" && (
          <div className="mb-6">
            <Label className="text-sm text-muted-foreground mb-3 block">¿Cómo quieres usar Tu Staff?</Label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setRole("client")}
                className={`glass rounded-lg p-4 text-center transition-all ${
                  role === "client" ? "border-primary/50 neon-glow" : ""
                }`}
              >
                <Briefcase className="w-6 h-6 mx-auto mb-2 text-primary" />
                <span className="text-sm font-medium">Soy Cliente</span>
                <p className="text-xs text-muted-foreground mt-1">Busco staff para eventos</p>
              </button>
              <button
                onClick={() => setRole("staff")}
                className={`glass rounded-lg p-4 text-center transition-all ${
                  role === "staff" ? "border-primary/50 neon-glow" : ""
                }`}
              >
                <User className="w-6 h-6 mx-auto mb-2 text-accent" />
                <span className="text-sm font-medium">Soy Staff</span>
                <p className="text-xs text-muted-foreground mt-1">Quiero trabajar en eventos</p>
              </button>
            </div>
          </div>
        )}

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          {tab === "register" && (
            <div>
              <Label htmlFor="name" className="text-sm">Nombre completo</Label>
              <div className="relative mt-1.5">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input id="name" placeholder="Tu nombre" className="pl-10" />
              </div>
            </div>
          )}

          <div>
            <Label htmlFor="email" className="text-sm">Email</Label>
            <div className="relative mt-1.5">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input id="email" type="email" placeholder="tu@email.com" className="pl-10" />
            </div>
          </div>

          <div>
            <Label htmlFor="password" className="text-sm">Contraseña</Label>
            <div className="relative mt-1.5">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input id="password" type="password" placeholder="••••••••" className="pl-10" />
            </div>
          </div>

          <Button variant="neon" className="w-full mt-6" size="lg">
            {tab === "login" ? "Iniciar Sesión" : "Crear Cuenta"}
          </Button>
        </form>

        <p className="text-xs text-muted-foreground text-center mt-6">
          {tab === "login" ? (
            <>¿No tienes cuenta? <button onClick={() => setTab("register")} className="text-primary hover:underline">Regístrate</button></>
          ) : (
            <>¿Ya tienes cuenta? <button onClick={() => setTab("login")} className="text-primary hover:underline">Inicia sesión</button></>
          )}
        </p>
      </motion.div>
    </div>
  );
};

export default Auth;
