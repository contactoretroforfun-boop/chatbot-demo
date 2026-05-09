# ChatFlow AI - WhatsApp Chatbot SaaS Demo

ChatFlow AI is a production-ready SaaS demo for an AI-powered WhatsApp assistant. It helps businesses automate customer communication, capture leads, and book appointments using Gemini AI and WhatsApp Cloud API.

## 🚀 Features

- **Premium Landing Page**: Modern, responsive design with industry-specific sections.
- **Admin Dashboard**: Full dashboard with analytics, conversation management, and lead tracking.
- **WhatsApp Simulator**: Realistic chat interface to test AI responses.
- **AI Integration**: Powered by Google Gemini 1.5 Flash for natural conversations.
- **Knowledge Base**: Train the AI with business-specific documents and FAQs.
- **WhatsApp Cloud API Ready**: Pre-built architecture for official Meta integration.
- **Dark Mode Support**: Beautiful UI for both light and dark preferences.

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Database/Auth**: Firebase (Firestore)
- **AI**: Google Gemini API
- **Icons**: Lucide React
- **Charts**: Recharts

## 📋 Prerequisites

- Node.js 18+
- Firebase Project
- Google AI (Gemini) API Key
- Meta Developer Account (for real WhatsApp integration)

## ⚙️ Setup Instructions

1. **Clone and Install**
   ```bash
   npm install
   ```

2. **Environment Variables**
   Copy `.env.example` to `.env.local` and fill in your credentials:
   ```bash
   cp .env.example .env.local
   ```

3. **Firebase Setup**
   - Create a project at [Firebase Console](https://console.firebase.google.com/).
   - Enable Firestore Database and Authentication (Email/Password).
   - Add your web app credentials to `.env.local`.

4. **Gemini API Key**
   - Get your API key from [Google AI Studio](https://aistudio.google.com/).

5. **Run Locally**
   ```bash
   npm run dev
   ```

## 🔗 WhatsApp Integration Guide

1. Go to [Meta for Developers](https://developers.facebook.com/).
2. Create a Business App and add the WhatsApp product.
3. Configure the Webhook:
   - **Callback URL**: `https://your-domain.com/api/whatsapp/webhook`
   - **Verify Token**: Your custom token (set in `.env.local`).
4. Subscribe to `messages` under Webhook Fields.
5. Add your Phone Number ID and Access Token to `.env.local`.

## 📄 License

This project is for demo purposes. MIT License.
