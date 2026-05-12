import Image from "next/image";
import logo from "../../../public/logo.png";

export function NuvoraLogo({ className = "", showSubheader = false, size = "md", centered = true }: { className?: string, showSubheader?: boolean, size?: "sm" | "md" | "lg", centered?: boolean }) {
  const heights = {
    sm: 42,
    md: 64,
    lg: 90
  };

  return (
    <div className={`flex flex-col ${centered ? "items-center justify-center text-center" : "items-start justify-start text-left"} gap-0 ${className}`}>
      <div className="relative flex items-center justify-center">
        <Image 
          src={logo} 
          alt="Nuvora AI" 
          height={heights[size]}
          className="w-auto object-contain invert hue-rotate-180 brightness-[2] contrast-[1.1] select-none pointer-events-none"
          priority
        />
      </div>
      
      {showSubheader && (
        <p className={`
          ${size === "lg" ? "text-[8.5px] sm:text-[10px] lg:text-[13px] mt-5 tracking-[0.2em] sm:tracking-[0.3em] lg:tracking-[0.45em]" : "text-[8px] mt-3 tracking-[0.2em]"} 
          font-black uppercase text-white/70 ml-1 leading-tight ${centered ? "text-center" : "text-left"}
        `}>
          Asistente Inteligente para WhatsApp
        </p>
      )}
    </div>
  );
}
