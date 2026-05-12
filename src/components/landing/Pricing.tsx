"use client";

import { Button } from "@/components/ui/button";
import { Check, Sparkles, Zap, Shield, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const tiers = [
  {
    name: "Standard",
    price: "$29",
    description: "Para profesionales y pequeños negocios que buscan excelencia.",
    features: [
      "Hasta 1.000 mensajes de IA/mes",
      "Integración WhatsApp API Premium",
      "Entrenamiento básico de IA",
      "Gestión de leads inteligente",
      "Soporte prioritario",
    ],
    buttonText: "Prueba Gratis de 14 Días",
    popular: false,
    color: "bg-card/40"
  },
  {
    name: "Pro",
    price: "$79",
    description: "La solución completa para clínicas y empresas con alto flujo.",
    features: [
      "Mensajes de IA ilimitados",
      "Modelos de IA de última generación",
      "Agendamiento automático de citas",
      "Base de conocimientos avanzada",
      "Sincronización con calendarios",
      "Account Manager dedicado",
    ],
    buttonText: "Empezar Ahora",
    popular: true,
    color: "bg-card/60"
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Para grandes marcas y franquicias con necesidades a medida.",
    features: [
      "IA entrenada específicamente",
      "Gestión de múltiples canales",
      "API personalizada & Webhooks",
      "Infraestructura dedicada",
      "Acuerdos de nivel de servicio (SLA)",
      "Seguridad avanzada (SSO/Audit)",
    ],
    buttonText: "Consultar Solución",
    popular: false,
    color: "bg-card/40"
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 relative overflow-hidden bg-background">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary px-4 py-1.5 font-bold bg-primary/5 rounded-full">Inversión Inteligente</Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">Precios transparentes.</h2>
          <p className="text-xl text-slate-400 font-medium">Elegí el plan diseñado para potenciar el crecimiento de tu negocio.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-12 rounded-[2.5rem] border transition-all duration-500 backdrop-blur-sm ${
                tier.popular 
                  ? "border-primary bg-card/60 shadow-[0_32px_64px_-16px_rgba(124,92,255,0.2)] scale-105 z-10" 
                  : "border-white/10 bg-card/30"
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-6 py-2 rounded-full shadow-[0_10px_20px_rgba(124,92,255,0.4)] flex items-center gap-1.5">
                  <Sparkles size={12} fill="currentColor" /> RECOMENDADO
                </div>
              )}
              
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-4 text-white">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-4 text-white">
                  <span className="text-6xl font-extrabold tracking-tight">{tier.price}</span>
                  {tier.price !== "Custom" && <span className="text-slate-400 font-medium text-lg">/mes</span>}
                </div>
                <p className="text-slate-400 font-medium leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <div className="space-y-5 mb-12">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">¿Qué está incluido?</p>
                <div className="space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-4 list-none">
                      <div className="mt-1 bg-primary/20 p-1 rounded-full shrink-0">
                        <Check className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-slate-300">{feature}</span>
                    </li>
                  ))}
                </div>
              </div>

              <Button 
                variant={tier.popular ? "default" : "outline"} 
                className={`w-full rounded-2xl h-14 text-md font-bold transition-all group ${
                  tier.popular 
                    ? "bg-primary hover:bg-brand-600 shadow-xl shadow-primary/20 text-white" 
                    : "border-white/10 text-white hover:bg-white/5"
                }`}
                asChild
              >
                <Link href="/auth/signup">
                  {tier.buttonText} <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 flex flex-col md:flex-row items-center justify-center gap-12 p-10 rounded-[2.5rem] border border-white/5 bg-white/[0.02]">
           <div className="flex items-center gap-3">
              <Shield className="text-primary w-6 h-6" />
              <span className="text-sm font-medium text-slate-300">Cifrado de grado militar</span>
           </div>
           <div className="w-px h-6 bg-white/5 hidden md:block" />
           <div className="flex items-center gap-3">
              <Zap className="text-primary w-6 h-6" />
              <span className="text-sm font-medium text-slate-300">Escalabilidad inmediata</span>
           </div>
           <div className="w-px h-6 bg-white/5 hidden md:block" />
           <div className="flex items-center gap-3">
              <Check className="text-primary w-6 h-6" />
              <span className="text-sm font-medium text-slate-300">Soporte 24/7 dedicado</span>
           </div>
        </div>
      </div>
    </section>
  );
}
