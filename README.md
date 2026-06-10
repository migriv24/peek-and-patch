# Peek and Patch

A branching short story set in **System 37 // The Desktop**, by Miguel Rivas.

You follow Peek, a Cubic in Metrochord, on the evening he meets a creature
called a Phong. Your choices fork the night toward one of two endings.

This is the first of a planned series of short-story pages — eventually
point-and-click adventures and visual novels.

## Style

An 8-bit reading experience: each page is a retro **System 37 window**
(pixel chrome, CRT scanlines, floating glossy "cubes") rendered over a
frutiger-aero gradient. Every page has its own color theme, with a signature
blueberry outline tying them together.

Special formatting in the story is rendered as cards:
- `(!)` lore → **CODEX** data-packet cards
- `(?)` notes → **sticky-note** footnotes (a nod to Patch's post-it fur)
- `(loading…)` etc. → **terminal** readouts
- "There are no contradictions in Peek's ___" → the recurring **refrain**

## Run it

It's a static site — just open `index.html`, or serve the folder:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Structure

| File | What it is |
|------|------------|
| `index.html` | Shell: fonts, ambience layers, mount point |
| `story.js`   | The full story as structured page/branch data |
| `app.js`     | Renderer + hash router (`#p1`…`#p10`) |
| `style.css`  | Design system + per-page color themes |

To add or edit a page, edit the node in `story.js` — the renderer handles
the rest. Branch links use `#pN` hashes.
