import { NextRequest, NextResponse } from "next/server";
import { aiService, BusinessConfig } from "@/services/gemini";
import { firebaseService, COLLECTIONS } from "@/services/firebase";

export async function POST(req: NextRequest) {
  try {
    const { message, history, businessId } = await req.json();

    if (!message || !businessId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 1. Fetch Business Config from Firestore
    // For this demo, we'll fetch from the 'settings' collection which we initialized in Signup
    const settings: any = await firebaseService.getById(COLLECTIONS.SETTINGS, businessId);
    
    if (!settings) {
      return NextResponse.json({ error: "Business settings not found" }, { status: 404 });
    }

    const config: BusinessConfig = {
      name: settings.businessName || "Our Business",
      personality: settings.aiPersonality || "A helpful assistant",
      tone: settings.tone || "professional",
      faqs: settings.faqs || [],
      handoverRules: settings.handoverRules || "If the user is frustrated, offer a human agent.",
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
