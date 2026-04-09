# Emerald Canopy Design System

### 1. Overview & Creative North Star
**Creative North Star: The Trusted Curator**
Emerald Canopy is a high-end B2B design system built for the pilgrimage and travel industry. It avoids the generic "SaaS dashboard" aesthetic by blending professional deep greens with airy, editorial whitespace. The system is defined by a sense of quiet authority, using high-contrast typography and subtle tonal layering to organize complex logistical data into a digestible, serene interface.

It breaks the standard grid through the use of "Floating Modules"—cards that use extremely light borders and soft shadows to feel like individual sheets of paper on a desk, rather than rigid blocks in a database.

### 2. Colors
The palette is anchored by a deep, authoritative Emerald (`#075232`), symbolizing growth, trust, and its cultural significance within the Islamic travel market.

*   **Primary Roles:** The signature emerald is used sparingly for high-impact elements like active navigation states, primary buttons, and critical status indicators.
*   **The "No-Line" Rule:** Visual separation is achieved through background shifts (e.g., `surface` to `surface_container_low`) rather than hard lines. Boundaries should feel "felt" rather than "seen." 1px solid borders are only permitted at 10% opacity of the primary color to provide a whisper of structure.
*   **Surface Hierarchy:** 
    *   `Background`: The base canvas (`#f6f8f7`).
    *   `Surface`: The primary card color (`#ffffff`).
    *   `Surface Container`: Used for grouping related data or nested inputs.
*   **Signature Textures:** Use subtle 10% opacity fills of the Primary color for non-critical informational badges, creating a "watermark" effect that reinforces brand identity without overwhelming the content.

### 3. Typography
Emerald Canopy utilizes a dual-font approach to balance personality with readability.
*   **Display & Headlines:** *Plus Jakarta Sans* (or *Work Sans* Bold) provides a clean, modern geometric structure.
*   **Body & Labels:** *Work Sans* is used for its exceptional legibility in dense data environments.

**Typography Scale (Ground Truth):**
*   **Hero Stats (Display):** 2.25rem (36px) — Used for large numerical impact.
*   **Section Headlines:** 1.125rem (18px) — For main card titles.
*   **Standard UI Text:** 0.875rem (14px) — The default for body and navigation.
*   **Small Detail:** 0.75rem (12px) — For secondary metadata and license info.
*   **Micro-Labels:** 10px / 11px — Reserved for uppercase tracking-wide labels (e.g., "MARKET OUTLOOK") to create an editorial feel.

### 4. Elevation & Depth
Depth is created through "Soft Stacking" rather than heavy shadows.
*   **The Layering Principle:** The interface uses a three-layer model: 
    1. Base Canvas (Background)
    2. Interactive Card (Surface + `shadow-sm`)
    3. Floating Action/Modal (Surface + `shadow-lg`)
*   **Ambient Shadows:** We utilize Tailwind-style `shadow-sm` for standard modules. For the "Add New" CTA, a tinted shadow (`shadow-primary/20`) is used to create a glowing effect that draws the eye.
*   **The Ghost Border:** Instead of a structural line, use `border-primary/10`. This provides just enough contrast for accessibility while maintaining the "No-Line" rule.

### 5. Components
*   **Buttons:**
    *   *Primary:* Solid Emerald with rounded-lg (8px) corners.
    *   *Secondary:* Ghost style with Primary-colored border and text.
*   **Status Badges:** Pill-shaped with 20% opacity primary fills.
*   **Sidebar:** High-contrast white or dark-green background with minimal icons and 14px medium-weight text.
*   **Data Tables:** No vertical lines. Horizontal lines must be at 5% opacity. Row hover states use `surface_container_low`.
*   **Progress Bars:** Thin (8px) rounded tracks with solid primary fills to represent demand or capacity.

### 6. Do's and Don'ts
**Do:**
*   Use uppercase labels with letter-spacing (0.05em) for category headers.
*   Use icons as semantic anchors (e.g., a mosque for the brand, a suitcase for packages).
*   Maintain a minimum of 24px (p-6) padding within major cards to preserve the editorial feel.

**Don't:**
*   Never use pure black (`#000000`) for text; use Slate-900 or Slate-500 to maintain tonal warmth.
*   Avoid using more than two accent colors (Blue/Emerald/Amber) in a single view to prevent "dashboard fatigue."
*   Do not use sharp 0px corners; maintain a consistent 8px (rounded-lg) radius for a modern, approachable feel.