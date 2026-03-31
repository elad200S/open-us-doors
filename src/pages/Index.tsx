import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LifestyleSection from "@/components/LifestyleSection";

import StatsSection from "@/components/StatsSection";
import RequirementsSection from "@/components/RequirementsSection";
import ProgramSection from "@/components/ProgramSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LeadFormSection from "@/components/LeadFormSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => (
  <>
    <Navbar />
    <HeroSection />
    <LifestyleSection />
    
    <StatsSection />
    <RequirementsSection />
    <LeadFormSection />
    <ProgramSection />
    <HowItWorksSection />
    <TestimonialsSection />
    <Footer />
    <WhatsAppFloat />
  </>
);

export default Index;
