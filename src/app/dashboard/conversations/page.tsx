"use client";

import { ChatSimulator } from "@/components/chat/ChatSimulator";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Search, 
  Filter, 
  MoreVertical, 
  User, 
  MessageSquare, 
  Phone, 
  Info, 
  Clock, 
  CheckCircle2,
  ChevronDown
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const recentChats = [
  { id: 1, name: "John Doe", lastMessage: "How much for a dental cleaning?", time: "10:30 AM", unread: 2, status: "Lead", score: 88 },
  { id: 2, name: "Sarah Smith", lastMessage: "Thank you! See you tomorrow.", time: "9:45 AM", unread: 0, status: "Appointment", score: 95 },
  { id: 3, name: "Mike Johnson", lastMessage: "I'd like to cancel my subscription.", time: "Yesterday", unread: 0, status: "Customer", score: 60 },
  { id: 4, name: "Emily Brown", lastMessage: "Where is the gym located?", time: "Yesterday", unread: 1, status: "Lead", score: 75 },
  { id: 5, name: "Alex Wilson", lastMessage: "Do you have vegan options?", time: "2 days ago", unread: 0, status: "Lead", score: 55 },
];

export default function ConversationsPage() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 h-[calc(100vh-160px)] animate-in">
      {/* Sidebar - Chat List */}
      <Card className="w-full lg:w-96 flex flex-col border-none shadow-premium glass overflow-hidden shrink-0">
        <CardHeader className="p-6 space-y-4 bg-white dark:bg-slate-900 z-10 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-bold">Conversations</CardTitle>
            <div className="flex gap-1">
               <Button variant="ghost" size="icon" className="rounded-xl"><Filter className="w-4 h-4 text-slate-400" /></Button>
               <Button variant="ghost" size="icon" className="rounded-xl"><MoreVertical className="w-4 h-4 text-slate-400" /></Button>
            </div>
          </div>
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-brand-500 transition-colors" />
            <input 
              placeholder="Search conversations..." 
              className="w-full pl-11 pr-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none text-sm focus:ring-2 focus:ring-brand-500 transition-all outline-none"
            />
          </div>
        </CardHeader>
        <CardContent className="flex-1 overflow-y-auto p-0 custom-scrollbar">
          {recentChats.map((chat) => (
            <div 
              key={chat.id}
              className={cn(
                "p-4 flex items-center gap-4 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all border-b border-slate-100 dark:border-slate-800/50 relative group",
                chat.id === 1 ? "bg-brand-50 dark:bg-brand-900/10" : ""
              )}
            >
              {chat.id === 1 && <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-500" />}
              <div className="relative">
                 <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center shrink-0 border-2 border-white dark:border-slate-800 shadow-sm overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${chat.id}`} alt={chat.name} className="w-full h-full object-cover" />
                 </div>
                 {chat.status === "Lead" && <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white dark:border-slate-800 flex items-center justify-center text-[8px] text-white font-bold">L</div>}
                 {chat.status === "Appointment" && <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-purple-500 rounded-full border-2 border-white dark:border-slate-800 flex items-center justify-center text-[8px] text-white font-bold">A</div>}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-0.5">
                  <h4 className="font-bold text-sm truncate text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors">{chat.name}</h4>
                  <span className="text-[10px] text-slate-400 font-bold whitespace-nowrap">{chat.time}</span>
                </div>
                <p className={cn("text-xs truncate", chat.unread > 0 ? "font-bold text-slate-700 dark:text-slate-300" : "text-slate-500")}>
                  {chat.lastMessage}
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex gap-2">
                     <Badge className={cn(
                       "px-2 py-0 h-4 text-[9px] font-bold rounded-md border-none",
                       chat.status === "Lead" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" : 
                       chat.status === "Appointment" ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" :
                       "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400"
                     )}>
                       {chat.status.toUpperCase()}
                     </Badge>
                     {chat.score > 80 && (
                        <Badge className="bg-red-500/10 text-red-500 border-none px-2 py-0 h-4 text-[9px] font-bold rounded-md">HOT {chat.score}</Badge>
                     )}
                  </div>
                  {chat.unread > 0 && (
                    <span className="bg-brand-500 text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full shadow-lg shadow-brand-500/30">
                      {chat.unread}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Main Content - Chat Simulator & Info Panel */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
         <div className="flex h-full gap-8">
            <div className="flex-1 flex flex-col items-center justify-center">
               <ChatSimulator />
            </div>

            {/* Right Panel - Context */}
            <Card className="hidden xl:flex flex-col w-80 border-none shadow-premium glass overflow-hidden shrink-0">
               <CardHeader className="p-6 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
                  <CardTitle className="text-lg">Lead Context</CardTitle>
               </CardHeader>
               <CardContent className="p-6 space-y-6">
                  <div className="text-center pb-6 border-b border-slate-100 dark:border-slate-800">
                     <div className="w-20 h-20 rounded-2xl bg-brand-500/10 flex items-center justify-center text-brand-500 text-3xl font-bold mx-auto mb-4">
                        JD
                     </div>
                     <h4 className="font-bold text-lg">John Doe</h4>
                     <p className="text-xs text-slate-500">Captured via WhatsApp</p>
                  </div>

                  <div className="space-y-4">
                     <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">AI Confidence</span>
                        <span className="text-sm font-bold text-green-500">92%</span>
                     </div>
                     <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 w-[92%]" />
                     </div>
                  </div>

                  <div className="space-y-4">
                     <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                           <Clock size={16} />
                        </div>
                        <div>
                           <p className="text-[10px] font-bold text-slate-400 uppercase">Wait Time</p>
                           <p className="text-xs font-bold">1.4 seconds</p>
                        </div>
                     </div>
                     <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                           <Info size={16} />
                        </div>
                        <div>
                           <p className="text-[10px] font-bold text-slate-400 uppercase">Intent Detected</p>
                           <p className="text-xs font-bold text-brand-500">Price Inquiry</p>
                        </div>
                     </div>
                  </div>

                  <div className="pt-4 space-y-3">
                     <Button className="w-full rounded-xl bg-slate-900 text-white font-bold text-xs h-10">
                        Take over Chat
                     </Button>
                     <Button variant="outline" className="w-full rounded-xl border-slate-200 text-xs font-bold h-10">
                        Mark as Converted
                     </Button>
                  </div>
               </CardContent>
            </Card>
         </div>
      </div>
    </div>
  );
}
