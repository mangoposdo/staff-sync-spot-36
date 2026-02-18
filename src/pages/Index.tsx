import Navbar from "@/components/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import RolesSection from "@/components/landing/RolesSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <RolesSection />
      <HowItWorksSection />
      <Footer />
    </div>
  );
};

export default Index;
