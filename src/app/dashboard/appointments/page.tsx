"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calendar as CalendarIcon, 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  MoreVertical, 
  Plus, 
  User,
  CheckCircle2,
  XCircle,
  MapPin,
  MessageCircle
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const appointments = [
  { id: 1, patient: "Alice Thompson", type: "Dental Checkup", time: "09:00 AM", status: "Confirmed", date: "Today" },
  { id: 2, patient: "Robert Fox", type: "Teeth Whitening", time: "11:30 AM", status: "Pending", date: "Today" },
  { id: 3, patient: "Cody Fisher", type: "Consultation", time: "02:30 PM", status: "Confirmed", date: "Today" },
  { id: 4, patient: "Jane Cooper", type: "Root Canal", time: "10:00 AM", status: "Confirmed", date: "Tomorrow" },
];

export default function AppointmentsPage() {
  return (
    <div className="space-y-8 animate-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Appointments</h1>
          <p className="text-slate-500 font-medium">Manage and schedule automated bookings.</p>
        </div>
        <Button className="rounded-xl gap-2 bg-brand-500 hover:bg-brand-600 shadow-lg shadow-brand-500/20">
          <Plus className="w-4 h-4" /> New Appointment
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Calendar Preview Card */}
        <Card className="border-none shadow-premium glass h-fit">
          <CardHeader className="flex flex-row items-center justify-between border-b border-slate-100 dark:border-slate-800">
             <CardTitle className="text-lg">May 2024</CardTitle>
             <div className="flex gap-1">
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg"><ChevronLeft size={16} /></Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg"><ChevronRight size={16} /></Button>
             </div>
          </CardHeader>
          <CardContent className="p-4">
            <div className="grid grid-cols-7 gap-1 mb-2">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                <div key={day} className="text-center text-[10px] font-bold text-slate-400 py-2">{day}</div>
              ))}
              {[...Array(31)].map((_, i) => {
                const day = i + 1;
                const isSelected = day === 8;
                const hasAppointments = [8, 12, 15, 20].includes(day);
                return (
                  <div 
                    key={i} 
                    className={cn(
                      "aspect-square flex flex-col items-center justify-center rounded-xl text-xs font-bold transition-all cursor-pointer relative",
                      isSelected ? "bg-brand-500 text-white shadow-lg shadow-brand-500/20" : "hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                    )}
                  >
                    {day}
                    {hasAppointments && !isSelected && <div className="absolute bottom-1.5 w-1 h-1 bg-brand-500 rounded-full" />}
                  </div>
                );
              })}
            </div>
            
            <div className="mt-6 p-4 rounded-2xl bg-brand-500/5 border border-brand-500/10">
               <div className="flex items-center gap-3 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                  <span className="text-xs font-bold text-brand-600 dark:text-brand-400">Next Slot Available</span>
               </div>
               <p className="text-[10px] text-slate-500 font-medium">Tomorrow at 10:30 AM is currently open for AI bookings.</p>
            </div>
          </CardContent>
        </Card>

        {/* Appointment List */}
        <div className="lg:col-span-2 space-y-6">
           <div className="flex items-center justify-between">
              <h3 className="font-bold flex items-center gap-2">
                 Upcoming Today <Badge className="bg-brand-500/10 text-brand-500 border-none px-2 rounded-full">3</Badge>
              </h3>
              <div className="flex items-center gap-2">
                 <Button variant="ghost" size="sm" className="text-xs font-bold opacity-50">Timeline</Button>
                 <Button variant="ghost" size="sm" className="text-xs font-bold text-brand-500">List View</Button>
              </div>
           </div>

           <div className="space-y-4">
              {appointments.map((apt) => (
                <Card key={apt.id} className="border-none shadow-premium glass group hover:translate-x-1 transition-all">
                  <CardContent className="p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-6 w-full">
                       <div className="hidden sm:flex flex-col items-center justify-center w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shrink-0">
                          <p className="text-[10px] font-bold text-slate-400 uppercase">May</p>
                          <p className="text-xl font-black text-slate-900 dark:text-white">08</p>
                       </div>
                       <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                             <h4 className="font-bold truncate text-slate-900 dark:text-white">{apt.patient}</h4>
                             <Badge variant="outline" className="rounded-lg text-[9px] font-bold px-1.5 py-0 border-slate-200 dark:border-slate-700">
                                {apt.type}
                             </Badge>
                          </div>
                          <div className="flex flex-wrap gap-y-2 gap-x-4">
                             <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                                <Clock size={12} className="text-brand-500" /> {apt.time}
                             </div>
                             <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                                <MapPin size={12} className="text-brand-500" /> Main Office
                             </div>
                             <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                                <MessageCircle size={12} className="text-brand-500" /> via WhatsApp
                             </div>
                          </div>
                       </div>
                    </div>
                    
                    <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto pt-4 sm:pt-0 border-t sm:border-none border-slate-100 dark:border-slate-800">
                       <Badge className={cn(
                         "border-none px-3 py-1 font-bold rounded-lg text-[10px] tracking-wider",
                         apt.status === "Confirmed" ? "bg-green-500/10 text-green-600 dark:text-green-400" : "bg-orange-500/10 text-orange-600 dark:text-orange-400"
                       )}>
                         {apt.status.toUpperCase()}
                       </Badge>
                       <div className="flex gap-1">
                          <Button variant="ghost" size="icon" className="rounded-xl hover:bg-red-50 hover:text-red-500"><XCircle size={16} /></Button>
                          <Button variant="ghost" size="icon" className="rounded-xl hover:bg-brand-50 hover:text-brand-500"><CheckCircle2 size={16} /></Button>
                          <Button variant="ghost" size="icon" className="rounded-xl"><MoreVertical size={16} /></Button>
                       </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}
