# Jemaah.id Project Mandates & Operational Rules

This document serves as the foundational guide for all Qwen Code operations within the Jemaah.id project. These instructions take absolute precedence over general defaults.

## 🧠 Project Context
Jemaah.id is an independent Hajj/Umrah package comparison platform focusing on transparency and verification.
- **GitHub Repository:** [https://github.com/cfpages-syamsulalam-net/Jemaah.id](https://github.com/cfpages-syamsulalam-net/Jemaah.id)
- **Design System:** "Emerald Canopy" (Deep Emerald, Editorial Whitespace, Soft Shadows).
- **Tech Stack:** React (Vite) + Tailwind CSS v4 + Capacitor (Mobile) + Hono (Backend).
- **Development Server:** http://localhost:5555

## 📋 Documentation Hierarchy (Mandatory)
Before starting any task, the agent MUST read these files in order:
1. `README.md` (High-level overview & getting started)
2. `PROGRESS.md` (Current milestone, phase, and health metrics)
3. `SCREENS.md` (Real-time screen implementation status)
4. `FEATURES.md` (Detailed feature specifications for all screens)
5. `PAGES.md` (Sitemap & page documentation)
6. `TODO.md` (Specific tasks remaining)
7. `TECH_STACK.md` (Architecture rules)
8. `DESIGNS.md` (UI/UX rules)

## 📂 Project Structure
```
Jemaah.id/
├── src/
│   ├── components/
│   │   ├── ui/          # Reusable UI components (Button, Card, Input, Badge)
│   │   ├── layout/      # Layout components (Navbar, Footer)
│   │   └── shared/      # Shared components (PackageCard)
│   ├── data/
│   │   └── dummyData.ts # Centralized mock data for all screens
│   ├── pages/           # All screen components (23 implemented)
│   ├── App.tsx          # Main router with all routes configured
│   ├── main.tsx         # App entry point with BrowserRouter
│   └── index.css        # Tailwind CSS v4 + Emerald Canopy theme
├── public/
├── index.html           # HTML entry with Google Fonts
├── vite.config.ts       # Vite config (port 5555, strictPort)
├── package.json         # Dependencies & scripts
└── Documentation files (README, PROGRESS, SCREENS, FEATURES, PAGES, etc.)
```

## 🔄 Development Flow
1.  **Research:** Use `grep_search` and `glob` to map the codebase. Consult `stitch/` for UI references (`code.html` and `screen.png`).
2.  **Strategy:** Propose changes if they affect core architecture or the design system.
3.  **Execute (Injection-Based Editing):**
    - **MANDATE:** Favor surgical "injection" edits over full file rewrites.
    - Identify specific blocks to change.
    - Preserve existing functions, logic, and state unless refactoring is requested.
    - Always "improve and maintain" rather than "destroy and rebuild."
4.  **Validate:** 
    - **MANDATORY:** Run `npm run build` and ensure 0 TypeScript errors
    - **MANDATORY:** Restart dev server (`taskkill /F /PID <pid>` then `npm run dev`)
    - **MANDATORY:** Verify no white screen at http://localhost:5555
    - **MANDATORY:** Check browser console (F12) for 0 red errors
    - Ensure consistency with "Emerald Canopy" styles and TypeScript type safety.
5.  **Document:** Update `PROGRESS.md`, `SCREENS.md`, and `CHANGELOG.md` after every significant change.

## 🚨 CRITICAL: Development Operations Protocol
**BEFORE declaring ANY task complete, the agent MUST:**

1. ✅ Run `npm run build` → Must pass with 0 errors
2. ✅ Restart dev server → Must start successfully  
3. ✅ Verify http://localhost:5555 → Must NOT be white screen
4. ✅ Check browser console (F12) → Must have 0 red errors
5. ✅ Update CHANGELOG.md → Log all changes

**NEVER:**
- ❌ Skip build verification
- ❌ Leave unused imports
- ❌ Forget type-only imports when required
- ❌ Skip dev server restart after changes
- ❌ Declare complete with any TypeScript errors

**FULL PROTOCOL:** See `DEV_OPS_PROTOCOL.md` for complete operational rules.

## 📝 Changelog Mandate
Every iteration MUST end with updates to documentation files:
1. **CHANGELOG.md** - Track what was Added/Changed/Fixed/Removed (Date: YYYY-MM-DD)
2. **SCREENS.md** - Update completed screen count and status
3. **PROGRESS.md** - Update phase completion if milestone reached
4. **FEATURES.md** - Mark implemented features with ✅

**Categories for CHANGELOG.md:**
- `Added` - New screens, features, files
- `Changed` - Modified existing functionality
- `Fixed` - Bug fixes, TypeScript errors, build issues
- `Removed` - Deleted code or files

**Be specific about:**
- File paths changed
- Logic updates
- New routes added
- Screens completed

## 📂 Documentation-First Approach
Every development iteration MUST be documented immediately:
- **New Screen Created** → Update SCREENS.md, CHANGELOG.md, FEATURES.md
- **Feature Implemented** → Mark ✅ in FEATURES.md
- **Bug Fixed** → Log in CHANGELOG.md
- **Milestone Reached** → Update PROGRESS.md

**Documentation files updated each session:**
- `CHANGELOG.md` (Every change logged)
- `SCREENS.md` (Screen count updated)
- `PROGRESS.md` (Phase tracking)
- `FEATURES.md` (Features marked as implemented)

## 📂 UI Reference Rules
Always refer to the corresponding folder in `stitch/` when building new pages.
- `code.html`: Structural inspiration.
- `screen.png`: Visual alignment.

## 🛠 Tech-Specific Rules
- **Tailwind v4:** Do not use `tailwind.config.js`. Use CSS variables in the `@theme` block within `src/index.css`.
- **PostCSS:** Use `@tailwindcss/postcss` in `postcss.config.js`.
- **Port:** Use port `5555` for the local dev server.
- **TypeScript:** Use type-only imports (`import type { X }`) when `verbatimModuleSyntax` is enabled.
- **Build Check:** Always run `npm run build` before completing tasks to ensure 0 TypeScript errors.
- **Dummy Data:** All current screens use `src/data/dummyData.ts` - future work will integrate real APIs.

## 🎨 Design System (Emerald Canopy)
- **Primary Color:** `#075232` (Deep Emerald)
- **Background:** `#f6f8f7` (Light Gray-Green)
- **Surface:** `#ffffff` (White)
- **Fonts:** Plus Jakarta Sans (display/headings), Work Sans (body/text)
- **Border Radius:** `8px` (lg)
- **Shadows:** Soft, subtle elevation
- **Whitespace:** Generous, editorial-style spacing

## 🚀 Current Project Status
- **Build Status:** ✅ Successful (0 TypeScript errors)
- **Dev Server:** Running on http://localhost:5555
- **Screens Completed:** 23/42 (55%)
- **Phase:** Dummy Data Implementation Complete
- **Next:** API integration, remaining screens, state management

## 📞 Key Routes Reference
**Consumer:** `/`, `/search`, `/compare`, `/package/:id`, `/favorites`, `/profile`, `/my-bookings`  
**Booking:** `/booking/room`, `/booking/passenger`, `/booking/summary`, `/booking/payment`  
**Partner:** `/partner/dashboard`, `/partner/packages`, `/partner/add-package`, `/agency/:id`  

See `ROUTE_GUIDE.md` for complete route listing with test links.
