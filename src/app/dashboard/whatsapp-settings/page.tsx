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
  ShieldCheck
} from "lucide-react";

export default function WhatsAppSettingsPage() {
  return (
    <div className="space-y-8 animate-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">WhatsApp Integration</h1>
          <p className="text-muted-foreground">Connect and manage your WhatsApp Business Cloud API.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="rounded-xl gap-2">
            <RefreshCw className="w-4 h-4" /> Check Status
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Connection Card */}
          <Card className="border-none shadow-premium glass">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Connection Status</CardTitle>
                <CardDescription>Real-time link with Meta Cloud API.</CardDescription>
              </div>
              <div className="flex items-center gap-2 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-3 py-1 rounded-full text-xs font-bold">
                <CheckCircle2 className="w-4 h-4" /> Connected
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-border bg-slate-50/50 dark:bg-slate-900/50">
                  <p className="text-xs text-muted-foreground mb-1 uppercase font-bold tracking-wider">Phone Number ID</p>
                  <div className="flex items-center justify-between">
                    <code className="text-sm">348927492837492</code>
                    <Copy className="w-4 h-4 text-muted-foreground cursor-pointer hover:text-brand-500" />
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-border bg-slate-50/50 dark:bg-slate-900/50">
                  <p className="text-xs text-muted-foreground mb-1 uppercase font-bold tracking-wider">Business Account ID</p>
                  <div className="flex items-center justify-between">
                    <code className="text-sm">928374928374928</code>
                    <Copy className="w-4 h-4 text-muted-foreground cursor-pointer hover:text-brand-500" />
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-border bg-slate-50/50 dark:bg-slate-900/50">
                <p className="text-xs text-muted-foreground mb-1 uppercase font-bold tracking-wider">Access Token</p>
                <div className="flex items-center justify-between gap-4">
                  <code className="text-sm truncate">EAALk9ZC4ZA8BAMfGZCZAZCZCZCZCZCZCZCZCZCZCZCZCZCZCZCZCZCZCZCZCZCZCZCZC</code>
                  <div className="flex gap-2">
                    <Copy className="w-4 h-4 text-muted-foreground cursor-pointer" />
                    <RefreshCw className="w-4 h-4 text-muted-foreground cursor-pointer" />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-slate-50/50 dark:bg-slate-900/50 p-4">
               <Button variant="ghost" className="text-xs font-bold gap-2 ml-auto" asChild>
                 <a href="https://developers.facebook.com" target="_blank" rel="noopener noreferrer">
                   Meta Developers Portal <ExternalLink className="w-3 h-3" />
                 </a>
               </Button>
            </CardFooter>
          </Card>

          {/* Webhook Card */}
          <Card className="border-none shadow-premium glass">
            <CardHeader>
              <CardTitle>Webhook Configuration</CardTitle>
              <CardDescription>Setup these values in your Meta App Dashboard to receive messages.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-bold">Callback URL</label>
                <div className="flex gap-2">
                  <input 
                    readOnly
                    value="https://your-domain.com/api/whatsapp/webhook"
                    className="flex-1 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-border text-sm outline-none"
                  />
                  <Button variant="outline" size="icon" className="rounded-xl"><Copy className="w-4 h-4" /></Button>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold">Verify Token</label>
                <div className="flex gap-2">
                  <input 
                    readOnly
                    value="chatflow_verify_token_123"
                    className="flex-1 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-border text-sm outline-none"
                  />
                  <Button variant="outline" size="icon" className="rounded-xl"><Copy className="w-4 h-4" /></Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border-none shadow-premium glass">
            <CardHeader>
               <div className="w-12 h-12 rounded-xl bg-brand-500 flex items-center justify-center text-white mb-4">
                 <MessageCircle className="w-6 h-6" />
               </div>
              <CardTitle className="text-lg">WhatsApp Health</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
               <div className="flex justify-between text-sm">
                 <span className="text-muted-foreground">API Latency</span>
                 <span className="font-bold">240ms</span>
               </div>
               <div className="flex justify-between text-sm">
                 <span className="text-muted-foreground">Message Success</span>
                 <span className="font-bold">99.9%</span>
               </div>
               <div className="flex justify-between text-sm">
                 <span className="text-muted-foreground">Webhooks Received</span>
                 <span className="font-bold">12.4k</span>
               </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-premium glass bg-slate-900 text-white">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-400" />
                Meta Verification
              </CardTitle>
            </CardHeader>
            <CardContent>
               <p className="text-sm opacity-80 mb-4">
                 Your business account is verified. You can send unlimited messages to customers.
               </p>
               <div className="flex items-center gap-2 text-brand-400 text-xs font-bold">
                 <CheckCircle2 className="w-4 h-4" /> ACTIVE STATUS
               </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
