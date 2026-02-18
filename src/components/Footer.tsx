import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="font-heading text-lg font-bold text-primary neon-text">
            Tu Staff
          </Link>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Inicio</Link>
            <Link to="/eventos" className="hover:text-foreground transition-colors">Eventos</Link>
            <Link to="/auth" className="hover:text-foreground transition-colors">Acceder</Link>
          </div>
          <p className="text-xs text-muted-foreground">
            © 2026 Tu Staff. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
