"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Sparkles, Brain, MousePointer2, Smartphone, BarChart3, Users, CalendarDays } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "IA con Cerebro Propio",
    description: "No es un bot de opciones. Usamos modelos avanzados para entender el contexto y responder como un experto de tu equipo.",
    icon: Brain,
    color: "bg-primary/20 text-primary border-primary/20",
  },
  {
    title: "Agenda Inteligente",
    description: "Nuvora gestiona tu disponibilidad y agenda citas directamente en WhatsApp, sincronizando todo con tu calendario.",
    icon: CalendarDays,
    color: "bg-blue-500/20 text-blue-400 border-blue-500/20",
  },
  {
    title: "Base de Conocimientos",
    description: "Subí tus PDFs o pasanos tu web. Tu asistente aprenderá todo sobre tus servicios y precios en cuestión de segundos.",
    icon: Sparkles,
    color: "bg-purple-500/20 text-purple-400 border-purple-500/20",
  },
  {
    title: "Detección de Intenciones",
    description: "Identifica cuándo alguien quiere comprar, cuándo tiene una duda técnica y cuándo requiere atención humana.",
    icon: MousePointer2,
    color: "bg-accent/20 text-accent border-accent/20",
  },
  {
    title: "Panel de Analíticas",
    description: "Visualizá métricas de conversión, mensajes gestionados y el ROI generado por tu asistente en tiempo real.",
    icon: BarChart3,
    color: "bg-indigo-500/20 text-indigo-400 border-indigo-500/20",
  },
  {
    title: "Seguridad Premium",
    description: "Protección de datos de nivel bancario para que la información de tus clientes esté siempre cifrada y segura.",
    icon: Shield,
    color: "bg-green-500/20 text-green-400 border-green-500/20",
  },
];

const industries = [
  {
    name: "Clínicas & Salud",
    description: "Gestión de turnos, recordatorios automáticos y respuestas a dudas sobre tratamientos médicos.",
    icon: Sparkles,
    color: "from-blue-600/20 to-primary/20",
    tag: "SALUD"
  },
  {
    name: "Gastronomía",
    description: "Reservas de mesas, envío de menú interactivo y gestión de pedidos take-away por WhatsApp.",
    icon: Smartphone,
    color: "from-orange-600/20 to-red-600/20",
    tag: "RESTÓ"
  },
  {
    name: "Servicios & Fitness",
    description: "Inscripciones a clases, consulta de horarios y automatización de cobros y membresías.",
    icon: Users,
    color: "from-purple-600/20 to-pink-600/20",
    tag: "BIENESTAR"
  },
  {
    name: "E-commerce & Retail",
    description: "Atención 24/7, catálogo de productos inteligente y seguimiento de envíos en tiempo real.",
    icon: Zap,
    color: "from-primary/20 to-accent/20",
    tag: "VENTAS"
  },
];

export function Features() {
  return (
    <section id="features" className="py-32 bg-background relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary px-4 py-1.5 font-bold bg-primary/5 rounded-full">Funciones Premium</Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">Todo lo que necesitás para <br /><span className="text-gradient">escalar tu negocio</span>.</h2>
          <p className="text-xl text-slate-400 leading-relaxed font-medium">
            Diseñamos una plataforma de élite, orientada a resultados y simplicidad, para que la IA trabaje para vos.
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
              <Card className="group border-white/10 bg-card/40 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 shadow-sm hover:shadow-[0_20px_40px_rgba(124,92,255,0.1)] overflow-hidden h-full rounded-[2.5rem]">
                <CardContent className="p-10">
                  <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all group-hover:scale-110 duration-500 border shadow-lg", feature.color)}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-48">
           <div className="text-center mb-16">
              <h3 className="text-4xl font-bold mb-4 text-white">Soluciones por industria</h3>
              <p className="text-slate-400 font-medium text-lg">Nuvora se adapta a la lógica específica de cada sector.</p>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                <Card className="border-white/10 bg-card/40 backdrop-blur-sm overflow-hidden h-full rounded-[2rem] group hover:border-primary/30 transition-all duration-500">
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className={cn("w-full bg-gradient-to-br flex flex-col items-center justify-center p-10 text-white shrink-0 transition-transform group-hover:scale-105 duration-700", industry.color)}>
                      <industry.icon className="w-16 h-16 mb-4 text-white" />
                      <p className="text-[10px] font-bold uppercase tracking-widest text-center opacity-60 text-white">{industry.tag}</p>
                    </div>
                    <div className="p-8 flex flex-col justify-center text-center">
                      <h4 className="text-xl font-bold mb-3 text-white">{industry.name}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed font-medium">
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
