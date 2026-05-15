"use client";

import { useState, useEffect } from "react";
import { ChatSimulator } from "@/components/chat/ChatSimulator";
import { 
  Clock, 
  Calendar, 
  MessageCircle, 
  Users, 
  ShieldCheck, 
  ChevronRight, 
  Star, 
  ArrowLeft,
  Zap,
  LayoutGrid
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { NuvoraLogo } from "@/components/ui/NuvoraLogo";

export default function DemoPage() {
  const [activeReview, setActiveReview] = useState(0);

  const reviews = [
    {
      text: `"La sofisticación de Nuvora es inigualable. Automatizamos el 94% de las consultas y la percepción de marca de nuestros clientes subió de nivel."`,
      name: "Dra. Sarah Miller",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      role: "Clínica Dental"
    },
    {
      text: `"La configuración fue súper fácil. Le pasamos un documento con nuestras preguntas frecuentes y en 5 minutos ya estaba funcionando."`,
      name: "CAROLINA VEGA",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      role: "E-commerce Manager"
    },
    {
      text: `"Como dueño de un restaurante, la integración es oro puro. El bot levanta pedidos y responde si tenemos mesas libres sin que yo toque el celular."`,
      name: "ESTEBAN QUIROGA",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      role: "Gourmet Group"
    },
    {
      text: `"La automatización de reservas cambió el juego. Ya no perdemos clientes por no contestar el teléfono en hora pico. Es una máquina de vender."`,
      name: "JULIÁN RODRÍGUEZ",
      img: "https://i.pravatar.cc/150?u=julian",
      role: "Gourmet House"
    },
    {
      text: `"Los socios agendan sus clases solos. El bot les recuerda el vencimiento de la cuota y nos ahorra horas de gestión administrativa cada semana."`,
      name: "VALENTINA LÓPEZ",
      img: "https://i.pravatar.cc/150?u=valentina",
      role: "Iron Fitness Gym"
    },
    {
      text: `"Para filtrar consultas legales iniciales es increíble. Mis clientes sienten que los atiendo al instante, incluso un domingo por la tarde."`,
      name: "DR. MATEO FERNÁNDEZ",
      img: "https://i.pravatar.cc/150?u=mateo",
      role: "Estudio Jurídico F&A"
    },
    {
      text: `"Check-ins y consultas de servicios resueltas en segundos. La integración con nuestro sistema de reservas fue impecable y muy profesional."`,
      name: "SOFÍA ROMERO",
      img: "https://i.pravatar.cc/150?u=sofia",
      role: "Hostería del Valle"
    },
    {
      text: `"Nuestras pacientes aman la rapidez para sacar turno. El tono profesional del bot se alinea perfecto con la estética premium de nuestra marca."`,
      name: "LUCÍA MÉNDEZ",
      img: "https://i.pravatar.cc/150?u=lucia",
      role: "Glow Aesthetic"
    }
  ];

  const nextReview = () => setActiveReview((prev) => (prev + 1) % reviews.length);
  const prevReview = () => setActiveReview((prev) => (prev - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    const timer = setInterval(nextReview, 6000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <div className="min-h-screen bg-[#070B14] flex flex-col items-center overflow-x-hidden font-sans selection:bg-primary/30 selection:text-white">
      {/* Dynamic Background Accents */}
      <div className="fixed top-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary/10 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/5 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Header Navigation Area */}
      <header className="w-full max-w-7xl px-6 py-6 lg:py-10 flex items-center justify-between z-50">
        <NuvoraLogo logoType="ai" size="lg" centered={false} className="scale-90 lg:scale-100" />
        <Link href="/" className="text-white/60 hover:text-white transition-colors text-sm font-bold flex items-center gap-2 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Volver al inicio</span>
        </Link>
      </header>

      {/* Hero Section */}
      <main className="flex-1 w-full max-w-7xl px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 z-10 py-4 lg:pb-20">
        
        {/* Column 1: Copy & Reviews */}
        <div className="w-full lg:w-[540px] flex flex-col space-y-10 order-2 lg:order-1 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="space-y-6">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-neon text-[10px] lg:text-xs uppercase tracking-widest">IA Inteligente en Vivo</span>
             </div>
             
             <h1 className="text-4xl lg:text-6xl font-black tracking-tight text-white leading-[1.05]">
                Atención automática.<br />
                <span className="text-neon">Más clientes.</span>
             </h1>
             
             <p className="text-lg lg:text-xl text-slate-400 font-medium leading-relaxed max-w-lg">
                Potenciamos tu negocio con una IA que responde, agenda y vende en WhatsApp por vos, las 24 horas del día.
             </p>
          </div>

          {/* CTA & Trust Wrapper */}
          <div className="space-y-10">
            <div className="space-y-6">
               <Link 
                 href="https://wa.me/59891746967" 
                 target="_blank"
                 className="group relative inline-flex items-center justify-center gap-4 bg-primary text-white font-black py-5 px-10 rounded-2xl transition-all duration-300 shadow-[0_20px_50px_-15px_rgba(124,92,255,0.5)] hover:shadow-[0_25px_60px_-10px_rgba(124,92,255,0.7)] active:scale-95 w-full sm:w-auto overflow-hidden text-lg"
               >
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                 <MessageCircle className="w-6 h-6 fill-current" />
                 <span>Quiero mi propio asistente IA</span>
                 <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
               </Link>
               <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em] px-2">
                  Únete a los más de 50 negocios que ya automatizaron
               </p>
            </div>

            {/* 3D Review Carousel (PC Sidebar / Mobile Below CTA) */}
            <div className="relative w-full max-w-[400px] lg:max-w-full">
               <div className="relative h-[320px] w-full flex items-center justify-center overflow-visible">
                  <AnimatePresence mode="popLayout">
                    {reviews.map((review, i) => {
                      let offset = i - activeReview;
                      const total = reviews.length;
                      if (offset > Math.floor(total / 2)) offset -= total;
                      if (offset < -Math.floor(total / 2)) offset += total;
                      
                      const isActive = offset === 0;

                      return (
                        <motion.div
                          key={i}
                          className={`absolute w-[300px] lg:w-[420px] p-8 rounded-[2.5rem] bg-[#161F35] border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.4)] flex flex-col justify-between ${isActive ? 'z-40' : 'z-20 blur-[2px]'}`}
                          initial={false}
                          animate={{
                            x: offset * 80,
                            scale: isActive ? 1 : 0.8,
                            opacity: isActive ? 1 : 0.3,
                            zIndex: 40 - Math.abs(offset),
                            rotateY: offset * -15,
                          }}
                          transition={{ type: "spring", stiffness: 200, damping: 25 }}
                        >
                          <p className="text-lg text-white font-bold italic leading-tight lg:leading-relaxed">
                            "{review.text}"
                          </p>
                          <div className="flex items-center gap-4 mt-6">
                             <img src={review.img} alt={review.name} className="w-14 h-14 rounded-full object-cover border-2 border-primary/30" />
                             <div>
                                <p className="text-base font-black text-white uppercase tracking-tight leading-none">{review.name}</p>
                                <div className="flex text-yellow-500 gap-1 mt-2">
                                   {[...Array(5)].map((_, j) => <Star key={j} size={14} className="fill-current" />)}
                                </div>
                             </div>
                          </div>

                          {/* Arrows (Only on Active Card) */}
                          {isActive && (
                            <>
                              <button 
                                onClick={(e) => { e.preventDefault(); e.stopPropagation(); prevReview(); }}
                                className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-primary transition-all z-50 group/arrow"
                              >
                                <ArrowLeft size={16} className="group-hover/arrow:-translate-x-0.5 transition-transform" />
                              </button>
                              <button 
                                onClick={(e) => { e.preventDefault(); e.stopPropagation(); nextReview(); }}
                                className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-primary transition-all z-50 group/arrow"
                              >
                                <ChevronRight size={20} className="group-hover/arrow:translate-x-0.5 transition-transform" />
                              </button>
                            </>
                          )}
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
               </div>
               
               {/* Pagination Dots */}
               <div className="flex justify-center gap-3 mt-4">
                  {reviews.map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-2 rounded-full transition-all duration-500 ${i === activeReview ? 'w-6 bg-white' : 'w-2 bg-white/20'}`} 
                    />
                  ))}
               </div>
            </div>
          </div>
        </div>

        {/* Column 2: Phone Mockup (The Hero) */}
        <div className="w-full lg:flex-1 flex flex-col items-center justify-center order-1 lg:order-2 animate-in fade-in zoom-in-95 duration-1000">
           <div className="relative group">
              {/* Glowing Aura */}
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full group-hover:bg-primary/30 transition-all duration-700" />
              
              <div className="relative transform lg:rotate-[2deg] hover:rotate-0 transition-all duration-700">
                <ChatSimulator />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl animate-float lg:block hidden">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-500">
                       <Zap size={20} />
                    </div>
                    <div>
                       <p className="text-white font-bold text-sm">Respuesta Instantánea</p>
                       <p className="text-white/50 text-xs font-medium">Latencia &lt; 2s</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </main>

      {/* Footer Features (Responsive) */}
      <div className="w-full max-w-7xl px-6 py-10 lg:py-20 z-10">
         {/* Desktop Version: Simple Row */}
         <div className="hidden md:flex flex-wrap justify-center items-center gap-10 lg:gap-20 opacity-30">
            {[
              { icon: Zap, text: "Alta Velocidad" },
              { icon: ShieldCheck, text: "Seguro y Privado" },
              { icon: Clock, text: "Soporte 24/7" },
              { icon: LayoutGrid, text: "Fácil Integración" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                 <item.icon size={20} className="text-primary" />
                 <span className="text-white font-black uppercase tracking-[0.2em] text-[10px] lg:text-xs">{item.text}</span>
              </div>
            ))}
         </div>

         {/* Mobile Version: 2x2 Grid with Glass Cards */}
         <div className="grid grid-cols-2 md:hidden gap-4">
            {[
              { icon: Zap, text: "Alta Velocidad" },
              { icon: ShieldCheck, text: "Seguro y Privado" },
              { icon: Clock, text: "Soporte 24/7" },
              { icon: LayoutGrid, text: "Fácil Integración" }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-xl border border-primary/20 p-6 rounded-[2rem] flex flex-col items-center justify-center text-center space-y-4 shadow-xl">
                 <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                    <item.icon size={28} />
                 </div>
                 <span className="text-white font-bold text-sm leading-tight uppercase tracking-wider">{item.text}</span>
              </div>
            ))}
         </div>
      </div>

      {/* Simplified Footer */}
      <footer className="w-full py-10 border-t border-white/5 bg-white/[0.01] z-10 text-center">
         <p className="text-slate-600 text-xs font-medium">© 2026 Nuvora AI. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
