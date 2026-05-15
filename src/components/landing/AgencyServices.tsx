"use client";

import { motion } from "framer-motion";
import { MessageSquare, Layout, Cpu, Search } from "lucide-react";

const services = [
  {
    title: "Asistentes IA para WhatsApp",
    description: "Atención al cliente 24/7. Respondé consultas, agendá citas y cerrá ventas automáticamente sin perder el toque humano.",
    icon: MessageSquare,
    color: "from-blue-500 to-primary"
  },
  {
    title: "Diseño Web Moderno",
    description: "Sitios web de alto impacto visual y optimizados para conversión. Creamos experiencias digitales que wowean a tus clientes.",
    icon: Layout,
    color: "from-violet-500 to-primary"
  },
  {
    title: "Automatización de Negocios",
    description: "Optimizamos tus procesos internos para que ganes tiempo. Menos tareas repetitivas, más enfoque en lo importante.",
    icon: Cpu,
    color: "from-indigo-500 to-accent"
  },
  {
    title: "SEO Local & Visibilidad",
    description: "Hacemos que tu negocio aparezca primero cuando tus clientes te buscan en Uruguay. Generación constante de leads.",
    icon: Search,
    color: "from-primary to-accent-blue"
  }
];

export function AgencyServices() {
  return (
    <section id="solutions" className="py-32 relative overflow-hidden bg-[#070B14]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6 uppercase">
            Servicios <span className="text-neon italic">Premium</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Soluciones tecnológicas diseñadas para modernizar negocios tradicionales y llevarlos al siguiente nivel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-[2.5rem] bg-card/40 border border-white/5 backdrop-blur-3xl hover:border-primary/30 transition-all duration-500 relative overflow-hidden shadow-2xl"
            >
              {/* Card Glow */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 w-fit mb-8 group-hover:scale-110 transition-transform duration-500">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-black text-white mb-4 leading-tight">
                {service.title}
              </h3>
              
              <p className="text-slate-400 font-medium leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
