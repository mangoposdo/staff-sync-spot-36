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
    <div className="min-h-screen bg-background flex flex-col px-6 pt-12 pb-8 safe-area-top safe-area-bottom">
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="flex-1 flex flex-col">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <ArrowLeft size={16} /> Volver
        </Link>

        <div className="font-heading text-2xl font-bold text-primary neon-text mb-1">Tu Staff</div>
        <p className="text-muted-foreground text-xs mb-6">
          {tab === "login" ? "Inicia sesión en tu cuenta" : "Crea tu cuenta gratuita"}
        </p>

        {/* Tab toggle */}
        <div className="flex rounded-lg bg-card p-1 mb-6">
          <button
            onClick={() => setTab("login")}
            className={`flex-1 text-xs font-medium py-2.5 rounded-md transition-all ${
              tab === "login" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
            }`}
          >
            Iniciar Sesión
          </button>
          <button
            onClick={() => setTab("register")}
            className={`flex-1 text-xs font-medium py-2.5 rounded-md transition-all ${
              tab === "register" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
            }`}
          >
            Registrarse
          </button>
        </div>

        {tab === "register" && (
          <div className="mb-5">
            <Label className="text-xs text-muted-foreground mb-2 block">¿Cómo usarás Tu Staff?</Label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setRole("client")}
                className={`glass rounded-xl p-3 text-center transition-all ${
                  role === "client" ? "border-primary/50 neon-glow" : ""
                }`}
              >
                <Briefcase className="w-5 h-5 mx-auto mb-1.5 text-primary" />
                <span className="text-xs font-medium block">Cliente</span>
                <p className="text-[10px] text-muted-foreground">Busco staff</p>
              </button>
              <button
                onClick={() => setRole("staff")}
                className={`glass rounded-xl p-3 text-center transition-all ${
                  role === "staff" ? "border-primary/50 neon-glow" : ""
                }`}
              >
                <User className="w-5 h-5 mx-auto mb-1.5 text-accent" />
                <span className="text-xs font-medium block">Staff</span>
                <p className="text-[10px] text-muted-foreground">Quiero trabajar</p>
              </button>
            </div>
          </div>
        )}

        <form className="space-y-3 flex-1" onSubmit={(e) => e.preventDefault()}>
          {tab === "register" && (
            <div>
              <Label htmlFor="name" className="text-xs">Nombre</Label>
              <div className="relative mt-1">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input id="name" placeholder="Tu nombre completo" className="pl-9 h-11" />
              </div>
            </div>
          )}
          <div>
            <Label htmlFor="email" className="text-xs">Email</Label>
            <div className="relative mt-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input id="email" type="email" placeholder="tu@email.com" className="pl-9 h-11" />
            </div>
          </div>
          <div>
            <Label htmlFor="password" className="text-xs">Contraseña</Label>
            <div className="relative mt-1">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input id="password" type="password" placeholder="••••••••" className="pl-9 h-11" />
            </div>
          </div>

          <div className="pt-2">
            <Button variant="neon" className="w-full h-12 text-sm" size="lg">
              {tab === "login" ? "Iniciar Sesión" : "Crear Cuenta"}
            </Button>
          </div>
        </form>

        <p className="text-[11px] text-muted-foreground text-center mt-4">
          {tab === "login" ? (
            <>¿No tienes cuenta? <button onClick={() => setTab("register")} className="text-primary">Regístrate</button></>
          ) : (
            <>¿Ya tienes cuenta? <button onClick={() => setTab("login")} className="text-primary">Inicia sesión</button></>
          )}
        </p>
      </motion.div>
    </div>
  );
};

export default Auth;
