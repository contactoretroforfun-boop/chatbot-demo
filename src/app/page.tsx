import { Navbar } from "@/components/landing/Navbar";
import { AgencyHero } from "@/components/landing/AgencyHero";
import { AgencyServices } from "@/components/landing/AgencyServices";
import { AgencyDifferential } from "@/components/landing/AgencyDifferential";
import { Pricing } from "@/components/landing/Pricing";
import { Testimonials, FAQ } from "@/components/landing/TestimonialsAndFAQ";
import { AgencyCTA } from "@/components/landing/AgencyCTA";
import { Footer } from "@/components/landing/Footer";

export default function AgencyHomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#070B14] selection:bg-primary/30 selection:text-white overflow-x-hidden">
      <Navbar />
      
      <main className="flex-1">
        <AgencyHero />
        
        <AgencyServices />
        <AgencyDifferential />
        <Pricing />
        <Testimonials />
        <FAQ />
        <AgencyCTA />
      </main>

      <Footer />
    </div>
  );
}
