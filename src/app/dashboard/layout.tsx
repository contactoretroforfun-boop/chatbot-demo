"use client";

import { Sidebar } from "@/components/dashboard/Sidebar";
import { Bell, Search, User, ChevronDown, Command, Moon, Sun, HelpCircle, CreditCard, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { useState, useEffect } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Sidebar />
      
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Top Header */}
        <header className="h-20 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-8 flex items-center justify-between sticky top-0 z-30 transition-all">
          <div className="flex items-center gap-6 flex-1">
            <div className="relative max-w-md w-full hidden md:block group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none">
                 <Search className="w-4 h-4 text-slate-400 group-focus-within:text-brand-500 transition-colors" />
              </div>
              <input 
                type="text" 
                placeholder="Buscá cualquier cosa... (Ctrl + K)" 
                className="w-full pl-11 pr-4 py-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 border-transparent focus:bg-white dark:focus:bg-slate-800 border border-transparent focus:border-brand-500/20 text-sm focus:ring-4 focus:ring-brand-500/5 outline-none transition-all"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-1 text-[10px] font-bold text-slate-400 bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700 shadow-sm pointer-events-none">
                 <Command size={10} /> K
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 lg:gap-4">
            <div className="hidden sm:flex items-center gap-2">
               <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="rounded-xl text-slate-500 hover:text-brand-500 transition-colors"
               >
                 {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
               </Button>
               <Button variant="ghost" size="icon" className="rounded-xl text-slate-500 hover:text-brand-500">
                 <HelpCircle className="w-5 h-5" />
               </Button>
            </div>

            <div className="w-px h-6 bg-slate-200 dark:bg-slate-800 mx-1 hidden sm:block" />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative rounded-xl text-slate-500 hover:text-brand-500">
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80 p-2">
                 <DropdownMenuLabel className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-400">Notificaciones</DropdownMenuLabel>
                 <DropdownMenuSeparator />
                 <div className="max-h-[300px] overflow-y-auto">
                    {[1, 2, 3].map(i => (
                      <DropdownMenuItem key={i} className="p-3 rounded-xl cursor-pointer flex gap-3 items-start hover:bg-slate-50 dark:hover:bg-slate-800 mb-1">
                         <div className="w-8 h-8 rounded-full bg-brand-500/10 flex items-center justify-center shrink-0">
                            <User className="w-4 h-4 text-brand-500" />
                         </div>
                         <div>
                            <p className="text-xs font-bold">Nuevo interesado captado</p>
                            <p className="text-[10px] text-slate-500 mt-0.5">Juan Pérez arrancó una charla hace 2m.</p>
                         </div>
                      </DropdownMenuItem>
                    ))}
                 </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-3 pl-2 pr-1 py-1 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group outline-none">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-whatsapp-teal flex items-center justify-center text-white shadow-lg shadow-brand-500/20 group-active:scale-95 transition-transform">
                    <User className="w-6 h-6" />
                  </div>
                  <div className="text-left hidden lg:block">
                    <p className="text-sm font-bold leading-none">Admin Demo</p>
                    <p className="text-[10px] text-slate-500 mt-1 uppercase font-bold tracking-wider">Administrador</p>
                  </div>
                  <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200 transition-colors" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 p-2 rounded-2xl shadow-2xl border-slate-200 dark:border-slate-800">
                <DropdownMenuLabel className="px-4 py-3">
                   <p className="text-sm font-bold">Mi Cuenta</p>
                   <p className="text-[10px] text-slate-500 font-medium truncate mt-0.5">demo@chatflow.com</p>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="p-2.5 rounded-xl cursor-pointer gap-3 text-sm font-medium">
                  <User size={16} /> Ajustes de Perfil
                </DropdownMenuItem>
                <DropdownMenuItem className="p-2.5 rounded-xl cursor-pointer gap-3 text-sm font-medium">
                  <CreditCard size={16} /> Planes y Facturación
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="p-2.5 rounded-xl cursor-pointer gap-3 text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20">
                   <LogOut size={16} /> Cerrar Sesión
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-8 bg-slate-50/50 dark:bg-slate-950/50">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
