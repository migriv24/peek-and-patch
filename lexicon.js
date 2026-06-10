/* ════════════════════════════════════════════════════════════
   SYSTEM 37 — LEXICON  (shared, reusable term-tagging system)

   An internal glossary. The renderer auto-highlights any of these
   terms wherever they appear in story prose, giving each a distinct
   color + hover gloss. Built to be shared across stories: add a new
   story, reuse this file, extend the list.

   Each entry:
     id      — stable internal key
     cls     — CSS class carrying the color (defined in style.css)
     pattern — regex fragment (no anchors); the engine adds \b…\b
               and matches case-insensitively. Use s? for plurals.
     title   — short gloss shown on hover

   ORDER MATTERS: list multi-word phrases before single words so the
   matcher prefers the longer term (e.g. "High Vista" before "High").
   ════════════════════════════════════════════════════════════ */

window.LEXICON = [
  { id: "love",       cls: "lx-love",       pattern: "made with love",
    title: "Made with love — (reserved: significant later)" },

  { id: "highvista",  cls: "lx-highvista",  pattern: "High Vista",
    title: "High Vista — one of the three regions of The Desktop" },

  { id: "system",     cls: "lx-system",     pattern: "System 37",
    title: "System 37 — the digital world this simulation runs in" },

  { id: "starbloom",  cls: "lx-starbloom",  pattern: "Starbloom",
    title: "Starbloom — one of the three regions of The Desktop" },

  { id: "metrochord", cls: "lx-metrochord", pattern: "Metrochord",
    title: "Metrochord — Peek's home; a city above the keyboard catacombs" },

  { id: "desktop",    cls: "lx-desktop",    pattern: "Desktop",
    title: "The Desktop — the habitable surface above the Kernel Sea" },

  { id: "cubic",      cls: "lx-cubic",      pattern: "Cubics?",
    title: "Cubic — a cube-bodied NPC species (Peek is one)" },

  { id: "creature",   cls: "lx-creature",   pattern: "Phongs?",
    title: "Phong — lizard-like creature with post-it-note fur" },

  { id: "frame",      cls: "lx-frame",      pattern: "frames?",
    title: "frame — a unit of simulation time" },

  { id: "conflict",   cls: "lx-conflict",   pattern: "conflicts?|contradictions?",
    title: "conflict / contradiction — Peek's inner tension" }
];
