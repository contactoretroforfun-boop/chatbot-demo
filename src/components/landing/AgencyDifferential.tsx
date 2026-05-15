"use client";

import { motion } from "framer-motion";
import { Zap, Shield, UserCheck, BarChart3 } from "lucide-react";

const differentials = [
  {
    title: "Rapidez Extrema",
    description: "Nuestros sistemas responden en menos de 2 segundos. Tus clientes nunca esperan.",
    icon: Zap
  },
  {
    title: "Imagen Profesional",
    description: "Elevamos la percepción de tu marca con una atención impecable y moderna.",
    icon: Shield
  },
  {
    title: "Experiencia Humana",
    description: "IA entrenada para entender el contexto y sonar natural, no como un bot aburrido.",
    icon: UserCheck
  },
  {
    title: "Datos en Tiempo Real",
    description: "Visualizá cada consulta y optimizá tu conversión con métricas claras.",
    icon: BarChart3
  }
];

export function AgencyDifferential() {
  return (
    <section id="features" className="py-32 bg-[#070B14]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase leading-none">
                ¿Por qué elegir <span className="text-neon">Nuvora?</span>
              </h2>
              <p className="text-xl text-slate-400 font-medium leading-relaxed">
                No somos solo una agencia de marketing. Somos tu socio tecnológico para la nueva era digital.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {differentials.map((diff, index) => (
                <div key={index} className="space-y-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-500">
                    <diff.icon size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-white tracking-tight">{diff.title}</h4>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed">{diff.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
             <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" />
             <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 bg-card/40 backdrop-blur-3xl p-12 flex items-center justify-center shadow-2xl">
                <div className="text-center space-y-8">
                   <div className="text-7xl md:text-9xl font-black text-white tracking-tighter animate-pulse">
                      +10x
                   </div>
                   <p className="text-2xl font-black text-neon uppercase tracking-widest">
                      Más eficiencia
                   </p>
                   <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
                   <p className="text-slate-400 font-medium">
                      Negocios que automatizan con nosotros <br /> multiplican su capacidad de atención.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
