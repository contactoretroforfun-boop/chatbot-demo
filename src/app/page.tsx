import { Navbar } from "@/components/landing/Navbar";
import { AgencyHero } from "@/components/landing/AgencyHero";
import { AgencyServices } from "@/components/landing/AgencyServices";
import { AgencyDifferential } from "@/components/landing/AgencyDifferential";
import { Pricing } from "@/components/landing/Pricing";
import { Testimonials, FAQ } from "@/components/landing/TestimonialsAndFAQ";
import { AgencyCTA } from "@/components/landing/AgencyCTA";
import { NuvoraLogo } from "@/components/ui/NuvoraLogo";
import Link from "next/link";
import { MessageCircle, Globe, ExternalLink, Info } from "lucide-react";

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

      <footer className="py-24 border-t border-white/5 bg-[#070B14] relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-16 mb-24">
            <div className="col-span-12 md:col-span-6">
               <NuvoraLogo size="sm" className="mb-10 origin-left" centered={false} />
              <p className="text-slate-400 leading-relaxed mb-10 max-w-md text-lg font-medium">
                Somos una agencia digital boutique especializada en automatización y experiencias premium. Ayudamos a negocios uruguayos a escalar su impacto con tecnología de vanguardia.
              </p>
              <div className="flex gap-5">
                {[MessageCircle, Info, ExternalLink].map((Icon, i) => (
                  <Link key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary/30 transition-all duration-300">
                    <Icon size={20} />
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="col-span-6 md:col-span-3">
              <h4 className="font-bold mb-10 uppercase text-[10px] tracking-[0.3em] text-slate-500">Servicios</h4>
              <ul className="space-y-5 text-[15px] font-bold">
                <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Asistentes IA</Link></li>
                <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Diseño Web</Link></li>
                <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Automatización</Link></li>
                <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">SEO Local</Link></li>
              </ul>
            </div>
            
            <div className="col-span-6 md:col-span-3">
              <h4 className="font-bold mb-10 uppercase text-[10px] tracking-[0.3em] text-slate-500">Contacto</h4>
              <ul className="space-y-5 text-[15px] font-bold">
                <li><Link href={`https://wa.me/59891746967?text=${encodeURIComponent("Hola Nuvora! Me gustaría contactar con ustedes.")}`} className="text-slate-400 hover:text-white transition-colors">WhatsApp</Link></li>
                <li><Link href="mailto:hola@nuvora.agency" className="text-slate-400 hover:text-white transition-colors">Email</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-500">
               <span>© 2026 Nuvora Agency</span>
               <div className="flex items-center gap-2">
                  <Globe size={14} /> URUGUAY
               </div>
            </div>
            <div className="flex gap-10">
               <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Disponibilidad: Alta</span>
               </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
