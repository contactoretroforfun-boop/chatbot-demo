# Nuvora Agency - Design System (Boutique Tech)

The "Boutique Tech" design system is designed to evoke a sense of exclusivity, speed, and intelligence.

## Aesthetic Pillars
- **Dark Tech / Futuristic Noir**: Deep dark backgrounds (`#070B14`) to emphasize focus and high-end positioning.
- **Glassmorphism**: Using `backdrop-blur-3xl` and semi-transparent backgrounds (`bg-white/[0.02]` or `bg-card/40`) to create depth.
- **Neon Accents**: Using a vibrant primary violet/indigo with glows to represent AI "energy".

## Core Styles (Tailwind)
- **Primary Color**: Custom violet used for CTAs and highlights.
- **Text Neon**: Utility class `.text-neon` for a shimmering, glowing effect on key headings.
- **Borders**: Subtle `border-white/5` or `border-white/10` for card separation without heavy lines.
- **Rounded Corners**: Aggressive rounding for a modern feel (e.g., `rounded-[2.5rem]` or `rounded-full`).

## Component Guidelines
- **Buttons**: Large, bold, and high-impact. Primary buttons use the primary color with a glow. Secondary buttons use ghost or outline styles with glassmorphism.
- **Cards**: Large padding (`p-10+`), high rounding, and subtle hover animations (`whileHover={{ y: -10 }}`).
- **Modals**: Professional popups using `Dialog` (Radix) with `backdrop-blur-2xl` and clear, benefit-driven content.

## Typography
- **Headings**: `font-black`, `tracking-tighter`, `leading-none`.
- **Labels**: `font-bold`, `uppercase`, `tracking-[0.3em]`, `text-[10px]`.
- **Body**: `font-medium`, `text-slate-400`, `leading-relaxed`.
