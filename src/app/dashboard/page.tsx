"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Users, 
  MessageSquare, 
  Calendar, 
  TrendingUp, 
  Clock, 
  CheckCircle2,
  ArrowUpRight,
  ArrowDownRight,
  Zap,
  Star,
  Activity,
  ArrowRight,
  ChevronDown,
  MessageCircle,
  Bot
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const stats = [
  {
    title: "Interesados Totales",
    value: "1.284",
    change: "+12.5%",
    trend: "up",
    icon: Users,
    color: "text-blue-600",
    bg: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    title: "Conversaciones",
    value: "8.432",
    change: "+18.2%",
    trend: "up",
    icon: MessageSquare,
    color: "text-brand-600",
    bg: "bg-brand-50 dark:bg-brand-900/20",
  },
  {
    title: "Turnos Agendados",
    value: "156",
    change: "-3.1%",
    trend: "down",
    icon: Calendar,
    color: "text-purple-600",
    bg: "bg-purple-50 dark:bg-purple-900/20",
  },
  {
    title: "Tasa de Automatización",
    value: "94.2%",
    change: "+2.4%",
    trend: "up",
    icon: Zap,
    color: "text-orange-600",
    bg: "bg-orange-50 dark:bg-orange-900/20",
  },
];

const mainChartData = [
  { name: "Lun", ai: 400, human: 24 },
  { name: "Mar", ai: 300, human: 13 },
  { name: "Mié", ai: 980, human: 58 },
  { name: "Jue", ai: 390, human: 39 },
  { name: "Vie", ai: 480, human: 48 },
  { name: "Sáb", ai: 380, human: 12 },
  { name: "Dom", ai: 430, human: 10 },
];

const pieData = [
  { name: "Consultas de Precios", value: 400, color: "#00a884" },
  { name: "Turnos/Reservas", value: 300, color: "#8b5cf6" },
  { name: "Ubicación", value: 200, color: "#3b82f6" },
  { name: "Soporte Humano", value: 100, color: "#f97316" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8 animate-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Resumen del Panel</h1>
          <p className="text-slate-500 font-medium">Monitoreando el rendimiento de la IA para <span className="text-brand-500">Negocio de Prueba SRL</span></p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="rounded-xl border-slate-200 dark:border-slate-800">
            Últimos 7 días <ChevronDown size={14} className="ml-2 opacity-50" />
          </Button>
          <Button className="rounded-xl bg-brand-500 hover:bg-brand-600 shadow-lg shadow-brand-500/20">
            Exportar Reporte
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="overflow-hidden border-none shadow-premium glass group hover:translate-y-[-4px] transition-all">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.bg} p-3 rounded-2xl group-hover:scale-110 transition-transform`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <Badge className={cn(
                  "border-none font-bold",
                  stat.trend === "up" ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
                )}>
                  {stat.change}
                </Badge>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.title}</p>
                <h3 className="text-3xl font-bold mt-1 text-slate-900 dark:text-white">{stat.value}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Chart */}
        <Card className="lg:col-span-2 border-none shadow-premium glass">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Actividad de Conversaciones</CardTitle>
              <CardDescription>Distribución diaria de mensajes gestionados.</CardDescription>
            </div>
            <div className="flex items-center gap-4">
               <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-500" />
                  <span className="text-[10px] font-bold text-slate-400">IA</span>
               </div>
               <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-slate-700" />
                  <span className="text-[10px] font-bold text-slate-400">HUMANO</span>
               </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-[350px] w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={mainChartData}>
                  <defs>
                    <linearGradient id="colorAi" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00a884" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#00a884" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" opacity={0.5} />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fontSize: 12, fill: '#94a3b8', fontWeight: 600}} 
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fontSize: 12, fill: '#94a3b8', fontWeight: 600}} 
                  />
                  <Tooltip 
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 40px -8px rgba(0,0,0,0.1)', backgroundColor: 'rgba(255,255,255,0.9)' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="ai" 
                    stroke="#00a884" 
                    strokeWidth={4} 
                    fillOpacity={1} 
                    fill="url(#colorAi)" 
                    animationDuration={2000}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="human" 
                    stroke="#e2e8f0" 
                    strokeWidth={2} 
                    fill="transparent"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Intent Distribution */}
        <Card className="border-none shadow-premium glass">
          <CardHeader>
            <CardTitle>Intenciones Top</CardTitle>
            <CardDescription>Pedidos más frecuentes de clientes.</CardDescription>
          </CardHeader>
          <CardContent>
             <div className="h-[200px] w-full flex items-center justify-center relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                   <p className="text-2xl font-bold">8.4k</p>
                   <p className="text-[10px] text-slate-400 font-bold uppercase">Total</p>
                </div>
             </div>

             <div className="mt-8 space-y-4">
                {pieData.map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                     <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                        <span className="text-sm font-semibold">{item.name}</span>
                     </div>
                     <span className="text-sm font-bold text-slate-500">{(item.value / 10).toFixed(0)}%</span>
                  </div>
                ))}
             </div>
             
             <Button variant="ghost" className="w-full mt-6 text-xs font-bold text-brand-500 group">
                Análisis Completo <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
             </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
         {/* Live Status Card */}
         <Card className="border-none shadow-premium glass overflow-hidden">
            <CardHeader className="bg-slate-900 text-white">
               <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Estado del Sistema</CardTitle>
                  <Activity className="text-brand-500 w-5 h-5" />
               </div>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-brand-500">
                        <MessageCircle size={20} />
                     </div>
                     <div>
                        <p className="text-sm font-bold">WhatsApp API</p>
                        <p className="text-[10px] text-slate-400">Conectado y Estable</p>
                     </div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
               </div>
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-blue-500">
                        <Bot size={20} />
                     </div>
                     <div>
                        <p className="text-sm font-bold">Procesamiento de IA</p>
                        <p className="text-[10px] text-slate-400">Gemini 1.5 Flash</p>
                     </div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
               </div>
               <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <p className="text-xs text-slate-500 leading-relaxed italic">
                     "Tu IA está gestionando el 94% de las consultas sin intervención humana. El ROI sigue subiendo."
                  </p>
               </div>
            </CardContent>
         </Card>

         {/* Recent Leads Preview */}
         <Card className="lg:col-span-2 border-none shadow-premium glass">
            <CardHeader className="flex flex-row items-center justify-between">
               <CardTitle>Interesados Recientes</CardTitle>
               <Button variant="ghost" size="sm" className="text-brand-500 font-bold">Ver Todos</Button>
            </CardHeader>
            <CardContent>
               <div className="space-y-4">
                  {[
                    { name: "Juan Pérez", email: "juan@ejemplo.com", status: "Caliente", score: 98 },
                    { name: "Roberto Gómez", email: "roberto@fox.com", status: "Tibio", score: 72 },
                    { name: "Facundo Díaz", email: "facu.d@gmail.com", status: "Caliente", score: 85 }
                  ].map((lead, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50/50 dark:bg-slate-900/50 border border-transparent hover:border-brand-500/20 transition-all cursor-pointer">
                       <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 font-bold">
                             {lead.name.charAt(0)}
                          </div>
                          <div>
                             <p className="text-sm font-bold">{lead.name}</p>
                             <p className="text-[10px] text-slate-500">{lead.email}</p>
                          </div>
                       </div>
                       <div className="flex items-center gap-8">
                          <div className="text-right hidden sm:block">
                             <p className="text-[10px] font-bold text-slate-400 uppercase">Puntaje</p>
                             <p className="text-sm font-black text-brand-500">{lead.score}</p>
                          </div>
                          <Badge className={cn(
                            "border-none px-3 py-1 font-bold",
                            lead.status === "Caliente" ? "bg-red-500/10 text-red-500" : "bg-orange-500/10 text-orange-500"
                          )}>
                            {lead.status}
                          </Badge>
                       </div>
                    </div>
                  ))}
               </div>
            </CardContent>
         </Card>
      </div>
    </div>
  );
}
