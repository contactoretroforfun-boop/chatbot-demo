"use client";

import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { MessageSquare, Globe, Loader2, AlertCircle, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast({
        title: "Welcome back!",
        description: "Successfully logged in to your dashboard.",
        variant: "success",
      });
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message || "Failed to login. Please check your credentials.");
      toast({
        title: "Login Failed",
        description: "Invalid email or password.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push("/dashboard");
    } catch (err: any) {
      console.error(err);
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
          <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
          <CardDescription className="text-center">
            Enter your email to access your dashboard
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {error && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold flex items-center gap-2 animate-in fade-in zoom-in">
              <AlertCircle size={14} /> {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
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
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-bold">Password</label>
                <Link href="#" className="text-xs text-brand-500 font-bold hover:underline">Forgot password?</Link>
              </div>
              <Input 
                type="password" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            <Button type="submit" className="w-full h-12 rounded-xl bg-brand-500 hover:bg-brand-600 font-bold shadow-lg shadow-brand-500/20" disabled={isLoading}>
              {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Sign In"}
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-200 dark:border-slate-800" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white dark:bg-slate-900 px-2 text-slate-400 font-bold">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="rounded-xl h-12 gap-2 border-slate-200 dark:border-slate-800" onClick={handleGoogleLogin} disabled={isLoading}>
              <Globe className="w-4 h-4" /> Google
            </Button>
            <Button variant="outline" className="rounded-xl h-12 gap-2 border-slate-200 dark:border-slate-800" disabled={isLoading}>
              <Share2 className="w-4 h-4" /> GitHub
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4 border-t border-slate-100 dark:border-slate-800 p-8 bg-slate-50/50 dark:bg-slate-900/50">
          <p className="text-sm text-slate-500 text-center">
            Don't have an account?{" "}
            <Link href="/auth/signup" className="text-brand-500 font-bold hover:underline">Sign up</Link>
          </p>
        </CardFooter>
      </Card>
      
      <p className="mt-8 text-xs text-slate-400 max-w-xs text-center leading-relaxed">
        By clicking continue, you agree to our <Link href="#" className="underline">Terms of Service</Link> and <Link href="#" className="underline">Privacy Policy</Link>.
      </p>
    </div>
  );
}
