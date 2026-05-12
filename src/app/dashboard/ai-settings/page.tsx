"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Bot, 
  MessageSquare, 
  ShieldAlert, 
  Settings2, 
  UserCircle, 
  Languages,
  Save,
  RotateCcw,
  Sparkles
} from "lucide-react";

export default function AISettingsPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-white">Configuración de IA</h1>
          <p className="text-slate-400 mt-1 font-medium">Personaliza la identidad y el comportamiento de tu asistente Nuvora.</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="rounded-2xl gap-2 border-white/10 hover:bg-white/5 text-slate-300">
            <RotateCcw className="w-4 h-4" /> Restablecer
          </Button>
          <Button className="rounded-2xl gap-2 bg-primary hover:bg-brand-600 shadow-xl shadow-primary/20 text-white font-bold px-6">
            <Save className="w-4 h-4" /> Guardar Cambios
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Personality Card */}
          <Card className="border border-white/10 bg-card/40 backdrop-blur-3xl shadow-2xl rounded-[2.5rem] overflow-hidden">
            <CardHeader className="p-8 pb-4">
              <CardTitle className="flex items-center gap-3 text-white text-2xl">
                <div className="p-2 rounded-xl bg-primary/10 border border-primary/20">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                Identidad del Asistente
              </CardTitle>
              <CardDescription className="text-slate-400 text-lg">Define cómo habla y actúa tu IA frente a los clientes.</CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-[11px] font-black uppercase tracking-widest text-slate-500 ml-1">Nombre del Asistente</label>
                  <input 
                    defaultValue="Nuvora AI"
                    className="w-full px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-[15px] text-white outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-black uppercase tracking-widest text-slate-500 ml-1">Tono de Comunicación</label>
                  <select className="w-full px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-[15px] text-white outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer">
                    <option className="bg-[#0B1020]">Profesional & Élite</option>
                    <option className="bg-[#0B1020]">Cercano & Amigable</option>
                    <option className="bg-[#0B1020]">Persuasivo & Comercial</option>
                    <option className="bg-[#0B1020]">Minimalista & Directo</option>
                  </select>
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[11px] font-black uppercase tracking-widest text-slate-500 ml-1">Instrucciones de Sistema (Core Prompt)</label>
                <textarea 
                  rows={8}
                  className="w-full px-6 py-5 rounded-[2rem] bg-white/5 border border-white/10 text-[15px] text-white outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none leading-relaxed"
                  placeholder="Ej. Eres un asistente de élite para una clínica dental..."
                  defaultValue="Eres el asistente inteligente oficial de 'Nuvora AI Demo'. Tu misión es proyectar profesionalismo, responder consultas técnicas con precisión y guiar a los usuarios hacia el cierre de ventas o agendamiento de turnos. Mantén siempre un tono sofisticado y servicial."
                ></textarea>
                <div className="flex items-center gap-2 mt-2 px-1">
                   <Sparkles size={12} className="text-primary" />
                   <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">Esta es la lógica neuronal que rige el comportamiento de la IA.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Handover Card */}
          <Card className="border border-white/10 bg-card/40 backdrop-blur-3xl shadow-2xl rounded-[2.5rem] overflow-hidden">
            <CardHeader className="p-8 pb-4">
              <CardTitle className="flex items-center gap-3 text-orange-400 text-2xl">
                <div className="p-2 rounded-xl bg-orange-500/10 border border-orange-500/20">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                Escalado Humano
              </CardTitle>
              <CardDescription className="text-slate-400 text-lg">Controla cuándo la IA debe ceder el control a una persona.</CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-5">
              <div className="flex items-center justify-between p-6 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all group">
                <div>
                  <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">Disparador de Baja Confianza</h4>
                  <p className="text-sm text-slate-500 font-medium">Escalar si la IA tiene menos del 70% de seguridad en la respuesta.</p>
                </div>
                <div className="w-14 h-7 bg-primary rounded-full relative cursor-pointer shadow-lg shadow-primary/20">
                  <div className="absolute right-1 top-1 w-5 h-5 bg-white rounded-full shadow-sm" />
                </div>
              </div>
              <div className="flex items-center justify-between p-6 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all group">
                <div>
                  <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">Solicitud Explícita</h4>
                  <p className="text-sm text-slate-500 font-medium">Escalar cuando el cliente solicita un 'humano', 'agente' o 'persona'.</p>
                </div>
                <div className="w-14 h-7 bg-primary rounded-full relative cursor-pointer shadow-lg shadow-primary/20">
                  <div className="absolute right-1 top-1 w-5 h-5 bg-white rounded-full shadow-sm" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card className="border border-white/10 bg-card/40 backdrop-blur-3xl shadow-2xl rounded-[2.5rem] overflow-hidden">
            <CardHeader className="p-6 pb-2">
              <CardTitle className="text-xl flex items-center gap-3 text-white">
                <Languages className="w-5 h-5 text-blue-400" />
                Idiomas
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 group hover:border-blue-500/30 transition-all">
                <span className="text-2xl">🇪🇸</span>
                <span className="text-[15px] font-bold text-white">Español (Principal)</span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 opacity-40 grayscale group hover:grayscale-0 transition-all">
                <span className="text-2xl">🇺🇸</span>
                <span className="text-[15px] font-bold text-slate-300">Inglés</span>
              </div>
              <Button variant="ghost" className="w-full text-[11px] font-black uppercase tracking-widest text-primary hover:text-white hover:bg-primary/10 rounded-xl py-6">
                + Gestionar Multilingüe
              </Button>
            </CardContent>
          </Card>

          <Card className="border border-white/10 bg-card/40 backdrop-blur-3xl shadow-2xl rounded-[2.5rem] overflow-hidden">
            <CardHeader className="p-6 pb-2">
              <CardTitle className="text-xl flex items-center gap-3 text-white">
                <Settings2 className="w-5 h-5 text-purple-400" />
                Motor Neuronal
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="p-5 rounded-2xl border-2 border-primary/50 bg-primary/5 shadow-lg shadow-primary/5">
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  Gemini 2.5 Flash
                  <Badge className="bg-primary text-[10px] uppercase h-5">Élite</Badge>
                </h4>
                <p className="text-[12px] text-slate-500 font-bold mt-1 uppercase tracking-tighter">Velocidad extrema & Alta precisión</p>
              </div>
              <div className="p-5 rounded-2xl border border-white/5 bg-white/5 opacity-50 cursor-not-allowed group">
                <h4 className="text-lg font-bold text-slate-400">Gemini 2.5 Pro</h4>
                <p className="text-[12px] text-slate-600 font-bold mt-1 uppercase tracking-tighter">Razonamiento complejo avanzado</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
