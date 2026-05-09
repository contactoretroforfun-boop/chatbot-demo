"use client";

import { useState, useRef, useEffect } from "react";
import { Send, User, MessageCircle, Bot, Shield, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/context/AuthContext";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: string;
}

export function ChatSimulator() {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "¡Hola! 👋 ¿Cómo andás? Soy tu asistente virtual. ¿En qué te puedo ayudar hoy?",
      sender: "bot",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: input,
          history: messages.map(m => ({
            role: m.sender === "user" ? "user" : "model",
            text: m.text
          })),
          businessId: user?.uid || "demo-business",
        }),
      });

      const data = await response.json();

      if (data.response) {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: data.response,
          sender: "bot",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prev) => [...prev, botResponse]);
      } else {
         throw new Error("Sin respuesta");
      }
    } catch (error) {
      console.error("Error:", error);
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "Perdoná, ando con problemas para conectarme ahora. ¿Me aguantás un ratito e intentás más tarde?",
        sender: "bot",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botResponse]);
    } finally {
      setIsTyping(false);
    }
  };
  return (
    <div className="relative mx-auto w-full max-w-full md:max-w-[400px] h-[calc(100dvh-35px)] md:h-[800px] md:bg-slate-900 md:dark:bg-[#1a1a1a] md:rounded-[3.5rem] md:p-[14px] md:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] flex flex-col z-40">
      
      {/* iPhone Hardware Frame Elements (Desktop Only) */}
      <div className="hidden md:block absolute top-[14px] inset-x-0 h-[35px] z-50 pointer-events-none flex justify-center">
         <div className="w-[120px] h-full bg-black rounded-b-3xl mx-auto"></div>
      </div>
      {/* Side Buttons */}
      <div className="hidden md:block absolute -left-[2px] top-[120px] w-1 h-8 bg-slate-800 rounded-l-md pointer-events-none"></div>
      <div className="hidden md:block absolute -left-[2px] top-[170px] w-1 h-14 bg-slate-800 rounded-l-md pointer-events-none"></div>
      <div className="hidden md:block absolute -left-[2px] top-[240px] w-1 h-14 bg-slate-800 rounded-l-md pointer-events-none"></div>
      <div className="hidden md:block absolute -right-[2px] top-[190px] w-1 h-20 bg-slate-800 rounded-r-md pointer-events-none"></div>

      {/* Screen Content Container (This clips the green header perfectly) */}
      <div className="w-full h-full flex flex-col bg-[#efeae2] dark:bg-slate-950 md:rounded-[2.5rem] rounded-none rounded-b-2xl shadow-xl overflow-hidden relative z-40">
        
        {/* iOS Status Bar */}
        <div className="hidden md:flex absolute top-0 inset-x-0 h-14 items-start justify-between px-7 pt-4 z-50 text-white pointer-events-none">
           <span className="text-[13px] font-bold tracking-tight">9:41</span>
           <div className="flex gap-1.5 items-center opacity-90 mt-0.5">
              {/* Signal */}
              <div className="flex items-end gap-[1px] h-3">
                 <div className="w-1 h-1.5 bg-white rounded-sm" />
                 <div className="w-1 h-2 bg-white rounded-sm" />
                 <div className="w-1 h-2.5 bg-white rounded-sm" />
                 <div className="w-1 h-3 bg-white rounded-sm" />
              </div>
              {/* Battery */}
              <div className="w-5 h-2.5 border border-white rounded-[3px] p-[1px] relative flex items-center">
                 <div className="w-full h-full bg-white rounded-[1px]" />
                 <div className="absolute -right-1 w-[2px] h-1 bg-white rounded-r-sm" />
              </div>
           </div>
        </div>

        {/* WhatsApp Style Header */}
        <div className="bg-[#075e54] p-4 text-white flex items-center justify-between shadow-md relative z-40 md:pt-14 pt-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-[#075e54] shadow-inner">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-sm">Asistente Virtual</p>
              <div className="flex items-center gap-1">
                 <div className="w-1.5 h-1.5 bg-whatsapp-green rounded-full animate-pulse" />
                 <p className="text-[10px] opacity-80 font-medium">En línea</p>
              </div>
            </div>
          </div>
          <Badge variant="outline" className="bg-white/10 text-white border-white/20 text-[9px] gap-1.5 px-3 py-1 mt-auto">
             <Shield size={10} className="fill-current" /> SEGURO
          </Badge>
        </div>

      {/* Chat Messages */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#efeae2] dark:bg-slate-950/50 custom-scrollbar"
      >
        <div className="flex justify-center mb-6">
           <Badge className="bg-slate-500/10 text-slate-500 border-none font-bold text-[9px] px-3 py-0.5 rounded-lg uppercase tracking-tighter">
              Los mensajes están cifrados de punta a punta
           </Badge>
        </div>

        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.2 }}
              className={cn(
                "flex",
                message.sender === "user" ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={cn(
                  "max-w-[80%] p-3.5 rounded-2xl shadow-sm relative",
                  message.sender === "user"
                    ? "bg-[#dcf8c6] dark:bg-brand-900/60 text-slate-800 dark:text-slate-100 rounded-tr-none"
                    : "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-tl-none"
                )}
              >
                <p className="text-[13px] leading-relaxed whitespace-pre-wrap break-words">{message.text}</p>
                <p className="text-[9px] text-slate-400 text-right mt-1.5 font-bold uppercase tracking-tighter">
                  {message.timestamp}
                </p>
                
                {/* Message Tail */}
                <div className={cn(
                  "absolute top-0 w-2 h-2",
                  message.sender === "user" 
                    ? "-right-1 bg-[#dcf8c6] dark:bg-brand-900/60 [clip-path:polygon(0_0,0_100%,100%_0)]" 
                    : "-left-1 bg-white dark:bg-slate-800 [clip-path:polygon(100%_0,100%_100%,0_0)]"
                )} />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {isTyping && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none shadow-sm">
               <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-slate-300 dark:bg-slate-600 rounded-full animate-bounce" />
                  <div className="w-1.5 h-1.5 bg-slate-300 dark:bg-slate-600 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-1.5 h-1.5 bg-slate-300 dark:bg-slate-600 rounded-full animate-bounce [animation-delay:0.4s]" />
               </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Chat Input */}
      <div className="p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="flex gap-2 relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Escribí un mensaje..."
            className="flex-1 bg-white dark:bg-slate-800 border-none rounded-2xl px-5 py-3.5 text-sm focus:ring-2 focus:ring-brand-500 outline-none transition-all pr-12 shadow-inner"
          />
          <Button 
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            className="absolute right-1 top-1 bottom-1 w-11 h-11 p-0 rounded-xl bg-brand-500 hover:bg-brand-600 shadow-lg shadow-brand-500/20"
          >
            {isTyping ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-4 h-4" />}
          </Button>
        </div>
        <div className="flex justify-center mt-3">
           <p className="text-[10px] text-slate-400 font-bold flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-brand-500" /> Potenciado por Gemini 2.5 Flash
           </p>
        </div>
      </div>
      
      {/* End Screen Content Container */}
      </div>
    </div>
  );
}
