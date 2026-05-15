"use client";

import { useState } from "react";
import { Star, ChevronDown, ChevronUp, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    name: "Dr. Marcelo Rodríguez",
    content: "Implementar Nuvora fue un cambio total. Antes perdíamos turnos porque no podíamos contestar a tiempo. Ahora la IA gestiona todo y nosotros solo nos preocupamos por la excelencia médica.",
    rating: 5,
    avatar: "MR"
  },
  {
    name: "Lucía Fernández",
    content: "La sofisticación con la que los clientes reservan mesa es increíble. Automatizamos el 90% de las consultas. La estética premium de la plataforma se nota en cada detalle.",
    rating: 5,
    avatar: "LF"
  },
  {
    name: "Javier Méndez",
    content: "Los socios valoran la inmediatez. Pueden consultar horarios y cupos en segundos. Nuvora elevó el estándar de nuestra atención digital significativamente.",
    rating: 5,
    avatar: "JM"
  }
];

const faqs = [
  {
    question: "¿Es compleja la implementación?",
    answer: "Diseñamos Nuvora para ser intuitivo. Podés tener tu asistente operativo en menos de 15 minutos. Simplemente integrás tu número, proporcionás la información de tu negocio y la IA comienza su proceso de aprendizaje."
  },
  {
    question: "¿Se integra con mi número corporativo?",
    answer: "Absolutamente. Utilizamos la infraestructura oficial de WhatsApp Cloud API, lo que te permite profesionalizar tu comunicación manteniendo tu identidad de marca."
  },
  {
    question: "¿La IA gestiona agendamientos reales?",
    answer: "Sí, Nuvora está diseñado para la acción. Se sincroniza con tus calendarios para ofrecer disponibilidad en tiempo real, confirmar citas y enviar recordatorios automáticamente."
  },
  {
    question: "¿Qué sucede con consultas complejas?",
    answer: "Nuvora identifica matices. Si detecta una consulta que requiere criterio humano o el cliente solicita hablar con un representante, el sistema escala la conversación a tu equipo de forma inmediata."
  },
  {
    question: "¿Existe algún compromiso de permanencia?",
    answer: "Creemos en el valor de nuestro producto. No existen contratos de permanencia. Podés gestionar tu suscripción de manera transparente desde tu panel de control en cualquier momento."
  }
];

export function Testimonials() {
  return (
    <section className="py-32 bg-[#0B1020]/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <Badge variant="outline" className="bg-primary/5 text-neon border-primary/20 px-4 py-1.5 mb-6 rounded-full font-bold">Experiencias</Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">Confianza de alto nivel</h2>
          <p className="text-xl text-slate-400 font-medium">Líderes en diversas industrias transformando su comunicación con Nuvora.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-card/40 backdrop-blur-sm p-10 rounded-[2.5rem] shadow-sm border border-white/10 relative group hover:border-primary/30 transition-all duration-500 flex flex-col"
            >
              <Quote className="absolute top-8 right-10 text-primary/10 w-16 h-16 transition-transform group-hover:scale-110 duration-500" />
              <div className="flex gap-1 mb-8">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-slate-300 mb-10 text-lg leading-relaxed font-medium italic">
                "{t.content}"
              </p>
              <div className="flex items-center gap-5 mt-auto">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold shadow-lg shadow-primary/20 text-xl shrink-0">
                  {t.avatar}
                </div>
                <h4 className="font-bold text-white text-lg tracking-tight">{t.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">Consultas frecuentes</h2>
          <p className="text-xl text-slate-400 font-medium">Respuestas claras para decisiones inteligentes.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i}
              className={`border border-white/10 rounded-[2rem] overflow-hidden transition-all duration-500 ${openIndex === i ? "bg-card/40 border-primary/20 shadow-lg shadow-primary/5" : "bg-card/20 hover:bg-card/30"}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-8 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-xl font-bold text-white pr-6">{faq.question}</span>
                <div className={`p-2 rounded-full transition-all duration-300 ${openIndex === i ? "bg-primary text-white rotate-180" : "bg-white/5 text-slate-400"}`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 text-lg text-slate-400 leading-relaxed font-medium">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
