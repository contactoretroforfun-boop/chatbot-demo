"use client";

import { Button } from "@/components/ui/button";
import { Check, Sparkles, Zap, Shield, ArrowRight, MessageCircle, Layout, Globe, MousePointer2 } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const packs = [
  {
    name: "Pack Inicio Digital",
    price: "$750",
    setup: "Setup inicial",
    monthly: "$30/mes",
    description: "Ideal para negocios que quieren comenzar con una presencia online profesional sin preocupaciones técnicas.",
    features: [
      "Landing Page premium",
      "Diseño responsive optimizado",
      "Integración WhatsApp",
      "Formularios de contacto",
      "Optimización mobile avanzada",
      "Copy orientado a conversión",
      "Hosting + Mantenimiento gestionado",
      "SSL y soporte básico"
    ],
    popular: false,
    href: "https://wa.me/59891746967?text=" + encodeURIComponent("Hola Nuvora! Estoy interesado en el Pack Inicio Digital.")
  },
  {
    name: "Pack Atención Inteligente",
    price: "$1400",
    setup: "Setup completo",
    monthly: "$120/mes",
    description: "Para negocios con muchas consultas que quieren ahorrar tiempo y ofrecer una atención moderna.",
    features: [
      "Sitio web profesional completo",
      "Nuvora AI para WhatsApp",
      "Atención automática 24/7",
      "Automatización de consultas",
      "Captación automática de clientes",
      "Integración completa WhatsApp",
      "SEO Local básico",
      "Soporte técnico prioritario"
    ],
    popular: true,
    href: "https://wa.me/59891746967?text=" + encodeURIComponent("Hola Nuvora! Estoy interesado en el Pack Atención Inteligente.")
  }
];

const individualServices = [
  {
    title: "Landing Page Premium",
    price: "$400",
    type: "Desde",
    optional: "$30 USD/mes",
    features: ["Diseño premium", "Responsive", "WhatsApp", "Deploy"],
    icon: Layout,
    whatsappMsg: "Hola Nuvora! Me gustaría consultar por el servicio de Landing Page Premium."
  },
  {
    title: "Sitio Web Profesional",
    price: "$850",
    type: "Desde",
    optional: "$80 USD/mes",
    features: ["Multipágina", "Personalizado", "SEO Inicial", "Configuración"],
    icon: Globe,
    whatsappMsg: "Hola Nuvora! Me gustaría consultar por el servicio de Sitio Web Profesional."
  },
  {
    title: "Nuvora AI",
    price: "$800",
    type: "Setup desde",
    optional: "$80-$120 USD/mes",
    features: ["Asistente 24/7", "FAQs", "Leads", "Hosting IA"],
    icon: MessageCircle,
    whatsappMsg: "Hola Nuvora! Me gustaría consultar por el servicio de Nuvora AI."
  },
  {
    title: "SEO Local / Maps",
    price: "$120",
    type: "Mes",
    features: ["Optimización Maps", "SEO Local", "Monitoreo"],
    icon: Zap,
    whatsappMsg: "Hola Nuvora! Me gustaría consultar por el servicio de SEO Local / Google Maps."
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-40 relative overflow-hidden bg-[#070B14]">
      {/* Cinematic Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[40%] h-[40%] bg-primary/10 blur-[150px] rounded-full opacity-30" />
        <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[30%] bg-accent/5 blur-[120px] rounded-full opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-32">
          <Badge variant="outline" className="mb-6 border-primary/30 text-neon px-4 py-1.5 font-bold bg-primary/5 rounded-full uppercase tracking-widest">
            Inversión Inteligente
          </Badge>
          <h2 className="text-4xl md:text-8xl font-black mb-8 text-white tracking-tighter leading-none">
            Elegí tu camino al <br /><span className="text-neon italic">éxito digital.</span>
          </h2>
          <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Precios estimados para tu referencia. Realizamos un <span className="text-white font-bold">presupuesto personalizado</span> adaptado a las necesidades específicas de tu negocio.
          </p>
        </div>

        {/* Packs Section */}
        <div className="mb-40">
           <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-white/10" />
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-slate-500">Packs de Éxito Digital</h3>
              <div className="h-px flex-1 bg-white/10" />
           </div>

           <div className="grid lg:grid-cols-2 gap-10">
              {packs.map((pack, i) => (
                <motion.div
                  key={pack.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border backdrop-blur-3xl transition-all duration-500 group ${
                    pack.popular 
                      ? "border-primary/50 bg-primary/5 shadow-[0_32px_64px_-16px_rgba(124,92,255,0.15)]" 
                      : "border-white/10 bg-white/[0.02]"
                  }`}
                >
                  {pack.popular && (
                    <div className="absolute top-0 right-6 md:right-12 -translate-y-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 md:px-8 py-3 rounded-full shadow-2xl flex items-center gap-2">
                       <Sparkles size={14} fill="currentColor" /> MÁS POPULAR
                    </div>
                  )}

                  <div className="flex flex-col h-full">
                    <div className="mb-10">
                       <h4 className="text-3xl font-black text-white mb-4 tracking-tight">{pack.name}</h4>
                       <p className="text-slate-400 font-medium leading-relaxed max-w-md">{pack.description}</p>
                    </div>

                    <div className="mb-12">
                       <div className="flex items-baseline gap-3 mb-2">
                          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Desde</span>
                          <span className="text-7xl font-black text-white tracking-tighter">{pack.price}</span>
                       </div>
                       <div className="flex items-center gap-3 text-neon font-black text-lg">
                          <span>{pack.monthly}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                          <span className="text-slate-500 text-sm">{pack.setup}</span>
                       </div>
                    </div>

                    <div className="space-y-5 mb-12 flex-1">
                       {pack.features.map((feature, idx) => (
                         <div key={idx} className="flex items-center gap-4 group/item">
                            <div className="w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform">
                               <Check size={14} className="text-primary" />
                            </div>
                            <span className="text-slate-300 font-bold text-sm tracking-tight">{feature}</span>
                         </div>
                       ))}
                    </div>

                    <Button 
                      className={`w-full h-20 rounded-3xl text-xl font-black transition-all gap-4 ${
                        pack.popular 
                          ? "bg-primary hover:bg-brand-600 text-white shadow-xl shadow-primary/20" 
                          : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                      }`}
                      asChild
                    >
                      <Link href={pack.href} target="_blank" className="flex items-center justify-center">
                        Contactar <ArrowRight size={24} />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              ))}
           </div>
        </div>

        {/* Individual Services */}
        <div>
           <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-white/10" />
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-slate-500">Servicios Individuales</h3>
              <div className="h-px flex-1 bg-white/10" />
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {individualServices.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-white/10 bg-white/[0.01] hover:bg-white/[0.03] hover:border-primary/20 transition-all duration-500 group"
                >
                   <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 mb-8 group-hover:scale-110 group-hover:text-primary transition-all duration-500">
                      <service.icon size={28} />
                   </div>
                   
                   <h4 className="text-2xl font-black text-white mb-2 tracking-tight">{service.title}</h4>
                   <div className="flex items-baseline gap-2 mb-6">
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{service.type}</span>
                      <span className="text-4xl font-black text-white tracking-tighter">{service.price}</span>
                   </div>

                   <div className="space-y-3 mb-8">
                      {service.features.map((f, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                           <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                           <span className="text-slate-400 font-bold text-xs">{f}</span>
                        </div>
                      ))}
                   </div>

                   {service.optional && (
                     <div className="pt-6 border-t border-white/5 mb-8">
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Mantenimiento opcional</p>
                        <p className="text-sm font-black text-neon">{service.optional}</p>
                     </div>
                   )}

                   <Button variant="ghost" className="w-full justify-between h-14 rounded-2xl border border-white/5 hover:bg-primary/10 hover:text-primary font-black group/btn" asChild>
                      <Link href={`https://wa.me/59891746967?text=${encodeURIComponent(service.whatsappMsg)}`} target="_blank" className="flex items-center justify-between">
                         Consultar <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                   </Button>
                </motion.div>
              ))}
           </div>
        </div>

        {/* Final Trust Note */}
        <div className="mt-40 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent flex flex-col md:flex-row items-center justify-between gap-10">
           <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                 <Shield size={40} />
              </div>
              <div className="space-y-1">
                 <h4 className="text-2xl font-black text-white">Presupuesto a medida</h4>
                 <p className="text-slate-500 font-medium leading-tight">Cada negocio es único. Ajustamos nuestros servicios a tu realidad.</p>
              </div>
           </div>
           <Button size="lg" className="bg-white text-black hover:bg-slate-200 rounded-full px-8 md:px-12 h-20 text-base md:text-xl font-black transition-transform hover:scale-105 whitespace-nowrap" asChild>
              <Link href={`https://wa.me/59891746967?text=${encodeURIComponent("Hola Nuvora! Me gustaría solicitar una cotización personalizada para mi negocio.")}`} target="_blank">
                 Solicitar Cotización Gratis
              </Link>
           </Button>
        </div>
      </div>
    </section>
  );
}
