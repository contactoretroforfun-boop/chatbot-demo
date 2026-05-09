"use client";

import { Button } from "@/components/ui/button";
import { Check, Sparkles, Zap, Shield, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const tiers = [
  {
    name: "Starter",
    price: "$29",
    description: "Ideal para negocios locales que recién arrancan con la automatización.",
    features: [
      "Hasta 500 mensajes de IA/mes",
      "Integración con WhatsApp API",
      "Detección básica de intención",
      "Panel de gestión de interesados",
      "Soporte por email",
    ],
    buttonText: "Arrancá tu Prueba Gratis",
    popular: false,
    color: "bg-slate-50 dark:bg-slate-900/50"
  },
  {
    name: "Business",
    price: "$79",
    description: "Perfecto para clínicas, restaurantes y estudios con mucho movimiento.",
    features: [
      "Mensajes de IA ilimitados",
      "Gemini 1.5 Flash avanzado",
      "Sistema de turnos automatizado",
      "Base de conocimientos (PDF/URLs)",
      "Sincronización con CRM y Google",
      "Soporte prioritario por WhatsApp",
    ],
    buttonText: "Empezá Ahora",
    popular: true,
    color: "bg-white dark:bg-slate-900"
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Para franquicias grandes y marcas de e-commerce con mucho volumen.",
    features: [
      "Entrenamiento de IA dedicado",
      "Gestión de múltiples números",
      "Acceso a API para flujos a medida",
      "Account Manager dedicado",
      "Región de datos personalizada",
      "Garantía de SLA",
    ],
    buttonText: "Hablemos con Ventas",
    popular: false,
    color: "bg-slate-50 dark:bg-slate-900/50"
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <Badge variant="outline" className="mb-4 border-brand-500 text-brand-600 px-3 py-1">Planes y Precios</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Precios simples, sin vueltas.</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">Elegí el plan que mejor se adapte al tamaño de tu negocio.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-10 rounded-3xl border transition-all duration-300 ${
                tier.popular 
                  ? "border-brand-500 shadow-[0_32px_64px_-16px_rgba(0,168,132,0.15)] scale-105 z-10 bg-white dark:bg-slate-900" 
                  : "border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50"
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-500 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                  <Sparkles size={12} fill="currentColor" /> El Más Elegido
                </div>
              )}
              
              <div className="mb-10">
                <h3 className="text-xl font-bold mb-4">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-5xl font-extrabold tracking-tight">{tier.price}</span>
                  {tier.price !== "Custom" && <span className="text-slate-500 font-medium">/mes</span>}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <div className="space-y-4 mb-12">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Qué incluye:</p>
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 list-none">
                    <div className="mt-1 bg-brand-500/10 dark:bg-brand-500/20 p-1 rounded-full shrink-0">
                      <Check className="w-3 h-3 text-brand-600 dark:text-brand-400" />
                    </div>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{feature}</span>
                  </li>
                ))}
              </div>

              <Button 
                variant={tier.popular ? "default" : "outline"} 
                className={`w-full rounded-2xl h-14 text-md font-bold transition-all group ${
                  tier.popular ? "bg-brand-500 hover:bg-brand-600 shadow-xl shadow-brand-500/20" : "hover:bg-slate-100"
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

        <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-8 p-8 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800">
           <div className="flex items-center gap-3">
              <Shield className="text-brand-500 w-6 h-6" />
              <span className="text-sm font-medium">Seguridad de grado empresarial</span>
           </div>
           <div className="w-px h-6 bg-slate-200 dark:bg-slate-800 hidden md:block" />
           <div className="flex items-center gap-3">
              <Zap className="text-brand-500 w-6 h-6" />
              <span className="text-sm font-medium">Cancelá cuando quieras</span>
           </div>
           <div className="w-px h-6 bg-slate-200 dark:bg-slate-800 hidden md:block" />
           <div className="flex items-center gap-3">
              <Check className="text-brand-500 w-6 h-6" />
              <span className="text-sm font-medium">14 días de prueba gratis</span>
           </div>
        </div>
      </div>
    </section>
  );
}
