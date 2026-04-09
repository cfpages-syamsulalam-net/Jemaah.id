# Jemaah.id Project Mandates & Operational Rules

This document serves as the foundational guide for all AI operations within the Jemaah.id project. These instructions take absolute precedence over general defaults.

## 🧠 Project Context
Jemaah.id is an independent Hajj/Umrah package comparison platform focusing on transparency and verification.
- **GitHub Repository:** [https://github.com/cfpages-syamsulalam-net/Jemaah.id](https://github.com/cfpages-syamsulalam-net/Jemaah.id)
- **Design System:** "Emerald Canopy" (Deep Emerald, Editorial Whitespace, Soft Shadows).
- **Tech Stack:** React (Vite) + Tailwind CSS v4 + Capacitor (Mobile) + Hono (Backend).

## 📋 Documentation Hierarchy (Mandatory)
Before starting any task, the agent MUST read:
1. `README.md` (High-level overview)
2. `PROGRESS.md` (Current milestone and phase)
3. `TODO.md` (Specific tasks remaining)
4. `TECH_STACK.md` (Architecture rules)
5. `DESIGNS.md` (UI/UX rules)
6. `PAGES.md` (Sitemap & Page references)

## 🔄 Development Flow
1.  **Research:** Use `grep_search` and `glob` to map the codebase. Consult `stitch/` for UI references (`code.html` and `screen.png`).
2.  **Strategy:** Propose changes if they affect core architecture or the design system.
3.  **Execute (Injection-Based Editing):** 
    - **MANDATE:** Favor surgical "injection" edits over full file rewrites.
    - Identify specific blocks to change.
    - Preserve existing functions, logic, and state unless refactoring is requested.
    - Always "improve and maintain" rather than "destroy and rebuild."
4.  **Validate:** Ensure consistency with "Emerald Canopy" styles.
5.  **Document:** Update `PROGRESS.md` and `CHANGELOG.md` after every significant change.

## 📝 Changelog Mandate
Every iteration MUST end with an update to `CHANGELOG.md`.
- Date format: `YYYY-MM-DD`.
- Categories: `Added`, `Changed`, `Fixed`, `Removed`.
- Be specific about file changes and logic updates.

## 📂 UI Reference Rules
Always refer to the corresponding folder in `stitch/` when building new pages.
- `code.html`: Structural inspiration.
- `screen.png`: Visual alignment.

## 🛠 Tech-Specific Rules
- **Tailwind v4:** Do not use `tailwind.config.js`. Use CSS variables in the `@theme` block within `src/index.css`.
- **PostCSS:** Use `@tailwindcss/postcss` in `postcss.config.js`.
- **Port:** Use port `5555` for the local dev server.
