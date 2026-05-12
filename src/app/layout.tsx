import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/context/AuthContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Nuvora AI | Asistente Inteligente para WhatsApp",
  description: "Atención automatizada 24/7 para negocios y profesionales. Respuestas inteligentes y captación de clientes por WhatsApp.",
  openGraph: {
    title: "Nuvora AI | Asistente Inteligente para WhatsApp",
    description: "Atención automatizada 24/7 para negocios y profesionales. Respuestas inteligentes y captación de clientes por WhatsApp.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nuvora AI Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuvora AI | Asistente Inteligente para WhatsApp",
    description: "Atención automatizada 24/7 para negocios y profesionales. Respuestas inteligentes y captación de clientes por WhatsApp.",
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
