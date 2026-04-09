# AI Agent Operational Manual (Jemaah.id)

This document provides instructions for any AI agent interacting with this repository.

## 🧠 Project Context
Jemaah.id is a Hajj/Umrah package comparison platform.
- **GitHub Repository:** [https://github.com/cfpages-syamsulalam-net/Jemaah.id](https://github.com/cfpages-syamsulalam-net/Jemaah.id)
- **Goal:** Transparency, safety, and verification.
- **Design:** "Emerald Canopy" (Green, Professional, Editorial).
- **Tech:** React + Vite + Tailwind + Capacitor + Hono.
- **Core Feature:** "Apple-to-Apple" Comparison Engine.

## 📋 Documentation Hierarchy (Mandatory)
Before starting any task, read these files:
1. `README.md` (High-level overview)
2. `PROGRESS.md` (Current milestone and phase)
3. `TODO.md` (Specific tasks remaining)
4. `TECH_STACK.md` (Architecture rules)
5. `DESIGNS.md` (UI/UX rules)
6. `PAGES.md` (Sitemap & Page references)

## 🔄 Development Flow
1.  **Research:** Read all `.md` files mentioned above. Check `stitch/` for UI references if creating new pages.
2.  **Strategy:** Propose changes before acting if they affect the core architecture or design system.
3.  **Execute (Injection-Based Editing):** 
    - **MANDATE:** Favor surgical "injection" edits over full file rewrites.
    - When modifying existing code, identify the specific blocks to change.
    - Preserve existing functions, logic, and state unless explicitly asked to refactor them.
    - Always "improve and maintain" rather than "destroy and rebuild."
4.  **Validate:** Ensure consistency with the Emerald Canopy design system.
5.  **Document:** Update `PROGRESS.md` and `CHANGELOG.md` after every significant change.

## 📝 Changelog Mandate
Every iteration MUST end with an update to `CHANGELOG.md`.
- Use the date format: `YYYY-MM-DD`.
- Categorize under `Added`, `Changed`, `Fixed`, or `Removed`.
- Be specific (e.g., "Added Comparison Logic to `src/utils/compare.ts`" instead of "Updated code").

## 📂 UI Reference Rules
When building pages, always refer to the corresponding folder in `stitch/`.
Example: If asked to build the "Booking Summary" page, look at `stitch/booking_summary/code.html` for structural inspiration and `screen.png` for visual alignment.
