import TopBar from "@/components/TopBar";
import BottomNav from "@/components/BottomNav";

interface MobileLayoutProps {
  children: React.ReactNode;
  title?: string;
  showLogo?: boolean;
  rightAction?: React.ReactNode;
  hideBottomNav?: boolean;
}

const MobileLayout = ({ children, title, showLogo = false, rightAction, hideBottomNav = false }: MobileLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar title={title} showLogo={showLogo} rightAction={rightAction} />
      <main className="pt-14 pb-20 px-4">
        {children}
      </main>
      {!hideBottomNav && <BottomNav />}
    </div>
  );
};

export default MobileLayout;
