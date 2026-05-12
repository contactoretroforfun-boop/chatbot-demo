"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, Zap, Shield, ArrowRight, Sparkles, Star } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#070B14]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-accent/10 blur-[100px] rounded-full animate-pulse [animation-delay:2s]" />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] brightness-100 contrast-150 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Badge variant="secondary" className="mb-6 px-4 py-1.5 rounded-full bg-white/5 text-primary border border-white/10 animate-in">
              <Sparkles className="w-3.5 h-3.5 mr-2 fill-current" />
              La nueva era de la automatización por WhatsApp
            </Badge>
            
            <h1 className="text-5xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.05] text-white">
              Atención automática. <br />
              <span className="text-gradient">Más clientes.</span>
            </h1>
            
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Asistente IA para responder consultas, brindar información y agendar citas 24/7. 
              La solución premium para negocios que buscan excelencia en su atención.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="rounded-full px-10 h-16 text-lg gap-2 shadow-2xl shadow-primary/20 bg-primary hover:bg-brand-600 transition-all hover:scale-105 active:scale-95 font-bold text-white" asChild>
                <Link href="/auth/signup">
                  Empezar Ahora <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-10 h-16 text-lg gap-2 group border-white/10 hover:bg-white/5 transition-all font-bold text-white" asChild>
                <Link href="/demo">
                  <div className="bg-white/5 p-2 rounded-full group-hover:bg-primary group-hover:text-white transition-colors shadow-inner">
                    <Zap className="w-4 h-4 fill-current" />
                  </div>
                  Ver Demo en Vivo
                </Link>
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-6 text-sm text-slate-400 font-medium">
               <div className="flex items-center gap-3">
                 <div className="flex -space-x-2">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-slate-800" />
                   ))}
                 </div>
                 <div className="flex items-center gap-1.5 ml-1">
                   <Star className="w-4 h-4 fill-primary text-primary" />
                   <span className="font-bold text-white">4.9/5</span> por expertos en IA
                 </div>
               </div>
               <div className="flex items-center gap-2.5">
                 <CheckCircle2 className="text-primary w-5 h-5" />
                 Prueba de 14 días gratis
               </div>
               <div className="flex items-center gap-2.5">
                 <Shield className="text-primary w-5 h-5" />
                 Seguridad de grado empresarial
               </div>
            </div>
          </motion.div>
        </div>

        {/* Hero Interactive UI Preview - Refined for Nuvora AI */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative max-w-6xl mx-auto group"
        >
          {/* Main App Window (Glassmorphism) */}
          <div className="rounded-[2.5rem] border border-white/10 bg-[#0B1020]/50 backdrop-blur-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] overflow-hidden aspect-[16/10] relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent" />
             
             {/* Window Controls */}
             <div className="h-14 border-b border-white/5 bg-white/5 flex items-center px-8 gap-3 backdrop-blur-sm relative z-10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20" />
                </div>
                <div className="ml-6 flex-1 max-w-md h-8 bg-white/5 rounded-xl border border-white/5 flex items-center px-4">
                  <div className="w-full h-1.5 bg-white/10 rounded-full" />
                </div>
             </div>

             {/* Dashboard Content Mockup */}
             <div className="p-10 grid grid-cols-12 gap-8 relative z-10">
                <div className="col-span-3 space-y-6">
                  <div className="h-10 w-full bg-white/5 rounded-xl border border-white/5" />
                  <div className="space-y-3">
                    <div className="h-4 w-full bg-white/5 rounded-lg" />
                    <div className="h-4 w-4/5 bg-white/5 rounded-lg" />
                    <div className="h-4 w-5/6 bg-primary/20 rounded-lg border border-primary/20" />
                    <div className="h-4 w-2/3 bg-white/5 rounded-lg" />
                  </div>
                  <div className="pt-4">
                    <div className="h-24 w-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl border border-white/10 p-4">
                       <div className="w-8 h-8 rounded-lg bg-white/10 mb-2" />
                       <div className="h-2 w-1/2 bg-white/20 rounded" />
                    </div>
                  </div>
                </div>
                <div className="col-span-9 space-y-8">
                  <div className="grid grid-cols-3 gap-6">
                    {[1,2,3].map(i => (
                      <div key={i} className="h-32 bg-white/5 rounded-2xl border border-white/5 p-6 shadow-sm hover:bg-white/[0.07] transition-colors">
                        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                           <Sparkles className="w-5 h-5 text-primary" />
                        </div>
                        <div className="h-2 w-2/3 bg-white/20 rounded" />
                      </div>
                    ))}
                  </div>
                  <div className="h-56 bg-white/5 rounded-3xl border border-white/5 shadow-sm overflow-hidden p-8">
                     <div className="flex gap-3 items-end h-full">
                        {[40, 70, 45, 90, 65, 80, 55, 95, 60, 85, 50, 75].map((h, i) => (
                          <motion.div 
                            key={i} 
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ delay: 1 + (i * 0.05), duration: 1 }}
                            className="flex-1 bg-primary/30 rounded-t-lg relative group/bar"
                          >
                            <div className="absolute inset-0 bg-primary opacity-0 group-hover/bar:opacity-100 transition-opacity rounded-t-lg shadow-[0_0_20px_rgba(124,92,255,0.5)]" />
                          </motion.div>
                        ))}
                     </div>
                  </div>
                </div>
             </div>
          </div>
          
          {/* Floating Mobile Preview Element (SaaS Style) */}
          <motion.div 
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute -bottom-10 -right-10 md:right-[-5%] w-80 bg-[#0B1020] rounded-[3rem] shadow-[0_40px_80px_rgba(0,0,0,0.6)] border border-white/10 overflow-hidden"
          >
            {/* Phone Top Bar */}
            <div className="h-8 flex justify-center items-center">
               <div className="w-16 h-4 bg-white/5 rounded-full" />
            </div>
            
            <div className="bg-[#0B1020] p-4 text-white flex items-center justify-between border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/20">
                   <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[12px] font-bold">Nuvora AI Assistant</p>
                  <p className="text-[10px] text-primary font-medium">atención inteligente</p>
                </div>
              </div>
            </div>
            <div className="p-5 space-y-4 bg-background min-h-[220px]">
               <div className="bg-white/5 p-3.5 rounded-2xl rounded-tl-none border border-white/5 text-[11px] max-w-[85%] text-slate-300">
                 Hola! Quería consultar por los precios de sus servicios y si tienen disponibilidad para hoy.
               </div>
               <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 }}
                className="bg-primary/20 p-3.5 rounded-2xl rounded-tr-none border border-primary/20 text-[11px] max-w-[85%] ml-auto text-right text-white"
              >
                 ¡Hola! Con gusto. Contamos con 3 planes adaptados a cada negocio. Para hoy tenemos turnos libres a las 16:00 y 18:30. ¿Querés que te agende?
               </motion.div>
               <div className="flex gap-2 justify-center mt-3">
                  <Badge variant="outline" className="bg-white/5 border-white/10 text-white text-[10px] px-3 py-1 rounded-full">Consultar Planes</Badge>
                  <Badge variant="outline" className="bg-white/5 border-white/10 text-white text-[10px] px-3 py-1 rounded-full">Agendar Turno</Badge>
               </div>
            </div>
          </motion.div>

          {/* AI Status Floating Card */}
          <motion.div 
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute top-1/3 -left-16 hidden lg:block w-56 bg-[#0B1020]/80 backdrop-blur-xl p-5 rounded-3xl shadow-2xl border border-white/10"
          >
             <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Sistema Operativo</p>
             </div>
             <div className="space-y-4">
                <div>
                   <div className="flex justify-between text-[11px] mb-1.5">
                      <span className="text-slate-300">Eficiencia</span>
                      <span className="text-primary font-bold">98%</span>
                   </div>
                   <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '98%' }}
                        transition={{ delay: 2, duration: 1 }}
                        className="h-full bg-primary" 
                      />
                   </div>
                </div>
                <div className="flex items-center gap-3 pt-1">
                   <div className="p-2 bg-primary/20 rounded-lg">
                      <Zap className="w-4 h-4 text-primary" />
                   </div>
                   <div>
                      <p className="text-[12px] font-bold text-white">Latencia</p>
                      <p className="text-[10px] text-slate-500">1.2s promedio</p>
                   </div>
                </div>
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
