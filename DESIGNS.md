# Emerald Canopy Design System (Jemaah.id)

This document outlines the visual philosophy and UI implementation rules for Jemaah.id.

## 1. Creative North Star: The Trusted Curator
Emerald Canopy is a high-end B2B and B2C design system. It avoids the generic "SaaS dashboard" aesthetic by blending professional deep greens with airy, editorial whitespace.

### Core Principles
- **Quiet Authority:** High-contrast typography and subtle tonal layering.
- **Floating Modules:** Cards with light borders and soft shadows, feeling like paper on a desk.
- **The "No-Line" Rule:** Boundaries are "felt" (background shifts) rather than "seen" (hard lines).

## 2. Visual Palette
- **Primary Emerald:** `#075232` (Growth, Trust, Islamic Heritage).
- **Background:** `#f6f8f7` (Base Canvas).
- **Surface:** `#ffffff` (Card Color).
- **Secondary/Status:**
  - Success: Emerald tint (20% opacity).
  - Info: Slate-500.
  - Alert: Amber (for caution/low seat availability).

## 3. Typography (Dual-Font Approach)
- **Display & Headlines:** *Plus Jakarta Sans* (Modern, Geometric).
- **Body & Labels:** *Work Sans* (Exceptional legibility for data-dense environments).

### Typography Scale
- **Hero Stats:** 2.25rem (36px).
- **Section Headlines:** 1.125rem (18px).
- **Standard UI Text:** 0.875rem (14px).
- **Small Detail:** 0.75rem (12px).
- **Micro-Labels:** 10px / 11px (Uppercase with 0.05em tracking).

## 4. Components & Layout
- **Elevation:** Use "Soft Stacking" with `shadow-sm` and `border-primary/10`.
- **Buttons:**
  - *Primary:* Solid Emerald, 8px rounded (rounded-lg).
  - *Secondary:* Ghost with Emerald border/text.
- **Status Badges:** Pill-shaped, 20% opacity Emerald fill.
- **Data Tables:** No vertical lines. 5% opacity horizontal lines.
- **Comparison Engine (The Heart):**
  - "Freeze Column" for mobile (labels stay, travel packages swipe).
  - Green/Red badges for automated Plus/Minus highlights.

## 5. UI Implementation Checklist
- [ ] No hard `#000000` text; use Slate-900 or Slate-500.
- [ ] Minimum 24px (p-6) padding within major cards.
- [ ] Use icons (Lucide) as semantic anchors.
- [ ] Avoid more than two accent colors per view.
- [ ] Use `border-primary/10` for "Ghost Borders" instead of solid 1px lines.
