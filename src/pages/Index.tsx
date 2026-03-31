import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LifestyleSection from "@/components/LifestyleSection";
import StatsSection from "@/components/StatsSection";
import RequirementsSection from "@/components/RequirementsSection";
import ProgramSection from "@/components/ProgramSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import LeadFormSection from "@/components/LeadFormSection";
import BottomCTA from "@/components/BottomCTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => (
  <>
    <Navbar />
    <HeroSection />
    <LifestyleSection />
    <StatsSection />
    <section className="relative overflow-hidden">
      {/* Shared video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/placeholder.svg"
      >
        <source src="/videos/stats-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative z-10">
        <RequirementsSection />
        <LeadFormSection />
      </div>
    </section>
    <ProgramSection />
    <HowItWorksSection />
    <BottomCTA />
    <Footer />
    <WhatsAppFloat />
  </>
);

export default Index;
