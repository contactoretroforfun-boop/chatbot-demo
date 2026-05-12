"use client";

import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Sparkles, Globe, Loader2, AlertCircle, Share2 } from "lucide-react";
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
        title: "¡Bienvenido de nuevo!",
        description: "Has iniciado sesión correctamente.",
      });
      router.push("/dashboard");
    } catch (err: any) {
      setError("Email o contraseña incorrectos. Por favor, verifica tus datos.");
      toast({
        title: "Error de acceso",
        description: "Credenciales inválidas.",
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
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-accent/5 blur-[100px] rounded-full pointer-events-none" />

      <Link href="/" className="flex items-center gap-3 mb-10 group relative z-10">
        <div className="bg-primary p-2.5 rounded-xl shadow-lg shadow-primary/20 group-hover:scale-110 transition-all duration-500">
          <Sparkles className="text-white w-7 h-7" />
        </div>
        <span className="text-3xl font-bold tracking-tight text-white">Nuvora<span className="text-primary">AI</span></span>
      </Link>

      <Card className="w-full max-w-md border border-white/10 shadow-2xl bg-card/50 backdrop-blur-3xl rounded-[2.5rem] overflow-hidden relative z-10">
        <CardHeader className="space-y-2 pb-8 pt-10 px-8">
          <CardTitle className="text-3xl font-bold text-center text-white tracking-tight">Bienvenido</CardTitle>
          <CardDescription className="text-center text-slate-400 font-medium">
            Ingresa tus credenciales para acceder al panel
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8 px-8">
          {error && (
            <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold flex items-center gap-3 animate-in fade-in slide-in-from-top-1">
              <AlertCircle size={16} /> {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-widest text-slate-500 ml-1">Email</label>
              <Input 
                type="email" 
                placeholder="nombre@empresa.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
                className="bg-white/5 border-white/10 rounded-2xl h-12 px-5 focus:ring-primary/50 text-white"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-[11px] font-black uppercase tracking-widest text-slate-500">Contraseña</label>
                <Link href="#" className="text-[10px] text-primary font-bold hover:text-white transition-colors uppercase tracking-widest">¿Olvidaste tu contraseña?</Link>
              </div>
              <Input 
                type="password" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
                className="bg-white/5 border-white/10 rounded-2xl h-12 px-5 focus:ring-primary/50 text-white"
              />
            </div>
            <Button type="submit" className="w-full h-14 rounded-2xl bg-primary hover:bg-brand-600 font-bold shadow-xl shadow-primary/20 mt-4 text-white transition-all hover:scale-[1.02] active:scale-[0.98]" disabled={isLoading}>
              {isLoading ? <Loader2 className="w-6 h-6 animate-spin" /> : "Iniciar Sesión"}
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-white/5" />
            </div>
            <div className="relative flex justify-center text-[10px] uppercase tracking-[0.2em]">
              <span className="bg-[#0B1020] px-4 text-slate-500 font-bold">O continúa con</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="rounded-2xl h-12 gap-3 border-white/10 bg-white/5 text-white hover:bg-white/10" onClick={handleGoogleLogin} disabled={isLoading}>
              <Globe className="w-4 h-4" /> Google
            </Button>
            <Button variant="outline" className="rounded-2xl h-12 gap-3 border-white/10 bg-white/5 text-white hover:bg-white/10" disabled={isLoading}>
              <Share2 className="w-4 h-4" /> GitHub
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4 border-t border-white/5 p-10 bg-white/[0.02] mt-8">
          <p className="text-sm text-slate-400 text-center font-medium">
            ¿No tienes una cuenta?{" "}
            <Link href="/auth/signup" className="text-primary font-bold hover:text-white transition-colors">Regístrate</Link>
          </p>
        </CardFooter>
      </Card>
      
      <p className="mt-10 text-[10px] text-slate-500 max-w-xs text-center leading-relaxed uppercase tracking-widest font-bold">
        Al continuar, aceptas nuestros <Link href="#" className="underline hover:text-white transition-colors">Términos de Servicio</Link> y <Link href="#" className="underline hover:text-white transition-colors">Política de Privacidad</Link>.
      </p>
    </div>
  );
}
