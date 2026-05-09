"use client";

import { useState } from "react";
import { Star, ChevronDown, ChevronUp, MessageSquare, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    name: "Dr. Marcelo Rodríguez",
    role: "Director, Clínica Dental Sur",
    content: "Implementar ChatFlow fue un cambio total. Antes perdíamos turnos porque no podíamos contestar a tiempo. Ahora la IA gestiona todo y nosotros solo nos preocupamos por atender a los pacientes.",
    rating: 5,
    avatar: "MR"
  },
  {
    name: "Lucía Fernández",
    role: "Dueña, Gusto Gourmet",
    content: "La facilidad con la que los clientes reservan mesa por WhatsApp es increíble. Automatizamos el 90% de las consultas sobre el menú y reservas. ¡Es una joya!",
    rating: 5,
    avatar: "LF"
  },
  {
    name: "Javier Méndez",
    role: "Coordinador, FitLife Studio",
    content: "Los socios están chochos. Pueden consultar horarios y cupos de clases en segundos. El soporte de ChatFlow es excelente, siempre están para darnos una mano.",
    rating: 5,
    avatar: "JM"
  }
];

const faqs = [
  {
    question: "¿Es difícil de configurar?",
    answer: "Para nada. Podés arrancar en menos de 15 minutos. Solo conectás tu número, subís tu información y la IA ya empieza a aprender sobre tu negocio."
  },
  {
    question: "¿Funciona con mi número actual de WhatsApp?",
    answer: "Sí, usamos la API oficial de WhatsApp Cloud, lo que te permite profesionalizar tu número actual o usar uno nuevo con todas las funciones de ChatFlow."
  },
  {
    question: "¿La IA puede realmente agendar turnos?",
    answer: "¡Obvio! Se integra con tu calendario para ofrecer horarios disponibles y confirmar el turno automáticamente, avisándote al instante."
  },
  {
    question: "¿Qué pasa si la IA no sabe responder algo?",
    answer: "Si la IA detecta que no tiene la respuesta o el cliente pide hablar con una persona, te avisa inmediatamente para que vos o alguien de tu equipo tome el control."
  },
  {
    question: "¿Puedo cancelar mi suscripción cuando quiera?",
    answer: "Sí, no hay contratos raros ni permanencia. Podés cancelar tu plan en cualquier momento desde el panel de control, sin vueltas."
  }
];

export function Testimonials() {
  return (
    <section className="py-32 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <Badge className="bg-brand-500/10 text-brand-600 border-none px-4 py-1 mb-4">Testimonios</Badge>
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Lo que dicen nuestros clientes</h2>
          <p className="text-lg text-slate-500">Negocios reales, resultados reales con IA.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-800 relative"
            >
              <Quote className="absolute top-6 right-8 text-brand-500/10 w-12 h-12" />
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed italic">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-500 flex items-center justify-center text-white font-bold shadow-lg shadow-brand-500/20">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-sm">{t.name}</h4>
                  <p className="text-xs text-slate-400 font-medium">{t.role}</p>
                </div>
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
    <section id="faq" className="py-32 bg-white dark:bg-slate-950">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Preguntas Frecuentes</h2>
          <p className="text-slate-500 font-medium">Todo lo que necesitás saber para arrancar.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i}
              className="border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors"
              >
                <span className="font-bold text-slate-900 dark:text-white pr-4">{faq.question}</span>
                {openIndex === i ? <ChevronUp className="text-brand-500 shrink-0" /> : <ChevronDown className="text-slate-400 shrink-0" />}
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
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
