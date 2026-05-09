"use client";

import { useState, useEffect } from "react";
import { ChatSimulator } from "@/components/chat/ChatSimulator";
import { MessageSquare, Shield, Globe, Zap, Sparkles, ChevronLeft, ChevronRight, Star, Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";

export default function DemoPage() {
  const [activeReview, setActiveReview] = useState(0);
  const [showContactMenu, setShowContactMenu] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "¿Cómo aprende el bot sobre mi negocio?",
      a: "Le proporcionamos un documento o enlace con toda la información de tu empresa (precios, horarios, servicios) y la IA se encarga de aprenderlo y responder naturalmente."
    },
    {
      q: "¿Puede agendar turnos o tomar pedidos?",
      a: "¡Sí! El bot se puede integrar con tu calendario o sistema de reservas para agendar automáticamente sin intervención humana."
    },
    {
      q: "¿Qué pasa si no sabe una respuesta?",
      a: "Si el bot no tiene la información o la consulta es muy compleja, deriva la conversación automáticamente a un humano de tu equipo para que la continúe."
    },
    {
      q: "¿En cuánto tiempo se implementa?",
      a: "Una configuración estándar tarda entre 2 a 5 días hábiles en estar conectada a tu número oficial de WhatsApp y lista para vender."
    }
  ];
  
  const reviews = [
    {
      text: `"Cambiamos nuestro equipo de soporte 24/7 por ChatFlow. La tasa de automatización es del 94% y la satisfacción de los clientes nunca fue tan alta."`,
      name: "Dra. Sarah Miller",
      img: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      text: `"Desde que implementamos el asistente, las reservas aumentaron un 30%. El bot responde en milisegundos y agenda los turnos automáticamente."`,
      name: "Valeria Gómez",
      img: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      text: `"Me olvidé de tener que contestar WhatsApp a las 11 de la noche. ChatFlow se encarga de todo y mis clientes están felices con la rapidez."`,
      name: "Lucía Fernández",
      img: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      text: `"Increíble lo natural que suena. Muchos pacientes piensan que están hablando con nuestra recepcionista real. ¡Una inversión que se paga sola!"`,
      name: "Martina Rossi",
      img: "https://randomuser.me/api/portraits/women/12.jpg"
    },
    {
      text: `"La configuración fue súper fácil. Le pasamos un documento con nuestras preguntas frecuentes y en 5 minutos ya estaba vendiendo nuestros servicios."`,
      name: "Carolina Vega",
      img: "https://randomuser.me/api/portraits/women/90.jpg"
    },
    {
      text: `"Al principio dudaba de la IA, pero mis clientes de la inmobiliaria reciben opciones de casas al instante. Aceleró mis ventas un montón."`,
      name: "Martín López",
      img: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      text: `"Teníamos un bot de opciones numéricas y la gente lo odiaba. Ahora hablan naturalmente por audio y el bot entiende todo perfecto."`,
      name: "Diego Herrera",
      img: "https://randomuser.me/api/portraits/men/85.jpg"
    },
    {
      text: `"Como dueño de un restaurante, la integración es oro puro. El bot levanta pedidos y responde si tenemos mesas libres sin que yo toque el celular."`,
      name: "Esteban Quiroga",
      img: "https://randomuser.me/api/portraits/men/22.jpg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col lg:flex-row overflow-x-hidden font-sans w-full">
      {/* Sidebar - Product Pitch (Scrollable on mobile & desktop) */}
      <div className="order-2 lg:order-1 flex w-full lg:w-[400px] xl:w-1/3 flex-col justify-start gap-12 p-8 lg:p-12 bg-slate-900 text-white relative lg:border-r border-slate-800 lg:overflow-y-auto lg:h-screen pb-32 lg:pb-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none overflow-hidden">
           <div className="absolute top-[-10%] left-[-10%] w-[100%] h-[100%] bg-brand-500/20 blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10">
          <Link href="/" className="flex items-center gap-2 mb-16 group">
            <div className="bg-brand-500 p-2 rounded-xl">
              <MessageSquare className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tight">ChatFlow</span>
          </Link>

          <div className="space-y-8">
            <Badge className="bg-brand-500/10 text-brand-500 border-none px-4 py-1 font-bold text-xs uppercase tracking-widest">Demo Interactiva</Badge>
            <h1 className="text-5xl font-black leading-tight tracking-tighter">
              Viví el futuro de la <span className="text-brand-500">mensajería comercial</span>.
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-sm font-medium">
              Interactuá con nuestro asistente de IA en vivo. Esta es la experiencia exacta que tus clientes tendrán en WhatsApp.
            </p>

            <div className="space-y-6 pt-4">
               {[
                 { icon: Zap, text: "Respuestas instantáneas (menos de 2s)" },
                 { icon: Globe, text: "Habla 50+ idiomas nativamente" },
                 { icon: Shield, text: "Seguridad y cifrado total" }
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-4 text-slate-300 font-bold">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-brand-500 border border-slate-700">
                       <item.icon size={20} />
                    </div>
                    <span>{item.text}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 pt-12 w-full">
           {/* Slider Container */}
           <div className="relative h-[240px] w-full flex items-center justify-center [perspective:1000px]">
              {reviews.map((review, i) => {
                let offset = i - activeReview;
                const total = reviews.length;
                if (offset > Math.floor(total / 2)) offset -= total;
                if (offset < -Math.floor(total / 2)) offset += total;

                // Optimization: Don't render cards that are completely out of view
                if (Math.abs(offset) > 3) return null;

                return (
                  <motion.div
                    key={i}
                    className="absolute w-[90%] p-6 rounded-3xl bg-slate-800 border border-slate-700 shadow-2xl flex flex-col justify-between h-[200px]"
                    initial={false}
                    animate={{
                      x: `${offset * 18}%`,
                      y: Math.abs(offset) * 10,
                      scale: 1 - Math.abs(offset) * 0.1,
                      opacity: 1 - Math.abs(offset) * 0.25,
                      zIndex: 30 - Math.abs(offset),
                      rotateY: offset * -25,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <p className="text-sm text-slate-300 font-medium italic line-clamp-3">
                      {review.text}
                    </p>
                    
                    <div className="flex items-center gap-3 mt-4">
                       <img src={review.img} alt={review.name} className="w-10 h-10 rounded-full object-cover border border-slate-600 shadow-md" />
                       <div>
                          <p className="text-xs font-bold text-white uppercase tracking-wider">{review.name}</p>
                          <div className="flex text-yellow-400 mt-1 gap-0.5">
                             {[...Array(5)].map((_, i) => (
                               <Star key={i} size={10} className="fill-current" />
                             ))}
                          </div>
                       </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Floating Arrows */}
              <button 
                onClick={() => setActiveReview(prev => prev === 0 ? reviews.length - 1 : prev - 1)} 
                className="absolute left-[-15px] z-40 p-2.5 rounded-full bg-slate-700 hover:bg-brand-500 text-white shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-colors focus:outline-none border border-slate-600"
              >
                <ChevronLeft size={18} />
              </button>
              <button 
                onClick={() => setActiveReview(prev => (prev + 1) % reviews.length)} 
                className="absolute right-[-15px] z-40 p-2.5 rounded-full bg-slate-700 hover:bg-brand-500 text-white shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-colors focus:outline-none border border-slate-600"
              >
                <ChevronRight size={18} />
              </button>
           </div>

           {/* Navigation Dots */}
           <div className="flex gap-2 mt-6 justify-center">
             {reviews.map((_, i) => (
               <button 
                 key={i} 
                 onClick={() => setActiveReview(i)}
                 className={`w-2 h-2 rounded-full transition-all focus:outline-none ${i === activeReview ? "bg-white scale-125" : "bg-slate-600 hover:bg-slate-500"}`}
               />
             ))}
           </div>
        </div>
      </div>

      {/* Main Simulator View (Fills first screen on mobile) */}
      <div className="order-1 lg:order-2 flex-1 relative flex flex-col items-center justify-start bg-[#efeae2] dark:bg-slate-950 p-0 lg:p-0 min-h-[100dvh] lg:h-screen lg:overflow-y-auto">
        
        {/* Mobile-only Marquee Text */}
        <div className="lg:hidden absolute top-0 left-0 w-full bg-slate-900 border-b border-slate-800 overflow-hidden pointer-events-none z-20 flex items-center py-2 shadow-md">
           <motion.div 
             className="flex whitespace-nowrap gap-12 text-[10px] sm:text-xs font-black uppercase tracking-widest text-slate-300 dark:text-slate-300"
             animate={{ x: [0, -1000] }}
             transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
           >
              <span>✨ ATENCIÓN 24/7</span>
              <span>🚀 AUMENTÁ TUS VENTAS</span>
              <span>⚡ RESPUESTAS EN SEGUNDOS</span>
              <span>✨ ATENCIÓN 24/7</span>
              <span>🚀 AUMENTÁ TUS VENTAS</span>
              <span>⚡ RESPUESTAS EN SEGUNDOS</span>
              <span>✨ ATENCIÓN 24/7</span>
              <span>🚀 AUMENTÁ TUS VENTAS</span>
              <span>⚡ RESPUESTAS EN SEGUNDOS</span>
           </motion.div>
        </div>

        {/* 
          FUTURE FEATURE: Floating Back Button (Mobile Only)
          Guardado para cuando la aplicación escale y se necesite navegar a la homepage completa.
          <Link href="/" className="absolute top-14 left-4 z-50 lg:hidden w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg">
             <ArrowLeft className="text-slate-800 w-5 h-5" />
          </Link>
        */}

        {/* Backdrop for Desktop */}
        <div className="absolute inset-0 hidden lg:block opacity-20">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] contrast-150 brightness-150" />
        </div>

        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col items-center"
        >
          {/* Centered Phone Section */}
          <div className="w-full min-h-[100dvh] lg:min-h-screen flex flex-col justify-center items-center relative z-10 py-12 lg:py-0">
            <div className="w-full max-w-2xl mx-auto flex justify-center">
               <ChatSimulator />
            </div>

            <div className="hidden lg:flex justify-center mt-12 gap-8">
               <div className="flex flex-col items-center">
                  <p className="text-slate-500 font-bold text-xs uppercase tracking-widest mb-2">Simulando</p>
                  <Badge className="bg-slate-800 text-white border-slate-700 px-4 py-1">WhatsApp Cloud API</Badge>
               </div>
               <div className="flex flex-col items-center">
                  <p className="text-slate-500 font-bold text-xs uppercase tracking-widest mb-2">Procesando</p>
                  <Badge className="bg-brand-500/10 text-brand-500 border-none px-4 py-1">Gemini 2.5 Flash</Badge>
               </div>
            </div>
          </div>
          
          {/* FAQs Section Moved Here */}
          <div className="relative z-10 w-full max-w-lg mx-auto pb-32 lg:pb-24 pt-8">
            <div className="flex items-center justify-center gap-2 mb-8">
              <Sparkles className="w-6 h-6 text-brand-500" />
              <h2 className="text-2xl font-bold tracking-tight text-slate-800 dark:text-white">Preguntas Frecuentes</h2>
            </div>
            
            <div className="space-y-4 px-4 lg:px-0">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition-all hover:border-slate-300 dark:hover:border-slate-700 shadow-sm">
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full p-5 text-left flex justify-between items-center focus:outline-none"
                  >
                    <span className="font-bold text-[15px] text-slate-800 dark:text-slate-200 pr-4">{faq.q}</span>
                    <ChevronRight className={`w-5 h-5 text-brand-500 transition-transform duration-300 ${openFaq === i ? 'rotate-90' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 pt-0 text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 mt-2">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Floating Button & Contact Menu (Desktop Only) */}
        <div className="hidden lg:flex absolute bottom-[100px] right-4 lg:bottom-8 lg:right-8 z-50 flex-col items-end">
           <AnimatePresence>
             {showContactMenu && (
               <motion.div
                 initial={{ opacity: 0, y: 20, scale: 0.9 }}
                 animate={{ opacity: 1, y: 0, scale: 1 }}
                 exit={{ opacity: 0, y: 20, scale: 0.9 }}
                 transition={{ type: "spring", stiffness: 400, damping: 25 }}
                 className="mb-4 bg-white dark:bg-slate-900 rounded-[2rem] p-5 shadow-2xl border border-slate-200 dark:border-slate-800 w-[300px] flex flex-col gap-3"
               >
                 <div className="text-center mb-2 mt-1">
                    <h3 className="font-bold text-slate-800 dark:text-white text-lg">Hablemos de tu bot</h3>
                    <p className="text-xs text-slate-500 mt-1 font-medium">Elegí la forma que te quede más cómoda.</p>
                 </div>
                 
                 <a 
                   href="https://wa.me/59896750713" 
                   target="_blank" 
                   rel="noreferrer"
                   className="flex items-center gap-3 w-full bg-[#25D366] hover:bg-[#128C7E] text-white p-3 rounded-2xl transition-all shadow-lg shadow-[#25D366]/30 group"
                 >
                   <div className="bg-white/20 p-2.5 rounded-xl">
                      <MessageSquare className="w-5 h-5 fill-current" />
                   </div>
                   <div className="text-left flex-1">
                      <p className="font-bold text-sm">WhatsApp</p>
                      <p className="text-[10px] opacity-90 font-bold uppercase tracking-wider mt-0.5">✨ Recomendado</p>
                   </div>
                   <ArrowLeft className="w-4 h-4 rotate-180 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 mr-2" />
                 </a>

                 <a 
                   href="mailto:Joel.0959@gmail.com" 
                   className="flex items-center gap-3 w-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-white p-3 rounded-2xl transition-all group border border-transparent dark:border-slate-700"
                 >
                   <div className="bg-slate-200 dark:bg-slate-700 p-2.5 rounded-xl text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                   </div>
                   <div className="text-left flex-1">
                      <p className="font-bold text-sm">Correo Electrónico</p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium mt-0.5">Joel.0959@gmail.com</p>
                   </div>
                 </a>
               </motion.div>
             )}
           </AnimatePresence>

           <button 
             onClick={() => setShowContactMenu(!showContactMenu)}
             className="bg-brand-500 text-white px-6 py-4 md:px-8 rounded-full font-bold shadow-2xl shadow-brand-500/40 flex items-center gap-3 hover:scale-105 transition-all hover:bg-brand-600 focus:outline-none text-sm md:text-base whitespace-nowrap"
           >
              {showContactMenu ? "Cerrar menú" : "Quiero mi propio asistente IA"} 
              <ArrowLeft className={`transition-transform duration-300 ${showContactMenu ? "-rotate-90" : "rotate-180"}`} />
           </button>
        </div>

      </div>
    </div>
  );
}
