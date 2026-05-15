"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ServiceDialog, servicesData } from "./ServiceDialog";

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
          {servicesData.map((service, index) => (
            <ServiceDialog key={index} service={service}>
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
            </ServiceDialog>
          ))}
        </div>
      </div>
    </section>
  );
}
