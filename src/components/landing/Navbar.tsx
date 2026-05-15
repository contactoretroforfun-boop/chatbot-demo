"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

import { NuvoraLogo } from "@/components/ui/NuvoraLogo";

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
        isScrolled ? "bg-[#070B14]/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="group origin-left">
           <NuvoraLogo size="sm" centered={false} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="#features" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Funciones</Link>
          <Link href="#solutions" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Soluciones</Link>
          <Link href="#pricing" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Precios</Link>
          <div className="flex items-center gap-4 ml-4">
            <Button variant="outline" className="rounded-full px-6 border-white/10 text-white font-bold hover:bg-white/5" asChild>
              <Link href="/nuvora-ai" className="flex items-center justify-center">Nuvora AI</Link>
            </Button>
            <Button className="rounded-full px-6 bg-primary hover:bg-brand-600 font-bold text-white shadow-lg shadow-primary/20" asChild>
              <Link href={`https://wa.me/59891746967?text=${encodeURIComponent("Hola Nuvora! Me gustaría contactar con ustedes.")}`} target="_blank" className="flex items-center justify-center">Contactar</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-white"
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
            className="absolute top-full left-0 right-0 bg-card border-b border-white/10 p-6 flex flex-col gap-4 md:hidden shadow-2xl"
          >
            <Link href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-white">Funciones</Link>
            <Link href="#solutions" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-white">Soluciones</Link>
            <Link href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-white">Precios</Link>
            <hr className="border-white/5" />
            <Button variant="outline" className="w-full font-bold text-white border-white/10" asChild>
              <Link href="/nuvora-ai" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center">Nuvora AI</Link>
            </Button>
            <Button className="w-full bg-primary font-bold text-white" asChild>
              <Link href={`https://wa.me/59891746967?text=${encodeURIComponent("Hola Nuvora! Me gustaría contactar con ustedes.")}`} target="_blank" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center">Contactar</Link>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
