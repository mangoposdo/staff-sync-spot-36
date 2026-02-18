import { Link } from "react-router-dom";

interface TopBarProps {
  title?: string;
  showLogo?: boolean;
  rightAction?: React.ReactNode;
}

const TopBar = ({ title, showLogo = false, rightAction }: TopBarProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass safe-area-top">
      <div className="flex items-center justify-between h-14 px-4">
        {showLogo ? (
          <Link to="/" className="font-heading text-lg font-bold text-primary neon-text">
            Tu Staff
          </Link>
        ) : (
          <h1 className="font-heading text-base font-semibold truncate">{title}</h1>
        )}
        {rightAction && <div>{rightAction}</div>}
      </div>
    </header>
  );
};

export default TopBar;
