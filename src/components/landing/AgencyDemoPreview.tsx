"use client";

import { motion } from "framer-motion";
import { ChatSimulator } from "@/components/chat/ChatSimulator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Zap, CheckCircle2 } from "lucide-react";

export function AgencyDemoPreview() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
             <div className="relative group">
                <div className="absolute -inset-4 bg-primary/10 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative scale-90 sm:scale-100">
                  <ChatSimulator />
                </div>
             </div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2 space-y-10">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white leading-[0.95]">
                Nuvora AI: Tu negocio, <span className="text-primary">24/7.</span>
              </h2>
              <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-xl">
                Nuestro producto estrella. Un asistente de inteligencia artificial que entiende tu negocio y atiende a tus clientes con precisión quirúrgica.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
               {[
                 "Respondé automáticamente",
                 "Atención 24/7 inmediata",
                 "Captación de leads 10x",
                 "Agendá turnos sin errores"
               ].map((benefit, i) => (
                 <div key={i} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                       <CheckCircle2 size={20} />
                    </div>
                    <span className="text-white font-bold tracking-tight">{benefit}</span>
                 </div>
               ))}
            </div>

            <div className="pt-6">
               <Button size="lg" className="bg-primary hover:bg-brand-600 text-white rounded-full px-12 h-18 text-xl font-black shadow-2xl shadow-primary/30" asChild>
                  <Link href="/nuvora-ai">Nuvora AI</Link>
               </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
