"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";

export function AgencyCTA() {
  return (
    <section className="py-40 relative overflow-hidden">
      {/* Intense Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-primary/20 blur-[180px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-card/40 backdrop-blur-3xl border border-white/10 rounded-[4rem] p-16 md:p-32 shadow-2xl relative overflow-hidden"
        >
          {/* Internal Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 space-y-12">
            <h2 className="text-5xl md:text-9xl font-black tracking-tighter text-white leading-none">
              Modernizá tu <br /> <span className="text-neon italic">negocio.</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
              No perdás más tiempo en tareas repetitivas. Empezá hoy a <span className="text-neon">automatizar tu éxito con Nuvora Agency.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
               <Button size="lg" className="bg-primary hover:bg-brand-600 text-white rounded-full px-12 h-20 text-2xl font-black shadow-2xl shadow-primary/30 group" asChild>
                  <Link href={`https://wa.me/59891746967?text=${encodeURIComponent("Hola Nuvora! Quiero modernizar mi negocio, ¿podemos hablar?")}`} target="_blank" className="flex items-center gap-4">
                     <MessageCircle className="w-8 h-8" /> Hablar por WhatsApp
                  </Link>
               </Button>
               <Button size="lg" variant="outline" className="text-white border-white/10 hover:bg-white/5 rounded-full px-12 h-20 text-2xl font-black" asChild>
                  <Link href="/nuvora-ai" className="flex items-center justify-center">
                     Nuvora AI
                  </Link>
               </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
