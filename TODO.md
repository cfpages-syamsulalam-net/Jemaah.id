# Jemaah.id Detailed To-Do List

This document lists the specific tasks required to build Jemaah.id, prioritized by impact.

## 🏗️ 0. Infrastructure & Setup
- [x] Initialize React + Vite project with TypeScript.
- [x] Install and configure Tailwind CSS + Lucide Icons.
- [ ] Set up Hono backend in `server/` directory.
- [ ] Configure `wrangler.toml` for Cloudflare deployment.
- [ ] Initialize Supabase project for Auth & Database.
- [x] Setup ESLint & Prettier for code consistency.

## 🎨 1. Core Frontend (Emerald Canopy Design System)
- [x] Create `components/ui/Button.tsx`.
- [x] Create `components/ui/Card.tsx`.
- [x] Create `components/ui/Input.tsx`.
- [x] Create `components/ui/Badge.tsx`.
- [x] Create `components/layout/Navbar.tsx` (Consumer & Partner).
- [x] Create `components/layout/Footer.tsx`.
- [ ] Create `components/layout/Sidebar.tsx` (Partner Dashboard).
- [x] Implement Typography styles in `tailwind.config.js`.

## 🔍 2. Product Features (Consumer Side)
- [x] **Home:** Hero section + Quick search + Featured cards.
- [ ] **Search:** Implement fuzzy search + Advanced filtering logic.
- [ ] **Search:** Implement fuzzy search + Advanced filtering logic.
- [ ] **Comparison Engine:** Dynamic side-by-side table (Max 4 items).
- [ ] **Comparison Logic:** Automated "Plus/Minus" highlights.
- [ ] **Package Profile:** Multi-tab view (Itinerary, Hotels, Reviews).
- [ ] **Booking Flow:** Multi-step wizard (Select Room -> Passengers -> Review).
- [ ] **Review System:** Granular rating + Photo upload component.

## 🤝 3. Partner Portal (Travel Agency)
- [ ] **Agency Dashboard:** High-level metrics + Navigation.
- [ ] **Verification Claim:** Multi-step Kemenag document submission.
- [ ] **Package Management:** CRUD for Hajj/Umrah packages.
- [ ] **"Anti-Ngawur" Wizard:** Add Package form with Google Maps & Flight API integration.
- [ ] **Leads CRM:** Simple Kanban or List for inquiry management.
- [ ] **Market Analytics:** Competitor price benchmarking view.

## ⚙️ 4. Backend & API
- [ ] **Auth:** JWT / Supabase Auth integration.
- [ ] **Database Schema:** Implement all tables from `jemaah.id.md`.
- [ ] **API:** Endpoints for Search, Filter, and Detail.
- [ ] **API:** Partner Portal endpoints for package management.
- [ ] **Integrations:** Google Places API wrapper.
- [ ] **Integrations:** Amadeus/Skyscanner API wrapper.
- [ ] **AI:** Implement brochure scanning logic (Hono + Vision API).

## 📱 5. Mobile App (iOS/Android)
- [ ] Initialize Capacitor in the web project.
- [ ] Configure `ios` and `android` platforms.
- [ ] Implement Native Camera plugin for Passport Scanning.
- [ ] Test deep linking and push notifications.
- [ ] Build and deploy to TestFlight/Play Console (Beta).

## 🧪 6. Testing & Quality
- [ ] Unit tests for "Plus/Minus" comparison logic.
- [ ] E2E tests for the Booking Flow using Playwright.
- [ ] Visual regression testing for the Emerald Canopy system.
- [ ] Accessibility (a11y) audit for Hajj pilgrims (elderly focus).
