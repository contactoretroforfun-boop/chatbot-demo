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
  RotateCcw
} from "lucide-react";

export default function AISettingsPage() {
  return (
    <div className="space-y-8 animate-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">AI Settings</h1>
          <p className="text-muted-foreground">Configure your AI assistant's personality and behavior.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="rounded-xl gap-2">
            <RotateCcw className="w-4 h-4" /> Reset
          </Button>
          <Button className="rounded-xl gap-2 shadow-lg shadow-brand-500/20">
            <Save className="w-4 h-4" /> Save Changes
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Personality Card */}
          <Card className="border-none shadow-premium glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-brand-500" />
                Assistant Persona
              </CardTitle>
              <CardDescription>Define how your AI speaks and acts.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold">Assistant Name</label>
                  <input 
                    defaultValue="ChatFlow AI"
                    className="w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-border text-sm outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold">Tone of Voice</label>
                  <select className="w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-border text-sm outline-none focus:ring-2 focus:ring-primary">
                    <option>Professional & Helpful</option>
                    <option>Friendly & Casual</option>
                    <option>Enthusiastic & Sales-driven</option>
                    <option>Minimalist & Direct</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold">System Instructions (Prompt)</label>
                <textarea 
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-border text-sm outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="You are a helpful assistant for a dental clinic..."
                  defaultValue="You are a helpful assistant for 'Demo Business'. Your goal is to provide information about our services, capture leads by asking for their name and email, and assist with booking appointments. Always be polite and professional."
                ></textarea>
                <p className="text-[11px] text-muted-foreground">This is the core logic that tells the AI how to behave.</p>
              </div>
            </CardContent>
          </Card>

          {/* Handover Card */}
          <Card className="border-none shadow-premium glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-500">
                <ShieldAlert className="w-5 h-5" />
                Human Handover
              </CardTitle>
              <CardDescription>Control when the AI should stop and notify a human.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl border border-border bg-slate-50/50 dark:bg-slate-900/50">
                <div>
                  <h4 className="text-sm font-bold">Low Confidence Trigger</h4>
                  <p className="text-xs text-muted-foreground">Escalate if AI is less than 70% sure of the answer.</p>
                </div>
                <div className="w-12 h-6 bg-brand-500 rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                </div>
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl border border-border bg-slate-50/50 dark:bg-slate-900/50">
                <div>
                  <h4 className="text-sm font-bold">Explicit Request</h4>
                  <p className="text-xs text-muted-foreground">Escalate when customer asks for a 'human' or 'agent'.</p>
                </div>
                <div className="w-12 h-6 bg-brand-500 rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border-none shadow-premium glass">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Languages className="w-5 h-5 text-blue-500" />
                Languages
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-border">
                <span className="text-xl">🇺🇸</span>
                <span className="text-sm font-medium">English (Default)</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-border opacity-50">
                <span className="text-xl">🇪🇸</span>
                <span className="text-sm font-medium">Spanish</span>
              </div>
              <Button variant="ghost" className="w-full text-xs font-bold text-brand-600 dark:text-brand-400">
                + Add Multilingual Support
              </Button>
            </CardContent>
          </Card>

          <Card className="border-none shadow-premium glass">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Settings2 className="w-5 h-5 text-purple-500" />
                Model Version
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 rounded-xl border-2 border-brand-500 bg-brand-50/50 dark:bg-brand-900/10">
                <h4 className="text-sm font-bold">Gemini 1.5 Flash</h4>
                <p className="text-[10px] text-muted-foreground">Fastest & most cost-efficient (Recommended)</p>
              </div>
              <div className="p-4 rounded-xl border border-border bg-slate-50/50 dark:bg-slate-900/50 opacity-60">
                <h4 className="text-sm font-bold">Gemini 1.5 Pro</h4>
                <p className="text-[10px] text-muted-foreground">Advanced reasoning & complex tasks</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
