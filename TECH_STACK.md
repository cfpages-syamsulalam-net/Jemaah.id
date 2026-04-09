# Jemaah.id Tech Stack

This document outlines the unified technical architecture for Jemaah.id, supporting Web, iOS, and Android from a single codebase.

## 1. Core Frameworks
- **Frontend (Web/Mobile):** [React](https://react.dev/) (v18+) with [Vite](https://vitejs.dev/) for fast development and optimized builds.
- **Language:** [TypeScript](https://www.typescriptlang.org/) for type safety and better developer experience.
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) for a utility-first, consistent design implementation following the "Emerald Canopy" system.
- **Icons:** [Lucide React](https://lucide.dev/) for consistent, lightweight iconography.

## 2. Unified Multi-Platform Strategy
To ensure "one update represented in all versions," we utilize a **Web-First Unified Approach**:
- **Web:** Deployed directly to **Cloudflare Pages**.
- **Mobile (iOS & Android):** [Capacitor](https://capacitorjs.com/) by Ionic.
  - Capacitor wraps the web application into a native container.
  - Allows access to native APIs (Camera for passport scan, Push Notifications).
  - Enables "Live Updates" (via [Capacitor Live Updates](https://ionic.io/docs/live-updates) or simply updating the web source) for non-native changes.
  - **Ease of Use:** Write once in React, run everywhere. No need for separate Swift/Kotlin/React Native codebases.

## 3. Backend & Infrastructure
- **Fullstack Framework:** [Hono](https://hono.dev/) (Lightweight, fast, and runs perfectly on Cloudflare Workers).
- **Deployment:** [Cloudflare Pages](https://pages.cloudflare.com/) (Frontend) and [Cloudflare Workers](https://workers.cloudflare.com/) (Serverless Backend).
- **Database:** [PostgreSQL](https://www.postgresql.org/) (via [Supabase](https://supabase.com/) or [Neon](https://neon.tech/)) for robust relational data handling.
- **Authentication:** [Supabase Auth](https://supabase.com/auth) or [Clerk](https://clerk.com/) for secure, social login (Google/WhatsApp).

## 4. State Management & Data Fetching
- **Server State:** [TanStack Query (React Query)](https://tanstack.com/query/latest) for caching, synchronization, and seamless API interaction.
- **Client State:** [Zustand](https://github.com/pmndrs/zustand) for lightweight global state (e.g., comparison drawer, user preferences).

## 5. Critical Integrations
- **Maps & Location:** [Google Maps Platform](https://developers.google.com/maps) (Places API, Distance Matrix API) for hotel verification.
- **Flight Data:** [Amadeus for Developers](https://developers.amadeus.com/) or [Skyscanner API](https://developers.skyscanner.net/) for real-time flight validation.
- **Government Data:** Custom scrapers or official API integrations for Kemenag SISKOPATUH (Travel Agency verification).
- **OCR/AI:** [Tesseract.js](https://tesseract.projectnaptha.com/) or [Google Cloud Vision](https://cloud.google.com/vision) for AI Brochure Scanner and Passport Uploads.

## 6. Deployment Workflow
1. **Push to GitHub:** Main branch triggers a Cloudflare Pages build.
2. **Web Live:** Changes are immediately live on `jemaah.id`.
3. **Mobile Sync:** Capacitor pulls the latest web build into the native iOS/Android wrappers.
4. **App Stores:** Initial submission to App Store/Play Store is required; subsequent web-logic updates can be pushed without re-submission using the web-view nature of Capacitor.
