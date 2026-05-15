import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/context/AuthContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Nuvora Agency | Automatización y Diseño Premium en Uruguay",
  description: "Agencia digital especializada en automatización, asistentes IA para WhatsApp y diseño web de alto impacto en Uruguay.",
  openGraph: {
    title: "Nuvora Agency | Automatización y Diseño Premium",
    description: "Modernizá tu negocio con tecnología de vanguardia. Asistentes IA, diseño web y automatización profesional.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nuvora Agency Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuvora Agency | Automatización y Diseño Premium",
    description: "Modernizá tu negocio con tecnología de vanguardia. Asistentes IA, diseño web y automatización profesional.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <AuthProvider>
          {children}
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
