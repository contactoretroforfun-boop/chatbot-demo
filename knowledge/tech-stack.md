# Nuvora Agency - Technology Stack

This document outlines the core technology stack used for Nuvora Agency projects to ensure consistency in performance and developer experience.

## Core Framework
- **Next.js 15+**: React framework for production. Used for SSR (Server Side Rendering) and high-performance static generation.
- **TypeScript**: Ensuring type safety across all services and components.
- **Node.js**: Backend execution environment.

## Styling & UI
- **Tailwind CSS v4**: Utility-first CSS framework. Custom theme configurations are defined in `globals.css` using the new `@theme` block.
- **Radix UI / shadcn**: Primitive UI components for accessible and premium-feeling interfaces (Dialogs, Buttons, Badges).
- **Lucide React**: Icon library for consistent, minimalist iconography.

## Animations & UX
- **Framer Motion**: Used for all complex animations (hover states, layouts, entry transitions).
- **Neon-Shimmer Effect**: A custom text effect implemented via CSS keyframes (`text-shimmer`) and a utility class `.text-neon`.

## Backend & Services
- **Firebase**: Used for Authentication, Firestore (Database), and Storage.
- **Gemini AI API**: Powering the "Nuvora AI" receptionist demo with natural language processing.
- **WhatsApp Cloud API**: Targeted integration for business communication.

## Deployment
- **Vercel**: Primary deployment platform with automatic Git integration and branch previews.
