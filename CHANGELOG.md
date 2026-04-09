# Jemaah.id Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
