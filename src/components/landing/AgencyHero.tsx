"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";

export function AgencyHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Cinematic Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1400px] pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full opacity-50 animate-pulse" />
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 blur-[100px] rounded-full opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-white/70">
            Agencia Digital Premium · Uruguay
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-8xl font-black tracking-tight text-white mb-8 leading-[0.95] max-w-5xl mx-auto"
        >
          Automatización inteligente para <span className="text-neon italic">negocios modernos.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          Convertí más consultas en clientes automáticamente. Modernizá tu atención y escalá tu negocio con tecnología de vanguardia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Button size="lg" className="bg-primary hover:bg-brand-600 text-white rounded-full px-10 h-16 text-lg font-bold shadow-2xl shadow-primary/30 group" asChild>
            <Link href={`https://wa.me/59891746967?text=${encodeURIComponent("Hola Nuvora! Me gustaría obtener más información sobre sus servicios de automatización.")}`} target="_blank" className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5" /> Contactar ahora
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white/10 text-white hover:bg-white/5 rounded-full px-10 h-16 text-lg font-bold group" asChild>
            <Link href="/nuvora-ai" className="flex items-center gap-3">
              Nuvora AI <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Hero Animation Detail */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
