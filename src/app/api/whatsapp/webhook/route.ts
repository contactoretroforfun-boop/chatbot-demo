import { NextRequest, NextResponse } from "next/server";

// In demo mode, we just return success or challenge without strict validation
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const challenge = searchParams.get("hub.challenge");
  return new NextResponse(challenge || "Webhook Active (Demo Mode)", { status: 200 });
}

export async function POST(req: NextRequest) {
  // In demo mode, we ignore real webhook posts but keep the endpoint active
  return NextResponse.json({ status: "ignored", mode: "demo" });
}
