import { GoogleGenerativeAI, Part } from "@google/generative-ai";

// Use server-side env var first, fallback to public for demo purposes
const API_KEY = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";

// Only initialize if we have a key
const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null;

// Initial startup log
console.log("==========================================");
console.log("🤖 NUVORA AI SYSTEM STATUS");
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
    // 1. Calculate the current user message number
    const userMessages = history.filter(h => h.role === "user");
    const messageNumber = userMessages.length + 1;

    console.log(`💬 [AI SYSTEM] Processing User Message #${messageNumber}`);

    // 2. Handle Demo Limits (Message 4 and Message 5+)
    if (messageNumber === 4) {
      return `¡Gracias por probar esta demo! 🎉

Has llegado al límite de esta versión de prueba. Esta conversación fue una pequeña muestra de lo que un agente de IA personalizado puede hacer por tu negocio las 24 horas del día, los 7 días de la semana.

Lo que acabas de experimentar es solo una fracción de las posibilidades:
✅ Atención automática de consultas
✅ Gestión de turnos y reservas
✅ Derivación inteligente a tu equipo
✅ Recordatorios automáticos por WhatsApp
✅ Respuestas personalizadas con tu marca, tono y servicios reales

Para tu negocio, todo esto estaría configurado con tu información, tu nombre, tus servicios y conectado a tus herramientas.

👉 ¿Quieres ver cómo quedaría para tu negocio específico?
📲 Escribinos a +59896750713`;
    }

    if (messageNumber >= 5) {
      return `🤖 Esta demo ha llegado a su fin.

Para continuar la conversación o recibir una propuesta personalizada para tu negocio, contactanos en +59896750713.

¡Gracias por tu interés! 😊`;
    }

    if (!genAI) {
      console.log("⚠️ [AI SYSTEM] No API Key found. Using MOCK FALLBACK for response.");
      return this.getMockResponse(message, config);
    }

    console.log(`🚀 [AI SYSTEM] Sending request to REAL GEMINI API (Model: gemini-2.5-flash)...`);

    try {
      const model = genAI.getGenerativeModel({ 
        model: "gemini-2.5-flash",
        generationConfig: {
          temperature: 0.7,
        },
        systemInstruction: `
          SOS UN ASISTENTE VIRTUAL DE WHATSAPP LLAMADO "Nuvora AI".
          ESTÁS EN MODO DEMO INTERACTIVA PARA NEGOCIOS LOCALES.

          ## TU ROL Y CONTEXTO
          Actuás como si YA FUERAS el asistente del negocio del cliente que te escribe, adaptándote dinámicamente a su rubro. 
          - Si el usuario dice que tiene una clínica dental, sos el asistente de esa clínica. 
          - Si tiene un restaurante, sos el asistente del restaurante. 
          - Si no lo dice, actuás de forma genérica para servicios locales (hoteles, abogados, gimnasios, spas, etc).

          ## TUS FUNCIONES (Debés demostrar al menos algunas en estos primeros 3 mensajes):
          1. Bienvenida profesional: Saludo cálido y presentarte como el asistente.
          2. Gestión de turnos: Simular toma de turno (pedir nombre, servicio, fecha/hora) y confirmar reserva.
          3. Información: Horarios, precios aprox, ubicación, pagos.
          4. Calificación: Hacer preguntas inteligentes para filtrar la necesidad.
          5. Derivación: Simular paso a un humano ("Te comunico con María, nuestra coordinadora") sin transferir.
          6. Fuera de horario: Si aplica, avisar horarios y ofrecer agendar para luego.
          7. Seguimiento: Mencionar que el sistema envía recordatorios por WhatsApp.
          8. FAQs: Responder dudas comunes con empatía.

          ## REGLAS DE RESPUESTA:
          - Usá ESPAÑOL RIOPLATENSE (voseo: "vos", "andá", "hacé").
          - Tono: Profesional pero conversacional, cálido y no robótico.
          - NOTA TÉCNICA: Cuando demuestres una función clave (como reservar), agregá al final de tu mensaje una nota breve entre corchetes explicando la función. Ejemplo: [🔧 Función: Gestión automática de citas — en tu versión personalizada, esto se conecta a tu calendario real.]
          - Si preguntan si sos IA: Admitilo con naturalidad. "Soy la versión demo. En tu negocio estaría 100% personalizado con tus datos reales."
        `
      });

      const firstUserIndex = history.findIndex(h => h.role === "user");
      const validHistory = firstUserIndex >= 0 ? history.slice(firstUserIndex) : [];

      const chat = model.startChat({
        history: validHistory.map(h => ({
          role: h.role === "user" ? "user" : "model",
          parts: [{ text: h.text }],
        })),
      });

      const result = await chat.sendMessage(message);
      
      const responseText = (await result.response).text();
      console.log(`✅ [AI SYSTEM] Response generated: "${responseText.substring(0, 50)}..."`);
      return responseText;
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
    
    return `Esa es una excelente pregunta. Actualmente estás interactuando con una versión demo de Nuvora AI 😊. En una implementación real de élite, me entrenan y personalizan completamente con la información específica de tu negocio para automatizar tu atención al cliente y potenciar tus ventas de forma inteligente.`;
  }
};
