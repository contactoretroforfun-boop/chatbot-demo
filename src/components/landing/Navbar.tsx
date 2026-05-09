"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageSquare, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-brand-500 p-2 rounded-lg">
            <MessageSquare className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            Chat<span className="text-brand-500">Flow</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm font-bold hover:text-brand-500 transition-colors">Funciones</Link>
          <Link href="#solutions" className="text-sm font-bold hover:text-brand-500 transition-colors">Soluciones</Link>
          <Link href="#pricing" className="text-sm font-bold hover:text-brand-500 transition-colors">Precios</Link>
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild className="font-bold">
              <Link href="/auth/login">Entrar</Link>
            </Button>
            <Button variant="outline" className="rounded-full px-6 border-brand-500 text-brand-500 font-bold hover:bg-brand-50" asChild>
              <Link href="/demo">Demo en Vivo</Link>
            </Button>
            <Button className="rounded-full px-6 bg-brand-500 hover:bg-brand-600 font-bold" asChild>
              <Link href="/auth/signup">Empezar Gratis</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-b border-slate-200 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            <Link href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold">Funciones</Link>
            <Link href="#solutions" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold">Soluciones</Link>
            <Link href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold">Precios</Link>
            <hr className="border-slate-100" />
            <Button variant="outline" className="w-full font-bold" asChild>
              <Link href="/auth/login">Entrar</Link>
            </Button>
            <Button className="w-full bg-brand-500 font-bold" asChild>
              <Link href="/auth/signup">Empezar Gratis</Link>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
