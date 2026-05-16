# Nuvora Agency - Technical & Branding Decisions

Critical decisions made during the project to optimize conversion and maintain brand integrity.

## Strategic Decisions
- **WhatsApp-Centric Conversion**: All Call-to-Action (CTA) buttons route to WhatsApp with pre-filled messages. This removes friction and fits the local Uruguayan market perfectly.
- **Boutique Agency Positioning**: Removed "free trial" and generic "sign up" flows. Every inquiry is treated as a personalized consultation, justifying premium pricing.
- **Transparency over Fake Social Proof**: Removed generic testimonials and logo clouds that didn't correspond to real clients, building trust through transparency.

## Technical Implementations
- **Permanent Redirects**: Configured `/demo` to redirect to `/nuvora-ai` in `next.config.ts` to preserve link equity and support existing client shares.
- **Responsive Pricing Grid**: Used a vertical layout for mobile (`p-8`, `rounded-[2.5rem]`) and a multi-column layout for desktop to ensure the "Success Packs" are the first thing users see.
- **Contextual IA Demo**: The `/nuvora-ai` route serves as a functional demo of the agency's core product, allowing potential clients to experience the value proposition before contacting.
