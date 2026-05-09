import { GoogleGenerativeAI, Part } from "@google/generative-ai";

// Use server-side env var first, fallback to public for demo purposes
const API_KEY = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";

// Only initialize if we have a key
const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null;

// Initial startup log
console.log("==========================================");
console.log("🤖 CHATFLOW AI SYSTEM STATUS");
console.log(`🔑 API Key Configured: ${API_KEY ? "YES" : "NO"}`);
console.log(`🧠 AI Engine: ${API_KEY ? "GEMINI REAL (gemini-2.5-flash)" : "MOCK FALLBACK"}`);
console.log("==========================================");

export interface BusinessConfig {
  name: string;
  personality: string;
  tone: "professional" | "friendly" | "humorous" | "formal";
  faqs: { question: string; answer: string }[];
  handoverRules: string;
}

/**
 * Resilient AI Service for Demo Mode (Rioplatense Spanish - Uruguay/Argentina)
 */
export const aiService = {
  /**
   * Generates a response using Gemini or Mock fallback in Rioplatense Spanish
   */
  async generateResponse(
    message: string,
    history: { role: "user" | "model"; text: string }[],
    config: BusinessConfig
  ) {
    if (!genAI) {
      console.log("⚠️ [AI SYSTEM] No API Key found. Using MOCK FALLBACK for response.");
      return this.getMockResponse(message, config);
    }

    console.log(`🚀 [AI SYSTEM] Sending request to REAL GEMINI API (Model: gemini-2.5-flash)...`);

    try {
      const model = genAI.getGenerativeModel({ 
        model: "gemini-2.5-flash",
        generationConfig: {
          maxOutputTokens: 500,
          temperature: 0.7,
        }
      });

      const systemPrompt = `
        Sos un asistente de IA para ${config.name}.
        Personalidad: ${config.personality}
        Tono: ${config.tone} (usá español rioplatense, voseo, Uruguay/Argentina)
        Conocimiento del Negocio: ${config.faqs.map(f => `P: ${f.question} R: ${f.answer}`).join(" ")}
        Reglas: ${config.handoverRules}
        
        INSTRUCCIONES IMPORTANTES:
        - Respondé siempre en ESPAÑOL RIOPLATENSE (usá el "vos" y "andá", "hacé", etc).
        - Sé conciso y directo en tus respuestas, pero asegurate de terminar siempre las oraciones. Si te piden una lista larga, intentá resumirla.
        - Usá un estilo natural para WhatsApp.
        - Si el usuario quiere reservar, hablá de "sacar un turno" o "hacer una reserva".
        - Si el usuario hace preguntas muy específicas, fuera de tu conocimiento o la conversación llega a un límite, aprovechá para introducir sutilmente un mensaje de venta. Por ejemplo: "Actualmente estás viendo una versión demo genérica 😊. En una implementación real, me entrenan con toda la información específica de tu negocio, incluyendo horarios, precios y reservas." La transición debe ser elegante y enfocada en vender el potencial del chatbot.
      `;

      // Gemini strict rule: history must start with a 'user' message.
      // Our simulator starts with a 'model' greeting, so we strip it.
      const firstUserIndex = history.findIndex(h => h.role === "user");
      const validHistory = firstUserIndex >= 0 ? history.slice(firstUserIndex) : [];

      const chat = model.startChat({
        history: validHistory.map(h => ({
          role: h.role === "user" ? "user" : "model",
          parts: [{ text: h.text }],
        })),
      });

      const result = await chat.sendMessage([
        { text: systemPrompt },
        { text: `Mensaje del usuario: ${message}` }
      ]);
      
      console.log(`✅ [AI SYSTEM] REAL GEMINI API responded successfully.`);
      return (await result.response).text();
    } catch (error) {
      console.error("❌ [AI SYSTEM] Gemini API Error:", error);
      console.log("⚠️ [AI SYSTEM] Falling back to MOCK FALLBACK due to error.");
      return this.getMockResponse(message, config);
    }
  },

  /**
   * Detects intent in Spanish
   */
  async detectIntent(message: string) {
    if (!genAI) return "INFO";

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
      const prompt = `Clasificá el intento de este mensaje (HANDOVER, BOOKING, INFO, GREETING): "${message}". Respondé solo con la palabra.`;
      const result = await model.generateContent(prompt);
      return result.response.text().trim().toUpperCase();
    } catch (err) {
      return "INFO";
    }
  },

  /**
   * Mock responses in Rioplatense Spanish
   */
  getMockResponse(message: string, config: BusinessConfig) {
    const msg = message.toLowerCase();
    
    if (msg.includes("hola") || msg.includes("che") || msg.includes("buen día")) {
      return `¡Hola! 👋 ¿Cómo andás? Bienvenido a ${config.name}. ¿En qué te puedo ayudar hoy?`;
    }
    if (msg.includes("precio") || msg.includes("cuánto sale") || msg.includes("costo")) {
      return `Los precios varían según lo que necesités. ¿Querés que te pase nuestra lista de precios actualizada?`;
    }
    if (msg.includes("ubicación") || msg.includes("dónde están") || msg.includes("dirección")) {
      return `Estamos por el centro. ¿Querés que te mande la ubicación exacta por WhatsApp?`;
    }
    if (msg.includes("cita") || msg.includes("turno") || msg.includes("reservar")) {
      return `¡Dale! Te ayudo a sacar un turno. ¿Qué día y hora te queda mejor?`;
    }
    if (msg.includes("gracias") || msg.includes("joya") || msg.includes("dale")) {
      return `¡De nada! Cualquier cosa avisame. ¡Un gusto ayudarte! 😊`;
    }
    
    return `Esa es una excelente pregunta. Actualmente estás interactuando con una versión demo genérica 😊. En una implementación real, el asistente se entrena y personaliza completamente con la información específica de tu negocio para automatizar tu atención al cliente y tus ventas.`;
  }
};
