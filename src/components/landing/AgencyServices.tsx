"use client";

import { motion } from "framer-motion";
import { MessageSquare, Layout, Cpu, Search, CheckCircle2, ArrowRight, X } from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogDescription
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    title: "Asistentes IA para WhatsApp",
    shortDescription: "Atención al cliente 24/7. Respondé consultas, agendá citas y cerrá ventas automáticamente.",
    longDescription: "Nuestro sistema de Recepcionista Inteligente utiliza modelos de lenguaje avanzados para entender el contexto de tu negocio. No es un bot de opciones rígidas, es una IA que conversa de forma natural.",
    benefits: [
      "Agendamiento automático en tiempo real",
      "Calificación de leads sin intervención humana",
      "Disponibilidad total 24/7/365",
      "Integración oficial con WhatsApp API"
    ],
    icon: MessageSquare,
    color: "from-blue-500 to-primary",
    whatsappMsg: "Hola! Me interesa saber más sobre los Asistentes IA para WhatsApp."
  },
  {
    title: "Diseño Web Premium",
    shortDescription: "Sitios web de alto impacto visual y optimizados para conversión. Experiencias que wowean.",
    longDescription: "Creamos la cara digital de tu marca con una estética premium, moderna y minimalista. No solo hacemos webs bonitas; hacemos herramientas de venta ultra-rápidas.",
    benefits: [
      "Optimización extrema para dispositivos móviles",
      "Velocidad de carga de nivel élite",
      "Estructura orientada 100% a la conversión",
      "Diseño exclusivo (sin plantillas genéricas)"
    ],
    icon: Layout,
    color: "from-violet-500 to-primary",
    whatsappMsg: "Hola! Me interesa saber más sobre Diseño Web Premium."
  },
  {
    title: "Automatización de Negocios",
    shortDescription: "Optimizamos tus procesos internos para que ganes tiempo. Menos tareas repetitivas.",
    longDescription: "Analizamos tu flujo de trabajo actual y eliminamos los cuellos de botella mediante integraciones inteligentes. Hacemos que la tecnología trabaje para vos, no al revés.",
    benefits: [
      "Sincronización entre CRM y herramientas",
      "Automatización de facturación y reportes",
      "Gestión inteligente de bases de datos",
      "Ahorro masivo de horas administrativas"
    ],
    icon: Cpu,
    color: "from-indigo-500 to-accent",
    whatsappMsg: "Hola! Me interesa saber más sobre Automatización de Negocios."
  },
  {
    title: "SEO Local & Visibilidad",
    shortDescription: "Hacemos que tu negocio aparezca primero cuando tus clientes te buscan en Uruguay.",
    longDescription: "Dominar Google Maps y los resultados locales es clave para atraer tráfico físico y digital. Optimizamos cada rastro de tu marca en la red para maximizar tu relevancia.",
    benefits: [
      "Posicionamiento top en Google Maps",
      "Optimización de perfil de empresa",
      "Estrategia de palabras clave locales",
      "Aumento real en llamadas y visitas"
    ],
    icon: Search,
    color: "from-primary to-accent-blue",
    whatsappMsg: "Hola! Me interesa saber más sobre SEO Local & Visibilidad."
  }
];

export function AgencyServices() {
  return (
    <section id="solutions" className="py-32 relative overflow-hidden bg-[#070B14]">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full" />
         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black tracking-tighter text-white mb-6 uppercase"
          >
            Servicios <span className="text-neon italic">Premium</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto"
          >
            Soluciones tecnológicas de vanguardia diseñadas para negocios que no se conforman con lo convencional.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group p-10 rounded-[3rem] bg-card/40 border border-white/5 backdrop-blur-3xl hover:border-primary/50 transition-all duration-500 relative overflow-hidden shadow-2xl cursor-pointer"
                >
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 w-fit mb-8 group-hover:scale-110 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-500">
                    <service.icon className="w-8 h-8 text-white group-hover:text-primary transition-colors" />
                  </div>

                  <h3 className="text-2xl font-black text-white mb-4 leading-tight tracking-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-400 font-medium leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  <div className="flex items-center gap-2 text-primary text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    Saber más <ArrowRight size={14} />
                  </div>
                </motion.div>
              </DialogTrigger>
              
              <DialogContent className="bg-[#070B14]/95 border border-white/10 backdrop-blur-2xl rounded-[3rem] p-0 overflow-hidden max-w-3xl sm:rounded-[3rem]">
                <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                <div className="p-10 md:p-16">
                  <DialogHeader className="mb-10 text-left">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 w-fit mb-8">
                      <service.icon className="w-10 h-10 text-primary" />
                    </div>
                    <DialogTitle className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
                      {service.title}
                    </DialogTitle>
                    <DialogDescription className="text-xl text-slate-400 leading-relaxed font-medium">
                      {service.longDescription}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-4 mb-12">
                    <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 mb-6">Beneficios Principales</h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {service.benefits.map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                           <CheckCircle2 size={18} className="text-primary shrink-0" />
                           <span className="text-sm font-bold text-slate-300 tracking-tight">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="bg-primary hover:bg-brand-600 text-white rounded-2xl h-16 px-10 text-lg font-black flex-1 shadow-xl shadow-primary/20" asChild>
                      <Link href={`https://wa.me/59891746967?text=${encodeURIComponent(service.whatsappMsg)}`} target="_blank">
                        Consultar ahora
                      </Link>
                    </Button>
                    <DialogTrigger asChild>
                      <Button size="lg" variant="outline" className="border-white/10 text-white hover:bg-white/5 rounded-2xl h-16 px-10 text-lg font-black flex-1">
                        Cerrar
                      </Button>
                    </DialogTrigger>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
