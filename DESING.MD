# d3kn Warm Teal (نظام تصميم d3kn)

> Custom design system created specifically for **d3kn**'s web applications, dashboards, and creative tools. Built with an editorial warm ivory palette, deep dark teal typographic foundation, vibrant interactive teal highlights, and rich dramatic elevation.

## Identity & Philosophy
- **Creator / User**: d3kn
- **Core Mood**: Elegant, clean, breathable, and distraction-free. Avoids harsh cold whites and oversaturated neon tones in favor of an organic warm feel.
- **Visual Balance**: Generous 24px-32px padding, tactile 8px rounded corners, and deep layered drop shadows that lift interactive components off the page.

---

## Color Tokens & Palette

### Primary & Brand
- `color.primary`: `#14B8A6` (Teal 500 — interactive buttons, focus states, active pills)
- `color.primary.hover`: `#0D9488` (Teal 600 — pressed & hover states)
- `color.primary.light`: `#CCFBF1` (Teal 100 — light badge backgrounds, selected row tints)
- `color.primary.subtle`: `#F0FDFA` (Teal 50 — ultra subtle surface tints)

### Canvas & Surfaces
- `color.canvas.base`: `#FEFCE8` (Warm soft cream / ivory — primary body background)
- `color.surface.card`: `#FFFFFF` (Crisp pure white — card surfaces and elevated containers)
- `color.surface.hover`: `#FDFCF7` (Slightly warm white for card hover states)
- `color.surface.alt`: `#F7F6E8` (Secondary card containers, sidebars, table headers)

### Typography & Ink
- `color.ink.primary`: `#134E4A` (Teal 900 — high-contrast headings and primary labels)
- `color.ink.secondary`: `#2D6A66` (Medium teal-slate — body text, descriptions)
- `color.ink.muted`: `#688E8B` (Muted teal-gray — placeholders, inactive tabs, timestamps)
- `color.ink.inverse`: `#FFFFFF` (White text over primary teal buttons)

### Borders & Lines
- `color.border.subtle`: `#E8E6D5` (Soft warm border for cards and dividers)
- `color.border.strong`: `#D5D2BD` (Form inputs, active borders)
- `color.border.focus`: `#14B8A6` (Primary teal ring for accessible focus)

### Semantic & Feedback
- `color.status.success`: `#2DD4BF` (Teal 400 — positive indicators, tasks completed)
- `color.status.warning`: `#EAB308` (Amber/Yellow 500 — warnings, pending items)
- `color.status.error`: `#EF4444` (Red 500 — errors, destructive actions, bug alerts)

---

## Typography Guidelines
- **Heading Family**: Plus Jakarta Sans, Tajawal (for Arabic)
- **Body Family**: Inter, Cairo (for Arabic)
- **Monospace Family**: JetBrains Mono

### Scale
- **Display**: 56px / Line Height 1.1 / Letter Spacing -0.03em / Weight Bold (700)
- **Heading 1**: 36px / Line Height 1.2 / Letter Spacing -0.02em / Weight Bold (700)
- **Heading 2**: 26px / Line Height 1.3 / Letter Spacing -0.01em / Weight SemiBold (600)
- **Heading 3**: 19px / Line Height 1.4 / Weight SemiBold (600)
- **Body**: 15px / Line Height 1.6 / Weight Regular (400)
- **Body Small**: 13px / Line Height 1.5 / Weight Regular (400)
- **Micro / Badge**: 11px / Weight Medium (500) / Uppercase

---

## Elevation & Dramatic Shadows
Designed with dramatic depth that gives components a tangible physical presence over the cream canvas:

```css
/* Card resting */
box-shadow: 0 10px 25px -5px rgba(19, 78, 74, 0.09), 0 8px 10px -6px rgba(19, 78, 74, 0.04);

/* Card hover (with translateY(-2px)) */
box-shadow: 0 20px 30px -10px rgba(19, 78, 74, 0.17), 0 10px 15px -5px rgba(19, 78, 74, 0.08);

/* Popover & Dialog */
box-shadow: 0 25px 50px -12px rgba(19, 78, 74, 0.25);

/* Teal Button Glow (on hover) */
box-shadow: 0 4px 14px 0 rgba(20, 184, 166, 0.38);
```

---

## Layout, Geometry & Spacing
- **Base Grid**: 4px
- **Corner Radius**:
  - `radius.sm`: 4px (tags, code snippets)
  - `radius.md`: 8px (buttons, inputs, select fields)
  - `radius.lg`: 12px (cards, modal containers)
  - `radius.full`: 9999px (pills, avatar rings, icon badges)
- **Component Spacing**:
  - Breathable margins: 20px to 32px
  - Form field padding: 12px vertical × 16px horizontal
  - Card internal padding: 24px default

---

## Key UI Components

### 1. Primary Buttons
- Fill: `#14B8A6`, Text: `#FFFFFF`, Radius: 8px, Font: 14px SemiBold.
- Hover: Background `#0D9488`, transform: `translateY(-1px)`, Teal Glow shadow.
- Active: transform: `scale(0.98)`.

### 2. Secondary / Outline Buttons
- Surface: `#FFFFFF`, Border: 1px `#E8E6D5`, Text: `#134E4A`.
- Hover: Background `#FDFCF7`, Border: `#14B8A6`.

### 3. Elevated Cards
- Surface: `#FFFFFF`, Border: 1px `#E8E6D5`, Radius: 12px.
- Internal Padding: 24px.
- Smooth transition: `box-shadow 200ms ease, transform 200ms ease`.

### 4. Inputs & Controls
- Background: `#FFFFFF`, Border: 1px `#D5D2BD`, Radius: 8px.
- Focus: Border turns `#14B8A6`, outline: `2px solid rgba(20, 184, 166, 0.25)`.

---

## Motion & Micro-interactions
- Transitions: `150ms - 200ms cubic-bezier(0.16, 1, 0.3, 1)`.
- Interactive elements provide immediate tactile visual confirmation upon click/hover.
- No jarring or distracting loop animations.
