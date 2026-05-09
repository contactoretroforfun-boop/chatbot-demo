"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Plus, 
  FileText, 
  Globe, 
  Database, 
  Trash2, 
  Edit2, 
  Search, 
  RefreshCw,
  AlertCircle,
  CheckCircle2,
  Sparkles,
  Link as LinkIcon
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const sources = [
  { id: 1, name: "Services & Pricing.pdf", type: "PDF", status: "Synced", date: "2024-05-08" },
  { id: 2, name: "Clinic FAQ.docx", type: "DOCX", status: "Synced", date: "2024-05-07" },
  { id: 3, name: "https://mysite.com/about", type: "URL", status: "Processing", date: "2024-05-09" },
  { id: 4, name: "Company History.txt", type: "TXT", status: "Synced", date: "2024-05-01" },
];

export default function KnowledgeBasePage() {
  return (
    <div className="space-y-8 animate-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Knowledge Base</h1>
          <p className="text-slate-500 font-medium">Train your AI with your business documents and websites.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="rounded-xl gap-2 border-slate-200 dark:border-slate-800">
            <RefreshCw className="w-4 h-4" /> Resync All
          </Button>
          <Button className="rounded-xl gap-2 bg-brand-500 hover:bg-brand-600 shadow-lg shadow-brand-500/20">
            <Plus className="w-4 h-4" /> Add Source
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 border-none shadow-premium glass overflow-hidden">
          <CardHeader className="p-6 border-b border-slate-100 dark:border-slate-800 flex flex-row items-center justify-between">
            <div>
              <CardTitle>Data Sources</CardTitle>
              <CardDescription>Documents and links used to train your assistant.</CardDescription>
            </div>
            <div className="relative w-64 hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                placeholder="Search sources..." 
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border-none text-sm outline-none focus:ring-2 focus:ring-brand-500 transition-all"
              />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {sources.map((item) => (
                <div key={item.id} className="p-6 flex items-center justify-between hover:bg-slate-50/50 dark:hover:bg-slate-900/50 transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 group-hover:scale-110 transition-transform">
                      {item.type === "PDF" && <FileText className="w-6 h-6 text-red-500" />}
                      {item.type === "DOCX" && <FileText className="w-6 h-6 text-blue-500" />}
                      {item.type === "URL" && <Globe className="w-6 h-6 text-brand-500" />}
                      {item.type === "TXT" && <Database className="w-6 h-6 text-slate-500" />}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white">{item.name}</h4>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Added {item.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge className={cn(
                      "px-2.5 py-0.5 rounded-full border-none font-bold text-[10px]",
                      item.status === "Synced" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                    )}>
                      {item.status.toUpperCase()}
                    </Badge>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" className="rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"><Edit2 className="w-4 h-4 text-slate-400" /></Button>
                      <Button variant="ghost" size="icon" className="rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 text-red-500"><Trash2 className="w-4 h-4" /></Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="bg-slate-50/50 dark:bg-slate-900/50 p-4 justify-center">
             <Button variant="ghost" className="text-sm font-bold text-brand-600 dark:text-brand-400">View All 12 Sources</Button>
          </CardFooter>
        </Card>

        <div className="space-y-6">
          <Card className="border-none shadow-premium glass">
            <CardHeader>
              <CardTitle className="text-lg">AI Health</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 uppercase">Knowledge Coverage</span>
                  <span className="text-sm font-bold">88%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                   <div className="h-full bg-brand-500 w-[88%]" />
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-brand-500/5 border border-brand-500/10 space-y-3">
                 <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-brand-500" />
                    <span className="text-xs font-bold">Training Optimal</span>
                 </div>
                 <p className="text-[11px] text-slate-500 leading-relaxed">
                    Your assistant is currently trained on 42,500 words across 12 sources. Coverage is high for "Pricing" and "Services".
                 </p>
              </div>

              <Button className="w-full rounded-xl bg-slate-900 text-white font-bold text-xs h-11">
                Recalculate Embeddings
              </Button>
            </CardContent>
          </Card>

          <Card className="border-none shadow-premium glass overflow-hidden">
             <CardHeader className="bg-slate-900 text-white p-6">
                <div className="flex items-center gap-2">
                   <LinkIcon size={18} className="text-brand-500" />
                   <CardTitle className="text-lg">Quick Add URL</CardTitle>
                </div>
             </CardHeader>
             <CardContent className="p-6 space-y-4">
                <Input placeholder="https://yourwebsite.com" className="rounded-xl border-slate-100 dark:border-slate-800" />
                <Button className="w-full rounded-xl bg-brand-500 hover:bg-brand-600 shadow-lg shadow-brand-500/20 font-bold">
                   Crawl Website
                </Button>
                <p className="text-[10px] text-slate-400 text-center font-medium">
                   This will crawl up to 50 pages and extract relevant text for the AI.
                </p>
             </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
