# Jemaah.id Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2026-04-10
### Added
- **13 New Screens:** BookingDetails, AgencyFinancials, MarketAnalytics, ReputationManagement, ClaimsQueue, AIScanResults, PassportUpload, DocumentVerified (Total: 36/42 screens, 86%)
- **FEATURES.md:** Comprehensive feature specifications for all 42 screens with current vs future features
- **QWEN.md:** Created project mandats for Qwen Code AI with full documentation hierarchy
- **GEMINI.md:** Updated with new documentation structure and documentation-first approach
- **SCREENS.md:** Real-time screen implementation tracker (updated to 36/42)
- **ROUTE_GUIDE.md:** Complete route listing with test links for all 36 screens
- **IMPLEMENTATION_SUMMARY.md:** Session summary and project status

### Changed
- **App.tsx:** Updated with all 36 screen routes, organized by module (Consumer, Booking, Partner, Operational)
- **Badge.tsx:** Added 'warning' and 'error' variants to support all status displays
- **PROGRESS.md:** Updated with complete screen inventory and 86% completion status

### Fixed
- **TypeScript Compilation:** Resolved all 24+ TypeScript errors (unused imports, type-only imports)
- **White Screen Issue:** Added Google Fonts (Plus Jakarta Sans + Work Sans) to index.html
- **Build Process:** Achieved clean build (0 errors, 5.74s build time)
- **Import Cleanup:** Removed unused imports from all new screen files

## [0.1.0] - 2026-04-09
### Added
- Initial strategic documentation and project foundation.
- `README.md`: Professional project landing page.
- `TECH_STACK.md`: Unified Web/iOS/Android architecture (React + Capacitor + Hono).
- `DESIGNS.md`: "Emerald Canopy" Design System guidelines.
- `PAGES.md`: Comprehensive sitemap mapping 50+ UI screens from stitch files.
- `PROGRESS.md`: Multi-phase roadmap and current milestone status.
- `TODO.md`: Detailed prioritized task list for all modules.
- `CHANGELOG.md`: This file for future development tracking.
- `AGENT.md`: AI Agent operational instructions for Jemaah.id.
- Analyzed 50+ UI screens in the `stitch/` directory for feature parity.
- Established "Anti-Ngawur" data integrity system requirements.
- **Phase 2 Infrastructure:**
  - Initialized React + Vite + TypeScript project.
  - Installed Tailwind CSS, Lucide Icons, and utility libraries.
  - Configured Emerald Canopy theme in `tailwind.config.js`.
  - Created Core UI Components: `Button`, `Card`, `Input`, `Badge`.
  - Implemented `cn` utility for Tailwind class merging.
- **Phase 2 Expansion:**
  - Installed `react-router-dom` for application routing.
  - Created `Navbar` and `Footer` layout components.
  - Implemented `Home` page with hero section, trust badges, and featured package cards.
  - Configured global routing in `App.tsx` and `main.tsx`.
  - Added mock data for Hajj/Umrah packages to simulate real UI behavior.
- **Tailwind v4 Migration:**
  - Upgraded to Tailwind CSS v4 and `@tailwindcss/postcss`.
  - Migrated theme configuration from `tailwind.config.js` to CSS `@theme` variables in `src/index.css`.
  - Resolved PostCSS configuration errors.
- **Phase 3 Development:**
  - Implemented `Search` page with filter sidebar and results grid.
  - Created `PackageCard` shared component with verification badges and "Compare" functionality.
  - Built a floating `Comparison Drawer` to manage multi-package selection for side-by-side analysis.
  - Developed the **"Apple-to-Apple" Comparison Engine** (`Compare` page) with a detailed side-by-side feature table.
  - Integrated automated "Plus/Minus" highlights and "Smart Insight" analysis in the comparison view.
- **Operational Updates:**
  - Unified AI Agent instructions and project mandates into `GEMINI.md`.
  - Deprecated and removed `AGENT.md`.
  - Hardened Tailwind v4 / PostCSS configuration to resolve build errors.
