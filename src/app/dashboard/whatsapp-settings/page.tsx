"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MessageCircle, 
  ExternalLink, 
  Copy, 
  RefreshCw, 
  CheckCircle2, 
  AlertCircle,
  Phone,
  ShieldCheck,
  Sparkles
} from "lucide-react";

export default function WhatsAppSettingsPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-white">Integración de WhatsApp</h1>
          <p className="text-slate-400 mt-1 font-medium">Gestiona tu conexión con Meta Cloud API para Nuvora AI.</p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="rounded-2xl gap-2 border-white/10 hover:bg-white/5 text-slate-300">
            <RefreshCw className="w-4 h-4" /> Verificar Estado
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Connection Card */}
          <Card className="border border-white/10 bg-card/40 backdrop-blur-3xl shadow-2xl rounded-[2.5rem] overflow-hidden">
            <CardHeader className="p-8 flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-2xl text-white">Estado de Conexión</CardTitle>
                <CardDescription className="text-slate-400">Enlace en tiempo real con Meta Cloud API.</CardDescription>
              </div>
              <div className="flex items-center gap-2 bg-primary/20 text-primary border border-primary/30 px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-widest">
                <CheckCircle2 className="w-4 h-4" /> Conectado
              </div>
            </CardHeader>
            <CardContent className="p-8 pt-0 space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.02] group hover:bg-white/[0.04] transition-all">
                  <p className="text-[10px] text-slate-500 mb-2 uppercase font-black tracking-[0.15em]">Phone Number ID</p>
                  <div className="flex items-center justify-between">
                    <code className="text-sm text-white font-mono">348927492837492</code>
                    <Copy className="w-4 h-4 text-slate-500 cursor-pointer hover:text-primary transition-colors" />
                  </div>
                </div>
                <div className="p-5 rounded-2xl border border-white/5 bg-white/[0.02] group hover:bg-white/[0.04] transition-all">
                  <p className="text-[10px] text-slate-500 mb-2 uppercase font-black tracking-[0.15em]">Business Account ID</p>
                  <div className="flex items-center justify-between">
                    <code className="text-sm text-white font-mono">928374928374928</code>
                    <Copy className="w-4 h-4 text-slate-500 cursor-pointer hover:text-primary transition-colors" />
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] group hover:bg-white/[0.04] transition-all">
                <p className="text-[10px] text-slate-500 mb-3 uppercase font-black tracking-[0.15em]">Access Token (Permanente)</p>
                <div className="flex items-center justify-between gap-6">
                  <code className="text-xs text-white font-mono truncate opacity-60">EAALk9ZC4ZA8BAMfGZCZAZCZCZCZCZCZCZCZCZCZCZCZCZCZCZCZCZCZCZCZCZCZCZCZC</code>
                  <div className="flex gap-3">
                    <Copy className="w-5 h-5 text-slate-500 cursor-pointer hover:text-primary transition-colors" />
                    <RefreshCw className="w-5 h-5 text-slate-500 cursor-pointer hover:text-primary transition-colors" />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-white/[0.02] border-t border-white/5 p-6">
               <Button variant="ghost" className="text-[11px] font-black uppercase tracking-widest text-primary hover:text-white hover:bg-primary/10 ml-auto gap-2" asChild>
                 <a href="https://developers.facebook.com" target="_blank" rel="noopener noreferrer">
                   Meta Developers Portal <ExternalLink className="w-3 h-3" />
                 </a>
               </Button>
            </CardFooter>
          </Card>

          {/* Webhook Card */}
          <Card className="border border-white/10 bg-card/40 backdrop-blur-3xl shadow-2xl rounded-[2.5rem] overflow-hidden">
            <CardHeader className="p-8">
              <CardTitle className="text-2xl text-white">Configuración de Webhook</CardTitle>
              <CardDescription className="text-slate-400">Configura estos valores en el panel de Meta para recibir mensajes.</CardDescription>
            </CardHeader>
            <CardContent className="p-8 pt-0 space-y-6">
              <div className="space-y-3">
                <label className="text-[11px] font-black uppercase tracking-widest text-slate-500 ml-1">Callback URL</label>
                <div className="flex gap-3">
                  <input 
                    readOnly
                    value="https://nuvora.ai/api/whatsapp/webhook"
                    className="flex-1 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-sm text-white font-mono outline-none"
                  />
                  <Button variant="outline" size="icon" className="rounded-xl border-white/10 hover:bg-primary/20 hover:text-primary transition-all shadow-xl shadow-primary/5">
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[11px] font-black uppercase tracking-widest text-slate-500 ml-1">Verify Token</label>
                <div className="flex gap-3">
                  <input 
                    readOnly
                    value="nuvora_verify_token_prod_2024"
                    className="flex-1 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-sm text-white font-mono outline-none"
                  />
                  <Button variant="outline" size="icon" className="rounded-xl border-white/10 hover:bg-primary/20 hover:text-primary transition-all shadow-xl shadow-primary/5">
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card className="border border-white/10 bg-card/40 backdrop-blur-3xl shadow-2xl rounded-[2.5rem] overflow-hidden">
            <CardHeader className="p-6">
               <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mb-4 border border-primary/20 shadow-inner">
                 <MessageCircle className="w-7 h-7" />
               </div>
              <CardTitle className="text-xl text-white">Salud del Canal</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0 space-y-5">
               <div className="flex justify-between items-center py-2 border-b border-white/5">
                 <span className="text-sm text-slate-400 font-medium">Latencia API</span>
                 <span className="text-sm font-bold text-white">185ms <span className="text-primary text-[10px] ml-1">↑ 5%</span></span>
               </div>
               <div className="flex justify-between items-center py-2 border-b border-white/5">
                 <span className="text-sm text-slate-400 font-medium">Éxito de Envío</span>
                 <span className="text-sm font-bold text-white">99.9%</span>
               </div>
               <div className="flex justify-between items-center py-2 border-b border-white/5">
                 <span className="text-sm text-slate-400 font-medium">Webhooks Recibidos</span>
                 <span className="text-sm font-bold text-white">48.2k</span>
               </div>
            </CardContent>
          </Card>

          <Card className="border border-white/10 bg-primary/5 backdrop-blur-3xl shadow-2xl rounded-[2.5rem] overflow-hidden border-primary/20 relative">
            <div className="absolute top-0 right-0 p-4">
               <Sparkles className="text-primary/40 w-12 h-12" />
            </div>
            <CardHeader className="p-6">
              <CardTitle className="text-xl flex items-center gap-3 text-white">
                <div className="p-1.5 rounded-lg bg-primary/20">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                Meta Verificado
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
               <p className="text-sm text-slate-400 mb-6 font-medium leading-relaxed">
                 Tu cuenta corporativa está verificada. Tienes acceso a envíos ilimitados y funciones premium de WhatsApp.
               </p>
               <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-primary/5">
                 <CheckCircle2 className="w-4 h-4" /> ESTADO ACTIVO
               </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
