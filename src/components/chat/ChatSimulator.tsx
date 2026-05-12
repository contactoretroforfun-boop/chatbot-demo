"use client";

import { useState, useRef, useEffect } from "react";
import { 
  Send, 
  User, 
  MessageCircle, 
  Bot, 
  Shield, 
  Loader2, 
  Sparkles, 
  Mail, 
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  CheckCheck,
  MoreVertical,
  Paperclip,
  Camera,
  Mic,
  Smile,
  Calendar,
  Info,
  Clock,
  Plus
} from "lucide-react";
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
  options?: { icon: any, label: string }[];
}

export function ChatSimulator() {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "¡Hola! 👋 Gracias por escribirnos. Soy el asistente virtual de Nuvora AI. ¿En qué puedo ayudarte hoy?",
      sender: "bot",
      timestamp: "11:30",
      options: [
        { icon: Calendar, label: "Agendar consulta" },
        { icon: Info, label: "Información sobre servicios" },
        { icon: Clock, label: "Horarios de atención" },
        { icon: MessageCircle, label: "Otra consulta" }
      ]
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showOptions, setShowOptions] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (text: string = input) => {
    if (!text.trim() || isTyping) return;

    // Hide options permanently after interaction
    setShowOptions(false);

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
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
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
        };
        setMessages((prev) => [...prev, botResponse]);
      }
    } catch (error) {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "Hubo un error al procesar tu mensaje. Por favor intenta de nuevo.",
        sender: "bot",
        timestamp: "Error",
      };
      setMessages((prev) => [...prev, botResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-[380px] h-[780px] bg-black rounded-[3.5rem] p-[12px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] border-[6px] border-[#1f1f1f] flex flex-col z-40">
      
      {/* Notch */}
      <div className="absolute top-[12px] inset-x-0 h-[30px] z-50 pointer-events-none flex justify-center">
        <div className="w-[120px] h-full bg-black rounded-b-[1.5rem]"></div>
      </div>
      
      {/* Screen */}
      <div className="w-full h-full flex flex-col bg-[#070B14] rounded-[2.8rem] overflow-hidden relative shadow-inner">
        
        {/* Status Bar */}
        <div className="h-12 flex items-end justify-between px-8 pb-1 text-white text-[12px] font-bold">
           <span>11:30</span>
           <div className="flex gap-1.5 items-center">
              <div className="flex items-end gap-[1px]">
                 <div className="w-[3px] h-[6px] bg-white rounded-[0.5px]" />
                 <div className="w-[3px] h-[8px] bg-white rounded-[0.5px]" />
                 <div className="w-[3px] h-[10px] bg-white rounded-[0.5px]" />
                 <div className="w-[3px] h-[12px] bg-white rounded-[0.5px] opacity-30" />
              </div>
              <div className="w-5 h-2.5 border border-white/40 rounded-[3px] relative">
                 <div className="absolute inset-[1px] bg-white rounded-[1px] w-[80%]" />
              </div>
           </div>
        </div>

        {/* WhatsApp Header */}
        <div className="bg-[#0B1020] px-4 py-4 flex items-center justify-between border-b border-white/5">
          <div className="flex items-center gap-3">
            <ChevronLeft className="text-white w-5 h-5 cursor-pointer" />
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center relative">
               <span className="text-white font-black text-xs">N</span>
               <div className="absolute top-0.5 right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#0B1020]" />
            </div>
            <div>
              <p className="font-bold text-[14px] text-white leading-none">Nuvora AI</p>
              <p className="text-[10px] text-slate-400 mt-1 font-medium">Asistente Virtual</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
             <MoreVertical className="text-slate-400 w-5 h-5" />
          </div>
        </div>

        {/* Chat Area */}
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#070B14] custom-scrollbar relative"
        >
          {/* WhatsApp Date Label */}
          <div className="flex justify-center my-4">
             <span className="bg-[#0B1020] text-slate-500 text-[10px] px-3 py-1 rounded-lg font-bold uppercase tracking-wider">Hoy</span>
          </div>

          <AnimatePresence>
            {messages.map((message) => (
              <div key={message.id} className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "flex w-full",
                    message.sender === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[85%] p-3.5 px-4 rounded-2xl relative shadow-sm",
                      message.sender === "user"
                        ? "bg-primary text-white rounded-tr-none"
                        : "bg-[#0B1020] text-white rounded-tl-none border border-white/5"
                    )}
                  >
                    <p className="text-[14px] leading-snug">{message.text}</p>
                     <div className="flex items-center justify-end gap-1 mt-1">
                        <span className="text-[9px] opacity-50 font-medium">{message.timestamp}</span>
                        {message.sender === "user" && <CheckCheck size={12} className="text-white/60" />}
                     </div>
                  </div>
                </motion.div>

                {/* Interactive Options (Only visible if showOptions is true and it's the specific message that has options) */}
                {message.options && showOptions && (
                  <div className="space-y-2 pl-4">
                    {message.options.map((opt, i) => (
                      <motion.button
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        onClick={() => handleSend(opt.label)}
                        className="flex items-center gap-3 w-[80%] bg-[#0B1020] border border-white/10 p-3 rounded-xl hover:bg-primary/10 hover:border-primary/50 transition-all text-left group"
                      >
                         <opt.icon size={16} className="text-slate-400 group-hover:text-primary" />
                         <span className="text-[13px] text-slate-200 font-medium group-hover:text-white">{opt.label}</span>
                      </motion.button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </AnimatePresence>

          {isTyping && (
             <div className="flex justify-start">
                <div className="bg-[#0B1020] p-3 rounded-xl rounded-tl-none border border-white/5">
                   <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
                      <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.4s]" />
                   </div>
                </div>
             </div>
          )}
        </div>

        {/* WhatsApp Input */}
        <div className="p-4 pt-2 bg-[#070B14]">
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSend(); }} 
            className="flex items-center gap-2"
          >
            <div className="flex-1 bg-[#0B1020] border border-white/5 rounded-full px-4 py-2.5 flex items-center gap-3">
               <Smile size={22} className="text-slate-400 cursor-pointer" />
               <input
                 type="text"
                 value={input}
                 onChange={(e) => setInput(e.target.value)}
                 placeholder="Escribe un mensaje"
                 className="flex-1 bg-transparent text-white text-[14px] outline-none placeholder:text-slate-500"
               />
               <Paperclip size={20} className="text-slate-400 rotate-45 cursor-pointer" />
               <Camera size={20} className="text-slate-400 cursor-pointer" />
            </div>
            <button 
              type="submit"
              className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20 active:scale-90 transition-transform"
            >
               {input.trim() ? <Send size={20} /> : <Mic size={20} />}
            </button>
          </form>
          <div className="h-4" /> {/* Home Indicator Space */}
        </div>

      </div>
    </div>
  );
}
