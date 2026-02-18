import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="font-heading text-xl font-bold text-primary neon-text">
          Tu Staff
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Inicio
          </Link>
          <Link to="/eventos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Eventos
          </Link>
          <Link to="/auth" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Iniciar Sesión
          </Link>
          <Link to="/auth?tab=register">
            <Button variant="neon" size="sm">Registrarse</Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border"
          >
            <div className="flex flex-col gap-3 p-4">
              <Link to="/" className="text-sm text-muted-foreground" onClick={() => setOpen(false)}>Inicio</Link>
              <Link to="/eventos" className="text-sm text-muted-foreground" onClick={() => setOpen(false)}>Eventos</Link>
              <Link to="/auth" className="text-sm text-muted-foreground" onClick={() => setOpen(false)}>Iniciar Sesión</Link>
              <Link to="/auth?tab=register" onClick={() => setOpen(false)}>
                <Button variant="neon" size="sm" className="w-full">Registrarse</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
