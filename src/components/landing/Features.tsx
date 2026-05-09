"use client";

import { motion } from "framer-motion";
import { MessageSquare, Zap, Shield, Globe, Clock, Sparkles, Brain, MousePointer2, Smartphone, BarChart3, Users, CalendarDays } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "IA con Cerebro Propio",
    description: "No es un bot de opciones. Usamos Gemini 1.5 Flash para entender el contexto y responder como un humano.",
    icon: Brain,
    color: "bg-blue-500",
  },
  {
    title: "Agenda de Turnos",
    description: "La IA gestiona tu disponibilidad y agenda citas directamente en WhatsApp sin que muevas un dedo.",
    icon: CalendarDays,
    color: "bg-brand-500",
  },
  {
    title: "Base de Conocimientos",
    description: "Subí tus PDFs o pasanos tu web. Tu bot aprenderá todo sobre tus servicios en segundos.",
    icon: Sparkles,
    color: "bg-purple-500",
  },
  {
    title: "Detección de Intenciones",
    description: "Sabe cuándo alguien quiere comprar, cuándo tiene una duda y cuándo necesita hablar con vos.",
    icon: MousePointer2,
    color: "bg-orange-500",
  },
  {
    title: "Panel de Analíticas",
    description: "Mirá cuántos interesados se convirtieron en clientes y el rendimiento de tu bot en tiempo real.",
    icon: BarChart3,
    color: "bg-indigo-500",
  },
  {
    title: "Seguridad Total",
    description: "Cumplimos con los estándares más altos para que la info de tus clientes esté siempre protegida.",
    icon: Shield,
    color: "bg-whatsapp-green",
  },
];

const industries = [
  {
    name: "Clínicas Dentales",
    description: "Gestión de turnos, recordatorios y respuestas a dudas sobre tratamientos.",
    icon: Sparkles,
    color: "from-blue-500 to-cyan-400",
    tag: "SALUD"
  },
  {
    name: "Restaurantes",
    description: "Reservas de mesas, envío de menú y gestión de pedidos por WhatsApp.",
    icon: Clock,
    color: "from-orange-500 to-red-400",
    tag: "GASTRONOMÍA"
  },
  {
    name: "Gimnasios",
    description: "Inscripciones, horarios de clases y consultas sobre membresías.",
    icon: Users,
    color: "from-purple-500 to-pink-400",
    tag: "FITNESS"
  },
  {
    name: "Comercios",
    description: "Atención 24/7, catálogo de productos y seguimiento de envíos.",
    icon: Smartphone,
    color: "from-brand-500 to-whatsapp-green",
    tag: "RETAIL"
  },
];

export function Features() {
  return (
    <section id="features" className="py-32 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <Badge variant="outline" className="mb-4 border-brand-500 text-brand-600 px-3 py-1 font-bold">Funciones Premium</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Todo lo que necesitás para <span className="text-brand-500">automatizar tu éxito</span>.</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Diseñamos una plataforma potente pero simple, para que te enfoqués en lo que importa: hacer crecer tu negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group border-slate-100 dark:border-slate-800 hover:border-brand-500/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-brand-500/5 overflow-hidden h-full rounded-[2rem] glass">
                <CardContent className="p-8">
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300", feature.color)}>
                    <feature.icon className="text-white w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-40">
           <div className="text-center mb-16">
              <h3 className="text-3xl font-bold mb-4">Soluciones para cada industria</h3>
              <p className="text-slate-500 font-medium">ChatFlow se adapta a las necesidades específicas de tu sector.</p>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                <Card className="border-none shadow-premium overflow-hidden h-full glass group">
                  <CardContent className="p-0 flex flex-col md:flex-row h-full">
                    <div className={cn("w-full md:w-48 bg-gradient-to-br flex flex-col items-center justify-center p-6 text-white shrink-0 transition-transform group-hover:scale-105 duration-500", industry.color)}>
                      <industry.icon className="w-16 h-16 mb-4" />
                      <p className="text-[10px] font-bold uppercase tracking-widest text-center opacity-80">{industry.tag}</p>
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <h4 className="text-xl font-bold mb-3">{industry.name}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                        {industry.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
                </motion.div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
}
