"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  MessageSquare, 
  Users, 
  Calendar, 
  Settings, 
  Database, 
  Bot, 
  MessageCircle,
  BarChart2,
  CreditCard,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  HelpCircle
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const menuItems = [
  { icon: LayoutDashboard, label: "Resumen", href: "/dashboard" },
  { icon: MessageSquare, label: "Conversaciones", href: "/dashboard/conversations", badge: "2" },
  { icon: Users, label: "Interesados", href: "/dashboard/leads" },
  { icon: Calendar, label: "Turnos", href: "/dashboard/appointments" },
  { icon: Database, label: "Base de Conocimientos", href: "/dashboard/knowledge-base" },
  { icon: Bot, label: "Ajustes de IA", href: "/dashboard/ai-settings" },
  { icon: MessageCircle, label: "WhatsApp", href: "/dashboard/whatsapp-settings" },
  { icon: BarChart2, label: "Analíticas", href: "/dashboard/analytics" },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside 
      className={cn(
        "bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 h-screen sticky top-0 transition-all duration-300 z-40 flex flex-col",
        isCollapsed ? "w-20" : "w-72"
      )}
    >
      <div className="p-6 flex items-center justify-between">
        {!isCollapsed && (
          <Link href="/" className="flex items-center gap-2 overflow-hidden">
            <div className="bg-brand-500 p-2 rounded-xl shadow-lg shadow-brand-500/20">
              <MessageSquare className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight whitespace-nowrap">
              Chat<span className="text-brand-500">Flow</span>
            </span>
          </Link>
        )}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="shrink-0 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          {isCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
        </Button>
      </div>

      <nav className="flex-1 px-4 space-y-1.5 mt-4 custom-scrollbar overflow-y-auto">
        <p className={cn("text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4 px-3", isCollapsed && "text-center")}>
          {isCollapsed ? "•••" : "Menú Principal"}
        </p>
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-3 rounded-xl transition-all group relative",
                isActive 
                  ? "bg-brand-500 text-white shadow-lg shadow-brand-500/20" 
                  : "text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
              )}
            >
              <item.icon className={cn("w-5 h-5 shrink-0 transition-transform group-hover:scale-110", isActive ? "text-white" : "")} />
              {!isCollapsed && (
                <div className="flex-1 flex items-center justify-between overflow-hidden">
                   <span className="font-semibold text-sm whitespace-nowrap">{item.label}</span>
                   {item.badge && (
                     <Badge className={cn("px-1.5 py-0 min-w-[18px] h-[18px] flex items-center justify-center rounded-full text-[10px] font-bold", isActive ? "bg-white text-brand-500" : "bg-brand-500 text-white")}>
                        {item.badge}
                     </Badge>
                   )}
                </div>
              )}
              {isCollapsed && (
                <div className="absolute left-full ml-4 px-3 py-1.5 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-xl whitespace-nowrap z-50">
                   {item.label}
                </div>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Pro Card */}
      {!isCollapsed && (
        <div className="px-6 mb-6">
           <div className="p-4 rounded-2xl bg-gradient-to-br from-brand-500 to-whatsapp-teal text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 blur-2xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                 <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center mb-3">
                    <Sparkles className="w-4 h-4 text-white" />
                 </div>
                 <p className="text-xs font-bold mb-1">Pasate a Pro</p>
                 <p className="text-[10px] opacity-80 mb-3">Mensajes de IA ilimitados y entrenamiento a medida.</p>
                 <button className="w-full py-1.5 bg-white text-brand-600 rounded-lg text-[10px] font-bold hover:bg-slate-100 transition-colors">
                    Mejorar Ahora
                 </button>
              </div>
           </div>
        </div>
      )}

      <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
        <Link
          href="/dashboard/billing"
          className={cn(
            "flex items-center gap-3 px-3 py-3 rounded-xl text-slate-500 hover:bg-white dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all group relative",
            pathname === "/dashboard/billing" ? "bg-white dark:bg-slate-800 text-brand-500 shadow-sm" : ""
          )}
        >
          <CreditCard className="w-5 h-5 shrink-0" />
          {!isCollapsed && <span className="font-semibold text-sm">Facturación</span>}
        </Link>
        <Link
          href="/dashboard/settings"
          className={cn(
            "flex items-center gap-3 px-3 py-3 mt-1 rounded-xl text-slate-500 hover:bg-white dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all group relative",
            pathname === "/dashboard/settings" ? "bg-white dark:bg-slate-800 text-brand-500 shadow-sm" : ""
          )}
        >
          <Settings className="w-5 h-5 shrink-0" />
          {!isCollapsed && <span className="font-semibold text-sm">Configuración</span>}
        </Link>
        <button
          className="w-full flex items-center gap-3 px-3 py-3 mt-1 rounded-xl text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-all group relative"
        >
          <LogOut className="w-5 h-5 shrink-0" />
          {!isCollapsed && <span className="font-semibold text-sm">Cerrar Sesión</span>}
        </button>
      </div>
    </aside>
  );
}
