"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  User, 
  Building, 
  Mail, 
  Bell, 
  Shield, 
  Smartphone, 
  CreditCard,
  Save,
  Globe,
  Lock,
  ChevronRight,
  Zap
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SettingsPage() {
  return (
    <div className="space-y-8 animate-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">Manage your account, business profile, and preferences.</p>
        </div>
        <Button className="rounded-xl gap-2 shadow-lg shadow-brand-500/20">
          <Save className="w-4 h-4" /> Save All Changes
        </Button>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl h-auto flex-wrap sm:flex-nowrap">
          <TabsTrigger value="profile" className="rounded-xl px-6 py-2.5 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 data-[state=active]:shadow-sm">Profile</TabsTrigger>
          <TabsTrigger value="business" className="rounded-xl px-6 py-2.5 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 data-[state=active]:shadow-sm">Business</TabsTrigger>
          <TabsTrigger value="security" className="rounded-xl px-6 py-2.5 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 data-[state=active]:shadow-sm">Security</TabsTrigger>
          <TabsTrigger value="billing" className="rounded-xl px-6 py-2.5 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 data-[state=active]:shadow-sm">Billing</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <Card className="border-none shadow-premium glass">
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Update your personal details and profile picture.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-500 to-whatsapp-teal flex items-center justify-center text-white text-3xl font-bold">
                  JD
                </div>
                <div>
                   <Button variant="outline" className="rounded-xl mb-2">Change Avatar</Button>
                   <p className="text-xs text-muted-foreground">JPG, GIF or PNG. Max size of 2MB.</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold">First Name</label>
                  <Input defaultValue="Joel" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold">Last Name</label>
                  <Input defaultValue="Demo" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold">Email Address</label>
                  <Input defaultValue="joel@example.com" type="email" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold">Phone Number</label>
                  <Input defaultValue="+1 234 567 890" type="tel" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-premium glass">
            <CardHeader>
              <CardTitle>Regional Preferences</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
               <div className="space-y-2">
                  <label className="text-sm font-bold">Language</label>
                  <select className="w-full px-4 h-11 rounded-xl bg-slate-50 dark:bg-slate-800 border-none text-sm outline-none focus:ring-2 focus:ring-brand-500 transition-all">
                    <option>English (US)</option>
                    <option>Spanish (ES)</option>
                    <option>Portuguese (BR)</option>
                  </select>
               </div>
               <div className="space-y-2">
                  <label className="text-sm font-bold">Timezone</label>
                  <select className="w-full px-4 h-11 rounded-xl bg-slate-50 dark:bg-slate-800 border-none text-sm outline-none focus:ring-2 focus:ring-brand-500 transition-all">
                    <option>(GMT-05:00) Eastern Time</option>
                    <option>(GMT+00:00) UTC</option>
                    <option>(GMT-03:00) Buenos Aires</option>
                  </select>
               </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="business" className="space-y-6">
           <Card className="border-none shadow-premium glass">
             <CardHeader>
               <CardTitle>Business Profile</CardTitle>
               <CardDescription>This information will be used by the AI to represent your business.</CardDescription>
             </CardHeader>
             <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold">Business Name</label>
                  <Input defaultValue="Demo Business LLC" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold">Business Address</label>
                  <textarea 
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-none text-sm outline-none focus:ring-2 focus:ring-brand-500 transition-all resize-none"
                    rows={3}
                    defaultValue="123 Innovation Way, Tech City, 90210"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-sm font-bold">Industry</label>
                      <Input defaultValue="Healthcare / Dental" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-sm font-bold">Website</label>
                      <Input defaultValue="https://demobusiness.com" />
                   </div>
                </div>
             </CardContent>
           </Card>
        </TabsContent>

        <TabsContent value="billing" className="space-y-6">
           <div className="grid md:grid-cols-3 gap-6">
              <Card className="md:col-span-2 border-none shadow-premium glass">
                <CardHeader>
                  <CardTitle>Active Plan</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                   <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                         <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-500">
                            <Zap className="w-6 h-6 fill-current" />
                         </div>
                         <div>
                            <h4 className="font-bold">Business Pro Plan</h4>
                            <p className="text-xs text-muted-foreground">$79/month • Next bill on Jun 1, 2024</p>
                         </div>
                      </div>
                      <Badge variant="success">ACTIVE</Badge>
                   </div>

                   <div className="space-y-4">
                      <h4 className="text-sm font-bold">Payment Method</h4>
                      <div className="flex items-center justify-between p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                         <div className="flex items-center gap-3">
                            <div className="w-10 h-6 bg-slate-200 dark:bg-slate-700 rounded flex items-center justify-center text-[10px] font-bold">VISA</div>
                            <span className="text-sm font-medium">•••• •••• •••• 4242</span>
                         </div>
                         <Button variant="ghost" size="sm" className="text-xs font-bold text-brand-500">Edit</Button>
                      </div>
                   </div>
                </CardContent>
                <CardFooter className="border-t border-slate-100 dark:border-slate-800 p-4">
                   <Button variant="ghost" className="text-xs font-bold text-red-500">Cancel Subscription</Button>
                </CardFooter>
              </Card>

              <Card className="border-none shadow-premium glass bg-slate-900 text-white">
                <CardHeader>
                   <CardTitle className="text-lg">Usage Statistics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                   <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                         <span className="opacity-70">AI Messages</span>
                         <span className="font-bold">4,284 / 10,000</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                         <div className="h-full bg-brand-500 w-[42%]" />
                      </div>
                   </div>
                   <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                         <span className="opacity-70">Active Contacts</span>
                         <span className="font-bold">842 / 2,500</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                         <div className="h-full bg-blue-400 w-[33%]" />
                      </div>
                   </div>
                   <Button className="w-full mt-4 bg-white text-slate-900 hover:bg-slate-100 rounded-xl font-bold">
                      Upgrade Limits
                   </Button>
                </CardContent>
              </Card>
           </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
