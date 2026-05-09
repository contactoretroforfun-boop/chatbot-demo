"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { MessageSquare, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { toast } = useToast();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // 1. Create User in Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // 2. Create User document in Firestore
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name,
        email,
        businessName,
        role: "admin",
        createdAt: new Date().toISOString(),
      });

      // 3. Create initial settings for the business
      await setDoc(doc(db, "settings", user.uid), {
        businessName,
        whatsappStatus: "disconnected",
        aiPersonality: "Professional and helpful",
        language: "en",
        updatedAt: new Date().toISOString(),
      });

      toast({
        title: "Account created!",
        description: "Welcome to ChatFlow. Let's set up your assistant.",
        variant: "success",
      });
      
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message || "Failed to create account.");
      toast({
        title: "Signup Error",
        description: err.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-6">
      <Link href="/" className="flex items-center gap-2 mb-8 group">
        <div className="bg-brand-500 p-2 rounded-xl shadow-lg shadow-brand-500/20 group-hover:scale-110 transition-transform">
          <MessageSquare className="text-white w-6 h-6" />
        </div>
        <span className="text-2xl font-bold tracking-tight">ChatFlow</span>
      </Link>

      <Card className="w-full max-w-md border-none shadow-2xl glass overflow-hidden">
        <CardHeader className="space-y-1 pb-8">
          <CardTitle className="text-2xl font-bold text-center">Get Started</CardTitle>
          <CardDescription className="text-center">
            Create your account to start automating
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {error && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold flex items-center gap-2 animate-in fade-in zoom-in">
              <AlertCircle size={14} /> {error}
            </div>
          )}

          <form onSubmit={handleSignup} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-bold ml-1">Full Name</label>
              <Input 
                placeholder="John Doe" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold ml-1">Business Name</label>
              <Input 
                placeholder="My Awesome Clinic" 
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold ml-1">Email</label>
              <Input 
                type="email" 
                placeholder="name@example.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold ml-1">Password</label>
              <Input 
                type="password" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            <Button type="submit" className="w-full h-12 rounded-xl bg-brand-500 hover:bg-brand-600 font-bold shadow-lg shadow-brand-500/20 mt-2" disabled={isLoading}>
              {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Create Account"}
            </Button>
          </form>

          <div className="space-y-3">
             <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                <p className="text-[10px] text-slate-500 font-medium">14-day free trial on Business Plan</p>
             </div>
             <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                <p className="text-[10px] text-slate-500 font-medium">No credit card required to start</p>
             </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4 border-t border-slate-100 dark:border-slate-800 p-8 bg-slate-50/50 dark:bg-slate-900/50">
          <p className="text-sm text-slate-500 text-center">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-brand-500 font-bold hover:underline">Sign in</Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
