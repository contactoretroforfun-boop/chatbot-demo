"use client";

import Image from "next/image";
import logoAgency from "../../../public/logo.png";
import logoAi from "../../../public/logo-ai.png";
import logoIsotype from "../../../public/logo-isotype.png";
import logoNeon from "../../../public/logo-neon.png";
import { cn } from "@/lib/utils";

type LogoVariant = "icon" | "full" | "neon" | "neon-img" | "ai-badge" | "agency-official";
type LogoType = "agency" | "ai" | "isotype" | "neon";

interface NuvoraLogoProps {
  variant?: LogoVariant;
  logoType?: LogoType;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  centered?: boolean;
}

export function NuvoraLogo({ 
  variant = "full", 
  logoType = "agency",
  size = "md", 
  className = "", 
  centered = true 
}: NuvoraLogoProps) {
  
  const heights = {
    xs: 24,
    sm: 36,
    md: 48,
    lg: 70,
    xl: 120
  };

  // Determine which image to use
  let imageSrc = logoAgency;
  if (logoType === "ai") imageSrc = logoAi;
  if (logoType === "isotype") imageSrc = logoIsotype;
  if (logoType === "neon" || variant === "neon-img") imageSrc = logoNeon;

  return (
    <div className={cn(
      "flex items-center gap-3",
      centered ? "justify-center" : "justify-start",
      className
    )}>
      {/* CONTENEDOR DE IMAGEN */}
      <div className="relative group">
        <Image 
          src={imageSrc} 
          alt="Nuvora" 
          height={heights[size]}
          className={cn(
            "w-auto object-contain transition-all duration-500 select-none pointer-events-none",
            // Only apply screen blending for the neon logo which has a black background
            (variant === "neon-img" || logoType === "neon") && "mix-blend-screen brightness-125 contrast-110",
            // No more filters for the official agency logo - show it as is
            variant === "icon" && "hover:scale-110"
          )}
          priority
        />
      </div>
    </div>
  );
}
