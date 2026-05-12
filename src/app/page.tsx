import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Pricing } from "@/components/landing/Pricing";
import { Testimonials, FAQ } from "@/components/landing/TestimonialsAndFAQ";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, MessageCircle, Info, ExternalLink, Sparkles } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

import { NuvoraLogo } from "@/components/ui/NuvoraLogo";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#070B14] selection:bg-primary/30 selection:text-white">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        
        {/* Logos / Trust Bar */}
        <section className="py-20 border-y border-white/5 bg-[#070B14] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 mb-12">Líderes en innovación confían en Nuvora</p>
            <div className="flex flex-wrap justify-center gap-x-16 gap-y-10 opacity-30 grayscale hover:opacity-60 transition-all duration-700">
               {['DENTIX', 'GUSTO', 'FITFLOW', 'STORELY', 'CLEANCO', 'VETCARE'].map(logo => (
                 <span key={logo} className="text-2xl font-black tracking-tighter text-white">{logo}</span>
               ))}
            </div>
          </div>
        </section>

        <Features />
        
        {/* Dynamic Analytics / Social Proof Section */}
        <section className="py-32 bg-primary relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent" />
           <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="grid md:grid-cols-4 gap-12 text-center text-white">
                 <div className="space-y-3">
                    <h3 className="text-5xl lg:text-7xl font-black tracking-tighter">1.2s</h3>
                    <p className="text-white/70 text-sm font-bold uppercase tracking-widest">Respuesta Promedio</p>
                 </div>
                 <div className="space-y-3">
                    <h3 className="text-5xl lg:text-7xl font-black tracking-tighter">98%</h3>
                    <p className="text-white/70 text-sm font-bold uppercase tracking-widest">Precisión de IA</p>
                 </div>
                 <div className="space-y-3">
                    <h3 className="text-5xl lg:text-7xl font-black tracking-tighter">1M+</h3>
                    <p className="text-white/70 text-sm font-bold uppercase tracking-widest">Mensajes Optimizados</p>
                 </div>
                 <div className="space-y-3">
                    <h3 className="text-5xl lg:text-7xl font-black tracking-tighter">5.2x</h3>
                    <p className="text-white/70 text-sm font-bold uppercase tracking-widest">ROI en Conversión</p>
                 </div>
              </div>
           </div>
        </section>

        <Testimonials />
        <Pricing />
        <FAQ />

        {/* CTA Section */}
        <section className="py-40 bg-[#070B14] relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
          
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="bg-card/40 backdrop-blur-3xl rounded-[4rem] p-16 md:p-32 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10">
                <Badge className="mb-8 bg-primary text-white border-none px-6 py-2 rounded-full font-bold shadow-lg shadow-primary/20">Únete a la élite</Badge>
                <h2 className="text-5xl md:text-8xl font-bold mb-10 tracking-tight leading-[0.95]">
                  Escala tu impacto <br className="hidden md:block" /> con IA avanzada.
                </h2>
                <p className="text-xl md:text-2xl text-slate-400 mb-16 max-w-3xl mx-auto leading-relaxed font-medium">
                  Miles de negocios están transformando su comunicación hoy. Comienza tu prueba de 14 días y experimenta el futuro de Nuvora.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                  <Button size="lg" className="bg-primary hover:bg-brand-600 text-white rounded-full px-12 h-20 text-xl font-bold shadow-2xl shadow-primary/30 transition-all hover:scale-105 active:scale-95" asChild>
                    <Link href="/auth/signup">Arrancar Gratis Ahora</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-white/10 hover:bg-white/5 rounded-full px-12 h-20 text-xl font-bold gap-3 transition-all" asChild>
                    <Link href="/demo">Demo Interactiva <ArrowRight className="w-6 h-6" /></Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-24 border-t border-white/5 bg-[#070B14]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-16 mb-24">
            <div className="col-span-12 md:col-span-4">
               <NuvoraLogo size="md" className="mb-10 origin-left" centered={false} />
              <p className="text-slate-500 leading-relaxed mb-10 max-w-xs text-lg font-medium">
                La plataforma líder de IA para WhatsApp diseñada para la nueva generación de negocios globales.
              </p>
              <div className="flex gap-5">
                {[MessageCircle, Info, ExternalLink].map((Icon, i) => (
                  <Link key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary/30 transition-all duration-300">
                    <Icon size={20} />
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="col-span-6 md:col-span-2">
              <h4 className="font-bold mb-10 uppercase text-[10px] tracking-[0.3em] text-slate-500">Tecnología</h4>
              <ul className="space-y-5 text-[15px] font-bold">
                <li><Link href="#features" className="text-slate-400 hover:text-white transition-colors">Funciones</Link></li>
                <li><Link href="#solutions" className="text-slate-400 hover:text-white transition-colors">Soluciones</Link></li>
                <li><Link href="#pricing" className="text-slate-400 hover:text-white transition-colors">Precios</Link></li>
                <li><Link href="/api" className="text-slate-400 hover:text-white transition-colors">API Docs</Link></li>
              </ul>
            </div>
            
            <div className="col-span-6 md:col-span-2">
              <h4 className="font-bold mb-10 uppercase text-[10px] tracking-[0.3em] text-slate-500">Sectores</h4>
              <ul className="space-y-5 text-[15px] font-bold">
                <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Salud & Clínicas</Link></li>
                <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Gastronomía</Link></li>
                <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">E-commerce</Link></li>
                <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Inmobiliaria</Link></li>
              </ul>
            </div>

            <div className="col-span-6 md:col-span-2">
              <h4 className="font-bold mb-10 uppercase text-[10px] tracking-[0.3em] text-slate-500">Compañía</h4>
              <ul className="space-y-5 text-[15px] font-bold">
                <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Nosotros</Link></li>
                <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Carreras</Link></li>
                <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Contacto</Link></li>
              </ul>
            </div>

            <div className="col-span-6 md:col-span-2">
              <h4 className="font-bold mb-10 uppercase text-[10px] tracking-[0.3em] text-slate-500">Legal</h4>
              <ul className="space-y-5 text-[15px] font-bold">
                <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Privacidad</Link></li>
                <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Términos</Link></li>
                <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Seguridad</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-500">
               <span>© 2024 Nuvora AI</span>
               <div className="flex items-center gap-2">
                  <Globe size={14} /> ES-LATAM
               </div>
            </div>
            <div className="flex gap-10">
               <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Estado: Operativo</span>
               </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
