"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Download, 
  Plus, 
  MoreHorizontal, 
  Mail, 
  Phone, 
  Tag, 
  Calendar,
  Filter,
  ArrowUpRight,
  User,
  MoreVertical,
  CheckCircle2,
  Clock,
  Activity,
  Users
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const leads = [
  { id: 1, name: "John Doe", email: "john@example.com", phone: "+1 234 567 890", source: "WhatsApp", status: "Hot", date: "2024-05-08", score: 95 },
  { id: 2, name: "Sarah Smith", email: "sarah@gmail.com", phone: "+1 987 654 321", source: "Facebook", status: "Warm", date: "2024-05-07", score: 72 },
  { id: 3, name: "Mike Johnson", email: "mike.j@outlook.com", phone: "+1 555 123 456", source: "WhatsApp", status: "Cold", date: "2024-05-07", score: 45 },
  { id: 4, name: "Emily Brown", email: "emily.b@tech.com", phone: "+1 444 777 888", source: "WhatsApp", status: "Hot", date: "2024-05-06", score: 88 },
  { id: 5, name: "Alex Wilson", email: "alex.w@company.io", phone: "+1 333 222 111", source: "Direct", status: "Warm", date: "2024-05-05", score: 68 },
];

export default function LeadsPage() {
  return (
    <div className="space-y-8 animate-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Leads Management</h1>
          <p className="text-slate-500 font-medium">Track and qualify potential customers captured by AI.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="rounded-xl gap-2 border-slate-200 dark:border-slate-800">
            <Download className="w-4 h-4" /> Export CSV
          </Button>
          <Button className="rounded-xl gap-2 bg-brand-500 hover:bg-brand-600 shadow-lg shadow-brand-500/20">
            <Plus className="w-4 h-4" /> Create Lead
          </Button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
         <Card className="border-none shadow-premium glass p-6">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center text-brand-500">
                  <Users size={24} />
               </div>
               <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Total Leads</p>
                  <h3 className="text-2xl font-bold">1,284</h3>
               </div>
            </div>
         </Card>
         <Card className="border-none shadow-premium glass p-6">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500">
                  <Activity size={24} />
               </div>
               <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Hot Leads</p>
                  <h3 className="text-2xl font-bold">42</h3>
               </div>
            </div>
         </Card>
         <Card className="border-none shadow-premium glass p-6">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500">
                  <CheckCircle2 size={24} />
               </div>
               <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Converted</p>
                  <h3 className="text-2xl font-bold">15%</h3>
               </div>
            </div>
         </Card>
      </div>

      <Card className="border-none shadow-premium glass overflow-hidden">
        <CardHeader className="p-6 border-b border-slate-100 dark:border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative max-w-sm w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                placeholder="Search by name or email..." 
                className="w-full pl-11 pr-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border-none text-sm outline-none focus:ring-2 focus:ring-brand-500 transition-all"
              />
            </div>
            <div className="flex items-center gap-2">
               <Button variant="outline" size="sm" className="rounded-xl gap-2 border-slate-200 dark:border-slate-800">
                  <Filter size={14} /> Filters
               </Button>
               <div className="w-px h-6 bg-slate-200 dark:bg-slate-800 mx-2" />
               <Button variant="ghost" size="sm" className="text-xs font-bold text-brand-500">View All</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-slate-50/50 dark:bg-slate-900/50">
              <TableRow className="border-none">
                <TableHead className="pl-6 h-14">Lead Name</TableHead>
                <TableHead>Contact Info</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="pr-6 text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leads.map((lead) => (
                <TableRow key={lead.id} className="border-slate-100 dark:border-slate-800 hover:bg-slate-50/50 dark:hover:bg-slate-900/50 transition-colors">
                  <TableCell className="pl-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 font-bold text-xs shadow-sm">
                        {lead.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-sm text-slate-900 dark:text-white">{lead.name}</p>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Added {lead.date}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                        <Mail className="w-3.5 h-3.5 opacity-60" /> {lead.email}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                        <Phone className="w-3.5 h-3.5 opacity-60" /> {lead.phone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-[10px] px-2 py-0.5">
                       {lead.source}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                       <div className="w-12 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div className={cn(
                            "h-full rounded-full",
                            lead.score > 80 ? "bg-red-500" : lead.score > 50 ? "bg-orange-500" : "bg-blue-500"
                          )} style={{ width: `${lead.score}%` }} />
                       </div>
                       <span className="text-xs font-black text-slate-700 dark:text-slate-300">{lead.score}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={cn(
                      "border-none px-3 py-1 font-bold rounded-lg text-[10px] tracking-wider",
                      lead.status === "Hot" ? "bg-red-500/10 text-red-500" :
                      lead.status === "Warm" ? "bg-orange-500/10 text-orange-500" :
                      "bg-blue-500/10 text-blue-500"
                    )}>
                      {lead.status.toUpperCase()}
                    </Badge>
                  </TableCell>
                  <TableCell className="pr-6 text-right">
                    <DropdownMenu>
                       <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800">
                             <MoreVertical size={16} className="text-slate-400" />
                          </Button>
                       </DropdownMenuTrigger>
                       <DropdownMenuContent align="end" className="p-2 rounded-2xl shadow-xl">
                          <DropdownMenuItem className="p-2 rounded-xl cursor-pointer text-sm font-medium gap-2">
                             <User size={14} /> View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem className="p-2 rounded-xl cursor-pointer text-sm font-medium gap-2">
                             <Calendar size={14} /> Book Appointment
                          </DropdownMenuItem>
                          <DropdownMenuItem className="p-2 rounded-xl cursor-pointer text-sm font-medium gap-2 text-red-500 hover:bg-red-50">
                             Delete Lead
                          </DropdownMenuItem>
                       </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <div className="p-4 bg-slate-50/50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
           <p className="text-xs text-slate-500 font-medium">Showing 5 of 1,284 leads</p>
           <div className="flex gap-2">
              <Button variant="outline" size="sm" className="rounded-lg h-8 px-3 text-xs disabled:opacity-50" disabled>Previous</Button>
              <Button variant="outline" size="sm" className="rounded-lg h-8 px-3 text-xs border-brand-500 text-brand-500">1</Button>
              <Button variant="outline" size="sm" className="rounded-lg h-8 px-3 text-xs">2</Button>
              <Button variant="outline" size="sm" className="rounded-lg h-8 px-3 text-xs">Next</Button>
           </div>
        </div>
      </Card>
    </div>
  );
}

