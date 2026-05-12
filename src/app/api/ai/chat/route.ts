import { NextRequest, NextResponse } from "next/server";
import { aiService, BusinessConfig } from "@/services/gemini";
import { firebaseService, COLLECTIONS } from "@/services/firebase";

export async function POST(req: NextRequest) {
  console.log("📥 [API] Chat request received");
  try {
    const body = await req.json();
    const { message, history, businessId } = body;
    console.log(`📩 [API] Message: "${message}" | Business: ${businessId} | History: ${history?.length} msgs`);

    if (!message || !businessId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 1. Fetch Business Config from Firestore
    let settings: any = null;
    try {
      settings = await firebaseService.getById(COLLECTIONS.SETTINGS, businessId);
    } catch (e) {
      console.warn("Firebase fetch failed, using demo fallback");
    }
    
    // Default config for demo purposes
    const config: BusinessConfig = {
      name: settings?.businessName || "Nuvora AI Demo",
      personality: settings?.aiPersonality || "Asistente experto de Nuvora AI",
      tone: settings?.tone || "professional",
      faqs: settings?.faqs || [],
      handoverRules: settings?.handoverRules || "Si el cliente está muy interesado o tiene dudas complejas, sugerí hablar con un humano.",
    };

    // 2. Detect Intent
    const intent = await aiService.detectIntent(message);

    // 3. Generate AI Response
    const aiResponse = await aiService.generateResponse(message, history, config);

    // 4. (Optional) Log conversation or handle specific intents
    if (intent === "HANDOVER") {
      // In a real app, you'd trigger a notification here
      console.log("HANDOVER DETECTED for business:", businessId);
    }

    return NextResponse.json({ 
      response: aiResponse,
      intent,
      timestamp: new Date().toISOString()
    });

  } catch (error: any) {
    console.error("AI Chat Error:", error);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}
