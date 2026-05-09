"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, Zap, Shield, ArrowRight, Play, Star } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white dark:bg-slate-950">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-500/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-whatsapp-teal/5 blur-[100px] rounded-full animate-pulse [animation-delay:2s]" />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Badge variant="secondary" className="mb-6 px-4 py-1.5 rounded-full bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400 border-none animate-in">
              <Zap className="w-3.5 h-3.5 mr-2 fill-current" />
              Elegido por más de 2.000 negocios en crecimiento
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.05] text-slate-900 dark:text-white">
              Hacé crecer tu negocio con <br />
              <span className="text-gradient">IA para WhatsApp</span>
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Automatizá tu atención al cliente, captá más interesados y gestioná turnos las 24 hs. 
              La solución definitiva de IA diseñada para clínicas, locales y comercios que no paran.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="rounded-full px-10 h-16 text-lg gap-2 shadow-2xl shadow-brand-500/40 bg-brand-500 hover:bg-brand-600 transition-all hover:scale-105 active:scale-95 font-bold" asChild>
                <Link href="/auth/signup">
                  Arrancá Gratis <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-10 h-16 text-lg gap-2 group border-2 border-slate-200 dark:border-slate-800 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-all font-bold" asChild>
                <Link href="/demo">
                  <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded-full group-hover:bg-brand-500 group-hover:text-white transition-colors shadow-inner">
                    <Zap className="w-4 h-4 fill-current" />
                  </div>
                  Probar Demo
                </Link>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-slate-500 dark:text-slate-400 font-medium">
               <div className="flex items-center gap-2">
                 <div className="flex -space-x-2">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-950 bg-slate-200" />
                   ))}
                 </div>
                 <div className="flex items-center gap-1 ml-2">
                   <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                   <span className="font-bold text-slate-900 dark:text-white">4.9/5</span> de puntaje
                 </div>
               </div>
               <div className="flex items-center gap-2">
                 <CheckCircle2 className="text-brand-500 w-5 h-5" />
                 14 días de prueba gratis
               </div>
               <div className="flex items-center gap-2">
                 <CheckCircle2 className="text-brand-500 w-5 h-5" />
                 Sin costos ocultos
               </div>
            </div>
          </motion.div>
        </div>

        {/* Hero Interactive UI Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative max-w-5xl mx-auto group"
        >
          {/* Main App Window */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden aspect-[16/10] relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-slate-50/50 to-white dark:from-slate-900 dark:to-slate-900/50" />
             
             {/* Window Controls */}
             <div className="h-12 border-b border-slate-100 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 flex items-center px-4 gap-2 backdrop-blur-sm relative z-10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-800" />
                  <div className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-800" />
                  <div className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-800" />
                </div>
                <div className="ml-4 flex-1 max-w-sm h-6 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center px-3">
                  <div className="w-full h-1 bg-slate-200 dark:bg-slate-700 rounded-full" />
                </div>
             </div>

             {/* Dashboard Content Mockup */}
             <div className="p-8 grid grid-cols-12 gap-6 relative z-10">
                <div className="col-span-3 space-y-4">
                  <div className="h-4 w-full bg-slate-100 dark:bg-slate-800 rounded" />
                  <div className="h-4 w-4/5 bg-slate-100 dark:bg-slate-800 rounded" />
                  <div className="h-4 w-5/6 bg-brand-500/10 rounded" />
                  <div className="h-4 w-2/3 bg-slate-100 dark:bg-slate-800 rounded" />
                </div>
                <div className="col-span-9 space-y-6">
                  <div className="grid grid-cols-3 gap-4">
                    {[1,2,3].map(i => (
                      <div key={i} className="h-24 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 p-4 shadow-sm">
                        <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-slate-700 mb-2" />
                        <div className="h-2 w-1/2 bg-slate-100 dark:bg-slate-700 rounded" />
                      </div>
                    ))}
                  </div>
                  <div className="h-48 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm overflow-hidden p-6">
                     <div className="flex gap-2 items-end h-full">
                        {[40, 70, 45, 90, 65, 80, 55, 95].map((h, i) => (
                          <motion.div 
                            key={i} 
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ delay: 1 + (i * 0.1), duration: 1 }}
                            className="flex-1 bg-brand-500/20 rounded-t-md relative group/bar"
                          >
                            <div className="absolute inset-0 bg-brand-500 opacity-0 group-hover/bar:opacity-100 transition-opacity rounded-t-md" />
                          </motion.div>
                        ))}
                     </div>
                  </div>
                </div>
             </div>
          </div>
          
          {/* Floating WhatsApp UI Element */}
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute -bottom-6 -right-6 md:right-[-8%] w-80 bg-white dark:bg-slate-900 p-0 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-slate-100 dark:border-slate-800 overflow-hidden glass"
          >
            <div className="bg-[#075e54] p-3 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
                   <MessageCircle className="w-5 h-5 text-[#075e54]" />
                </div>
                <div>
                  <p className="text-[11px] font-bold">Bot Clínica Salud</p>
                  <p className="text-[9px] opacity-80">en línea</p>
                </div>
              </div>
              <Badge className="bg-whatsapp-green/20 text-whatsapp-green border-none text-[9px]">IA ACTIVA</Badge>
            </div>
            <div className="p-4 space-y-3 bg-[#efeae2] dark:bg-slate-950/50 min-h-[160px]">
               <div className="bg-white dark:bg-slate-800 p-2.5 rounded-lg rounded-tl-none shadow-sm text-[11px] max-w-[85%]">
                 Hola, quería sacar un turno para un control dental mañana.
               </div>
               <motion.div 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="bg-[#dcf8c6] dark:bg-brand-900/40 p-2.5 rounded-lg rounded-tr-none shadow-sm text-[11px] max-w-[85%] ml-auto text-right"
              >
                 ¡Obvio! Tenemos lugar a las 9:00 hs y a las 14:30 hs. ¿Te queda bien alguno?
               </motion.div>
               <div className="flex gap-2 justify-center mt-2">
                  <Badge variant="outline" className="bg-white dark:bg-slate-800 cursor-pointer hover:bg-slate-50 text-[10px]">9:00 hs</Badge>
                  <Badge variant="outline" className="bg-white dark:bg-slate-800 cursor-pointer hover:bg-slate-50 text-[10px]">14:30 hs</Badge>
               </div>
            </div>
          </motion.div>

          {/* Analytics Floating Card */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute top-1/4 -left-12 hidden lg:block w-48 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 glass"
          >
             <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-1">Interesados Hoy</p>
             <div className="flex items-end gap-2">
               <h4 className="text-2xl font-bold">24</h4>
               <span className="text-[10px] text-green-500 font-bold mb-1">+12%</span>
             </div>
             <div className="mt-3 h-1 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '70%' }}
                  transition={{ delay: 1.5, duration: 1 }}
                  className="h-full bg-brand-500" 
                />
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
