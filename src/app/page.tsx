import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Pricing } from "@/components/landing/Pricing";
import { Testimonials, FAQ } from "@/components/landing/TestimonialsAndFAQ";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Shield, Zap, Star, Globe, MessageCircle, Info, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-brand-100 selection:text-brand-900">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        
        {/* Logos / Trust Bar */}
        <section className="py-12 border-y border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-8">Impulsando negocios locales y marcas en crecimiento</p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
               {['DENTIX', 'GUSTO', 'FITFLOW', 'STORELY', 'CLEANCO'].map(logo => (
                 <span key={logo} className="text-xl font-black tracking-tighter text-slate-900 dark:text-white">{logo}</span>
               ))}
            </div>
          </div>
        </section>

        <Features />
        
        {/* Dynamic Analytics / Social Proof Section */}
        <section className="py-24 bg-brand-600 relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
           <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="grid md:grid-cols-4 gap-8 text-center text-white">
                 <div className="space-y-2">
                    <h3 className="text-4xl lg:text-5xl font-black">1.2s</h3>
                    <p className="text-brand-100 text-sm font-medium">Tiempo de respuesta prom.</p>
                 </div>
                 <div className="space-y-2">
                    <h3 className="text-4xl lg:text-5xl font-black">94%</h3>
                    <p className="text-brand-100 text-sm font-medium">Tasa de automatización</p>
                 </div>
                 <div className="space-y-2">
                    <h3 className="text-4xl lg:text-5xl font-black">500k+</h3>
                    <p className="text-brand-100 text-sm font-medium">Mensajes gestionados</p>
                 </div>
                 <div className="space-y-2">
                    <h3 className="text-4xl lg:text-5xl font-black">4.8x</h3>
                    <p className="text-brand-100 text-sm font-medium">ROI para negocios</p>
                 </div>
              </div>
           </div>
        </section>

        <Testimonials />
        <Pricing />
        <FAQ />

        {/* CTA Section */}
        <section className="py-32 bg-white dark:bg-slate-950">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-slate-900 dark:bg-brand-900/20 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl border border-white/10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative z-10">
                <Badge className="mb-6 bg-brand-500 text-white border-none px-4 py-1">¿Estás listo para crecer?</Badge>
                <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
                  Empezá tu transformación con IA <br className="hidden md:block" /> en menos de 15 minutos.
                </h2>
                <p className="text-lg md:text-xl opacity-70 mb-12 max-w-2xl mx-auto leading-relaxed">
                  Sumate a cientos de negocios que crecen con ChatFlow. No necesitás tarjeta de crédito para arrancar tu prueba de 14 días.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Button size="lg" className="bg-brand-500 hover:bg-brand-600 text-white rounded-full px-10 h-16 text-lg font-bold shadow-xl shadow-brand-500/30" asChild>
                    <Link href="/auth/signup">Arrancá Gratis Ahora</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10 rounded-full px-10 h-16 text-lg font-bold gap-2" asChild>
                    <Link href="/demo">Ver Demo en Vivo <ArrowRight className="w-5 h-5" /></Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 mb-20">
            <div className="col-span-12 md:col-span-4">
              <div className="flex items-center gap-2 mb-8">
                <div className="bg-brand-500 p-2 rounded-xl">
                  <MessageSquare className="text-white w-6 h-6" />
                </div>
                <span className="text-2xl font-bold tracking-tight">ChatFlow</span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8 max-w-xs">
                El asistente de IA para WhatsApp más avanzado para negocios modernos. Hecho para vender más, rápido y sin vueltas.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center text-slate-400 hover:text-brand-500 transition-colors shadow-sm">
                  <MessageCircle size={18} />
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center text-slate-400 hover:text-brand-500 transition-colors shadow-sm">
                  <Info size={18} />
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center text-slate-400 hover:text-brand-500 transition-colors shadow-sm">
                  <ExternalLink size={18} />
                </Link>
              </div>
            </div>
            
            <div className="col-span-6 md:col-span-2">
              <h4 className="font-bold mb-8 uppercase text-[10px] tracking-[0.2em] text-slate-400">Producto</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><Link href="#features" className="text-slate-500 hover:text-brand-500 transition-colors">Funciones</Link></li>
                <li><Link href="#solutions" className="text-slate-500 hover:text-brand-500 transition-colors">Soluciones</Link></li>
                <li><Link href="#pricing" className="text-slate-500 hover:text-brand-500 transition-colors">Precios</Link></li>
                <li><Link href="/api" className="text-slate-500 hover:text-brand-500 transition-colors">Documentación</Link></li>
              </ul>
            </div>
            
            <div className="col-span-6 md:col-span-2">
              <h4 className="font-bold mb-8 uppercase text-[10px] tracking-[0.2em] text-slate-400">Industrias</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><Link href="#" className="text-slate-500 hover:text-brand-500 transition-colors">Clínicas Dentales</Link></li>
                <li><Link href="#" className="text-slate-500 hover:text-brand-500 transition-colors">Restaurantes</Link></li>
                <li><Link href="#" className="text-slate-500 hover:text-brand-500 transition-colors">Gimnasios & Estudios</Link></li>
                <li><Link href="#" className="text-slate-500 hover:text-brand-500 transition-colors">E-commerce</Link></li>
              </ul>
            </div>

            <div className="col-span-6 md:col-span-2">
              <h4 className="font-bold mb-8 uppercase text-[10px] tracking-[0.2em] text-slate-400">Empresa</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><Link href="#" className="text-slate-500 hover:text-brand-500 transition-colors">Sobre nosotros</Link></li>
                <li><Link href="#" className="text-slate-500 hover:text-brand-500 transition-colors">Blog</Link></li>
                <li><Link href="#" className="text-slate-500 hover:text-brand-500 transition-colors">Carreras</Link></li>
                <li><Link href="#" className="text-slate-500 hover:text-brand-500 transition-colors">Contacto</Link></li>
              </ul>
            </div>

            <div className="col-span-6 md:col-span-2">
              <h4 className="font-bold mb-8 uppercase text-[10px] tracking-[0.2em] text-slate-400">Legal</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><Link href="#" className="text-slate-500 hover:text-brand-500 transition-colors">Privacidad</Link></li>
                <li><Link href="#" className="text-slate-500 hover:text-brand-500 transition-colors">Términos</Link></li>
                <li><Link href="#" className="text-slate-500 hover:text-brand-500 transition-colors">Seguridad</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6 text-[11px] font-bold uppercase tracking-widest text-slate-400">
               <span>© 2024 ChatFlow AI</span>
               <div className="flex items-center gap-1">
                  <Globe size={12} /> ES-UY
               </div>
            </div>
            <div className="flex gap-8">
               <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-whatsapp-green animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Estado del Sistema: Óptimo</span>
               </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
