import { Link } from "react-router-dom";
import { useAppMode } from "@/hooks/useAppMode";
import { Briefcase, HardHat } from "lucide-react";

interface TopBarProps {
  title?: string;
  showLogo?: boolean;
  rightAction?: React.ReactNode;
}

const TopBar = ({ title, showLogo = false, rightAction }: TopBarProps) => {
  const { mode, toggleMode } = useAppMode();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border safe-area-top">
      <div className="flex items-center justify-between h-14 px-4">
        {showLogo ? (
          <Link to="/" className="font-heading text-lg font-bold text-primary">
            Tu Staff
          </Link>
        ) : (
          <h1 className="font-heading text-base font-semibold truncate text-foreground">{title}</h1>
        )}

        <div className="flex items-center gap-2">
          {/* Role Toggle */}
          <button
            onClick={toggleMode}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium transition-colors border border-border bg-secondary text-secondary-foreground"
          >
            {mode === "staff" ? (
              <>
                <HardHat size={14} />
                <span>Trabajar</span>
              </>
            ) : (
              <>
                <Briefcase size={14} />
                <span>Contratar</span>
              </>
            )}
          </button>
          {rightAction && <div>{rightAction}</div>}
        </div>
      </div>
    </header>
  );
};

export default TopBar;
