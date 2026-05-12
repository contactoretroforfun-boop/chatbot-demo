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
import { Sparkles, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";
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
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name,
        email,
        businessName,
        role: "admin",
        createdAt: new Date().toISOString(),
      });

      await setDoc(doc(db, "settings", user.uid), {
        businessName,
        whatsappStatus: "disconnected",
        aiPersonality: "Profesional y servicial",
        language: "es",
        updatedAt: new Date().toISOString(),
      });

      toast({
        title: "¡Cuenta creada!",
        description: "Bienvenido a Nuvora AI. Vamos a configurar tu asistente.",
      });
      
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message || "Error al crear la cuenta.");
      toast({
        title: "Error de registro",
        description: err.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-accent/5 blur-[100px] rounded-full pointer-events-none" />

      <Link href="/" className="flex items-center gap-3 mb-10 group relative z-10">
        <div className="bg-primary p-2.5 rounded-xl shadow-lg shadow-primary/20 group-hover:scale-110 transition-all duration-500">
          <Sparkles className="text-white w-7 h-7" />
        </div>
        <span className="text-3xl font-bold tracking-tight text-white">Nuvora<span className="text-primary">AI</span></span>
      </Link>

      <Card className="w-full max-w-md border border-white/10 shadow-2xl bg-card/50 backdrop-blur-3xl rounded-[2.5rem] overflow-hidden relative z-10">
        <CardHeader className="space-y-2 pb-8 pt-10 px-8">
          <CardTitle className="text-3xl font-bold text-center text-white tracking-tight">Comienza hoy</CardTitle>
          <CardDescription className="text-center text-slate-400 font-medium">
            Crea tu cuenta y automatiza tu éxito
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8 px-8">
          {error && (
            <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold flex items-center gap-3 animate-in fade-in slide-in-from-top-1">
              <AlertCircle size={16} /> {error}
            </div>
          )}

          <form onSubmit={handleSignup} className="space-y-5">
            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-widest text-slate-500 ml-1">Nombre Completo</label>
              <Input 
                placeholder="Ej. Juan Pérez" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={isLoading}
                className="bg-white/5 border-white/10 rounded-2xl h-12 px-5 focus:ring-primary/50 text-white"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-widest text-slate-500 ml-1">Nombre de tu Negocio</label>
              <Input 
                placeholder="Ej. Clínica Dental Nuvora" 
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                required
                disabled={isLoading}
                className="bg-white/5 border-white/10 rounded-2xl h-12 px-5 focus:ring-primary/50 text-white"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-widest text-slate-500 ml-1">Email Corporativo</label>
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
              <label className="text-[11px] font-black uppercase tracking-widest text-slate-500 ml-1">Contraseña</label>
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
              {isLoading ? <Loader2 className="w-6 h-6 animate-spin" /> : "Crear Mi Cuenta de Élite"}
            </Button>
          </form>

          <div className="space-y-4 pt-2">
             <div className="flex items-start gap-3 group">
                <div className="bg-primary/10 p-1 rounded-full group-hover:bg-primary/20 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                </div>
                <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">14 días de prueba gratuita en Plan Business</p>
             </div>
             <div className="flex items-start gap-3 group">
                <div className="bg-primary/10 p-1 rounded-full group-hover:bg-primary/20 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                </div>
                <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Sin tarjeta de crédito obligatoria</p>
             </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4 border-t border-white/5 p-10 bg-white/[0.02] mt-8">
          <p className="text-sm text-slate-400 text-center font-medium">
            ¿Ya tienes una cuenta?{" "}
            <Link href="/auth/login" className="text-primary font-bold hover:text-white transition-colors">Inicia sesión</Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
