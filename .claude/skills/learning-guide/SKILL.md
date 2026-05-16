---
name: learning-guide
description: Create a learning guide (JSX artifact) from syllabus files and integrated roadmap, using block-kit primitives and interactive answer fields.
metadata:
  type: project
---

## Purpose

Generate a self-contained React JSX learning guide for **G10** topics from the integrated roadmap (Phase 2, Blocks 7–11), using the block-kit architecture. Guides use tab/part navigation (lecture/practice/reference) with interactive MC and INT fields.

**Scope:** G10 roadmap topics only. G9 material is prerequisite knowledge — reference it for context but do not create full guides for G9 topics.

## When to Use

User says: "Make a learning guide for waves", "Create a study guide from G10 syllabus", "Generate JSX lesson on optics", or `/learning-guide <topic>`.

## Architecture: Block Kit Imports

Learning guides use **Pattern B** (direct primitives) because they need complex tab/part navigation that ProbsetComposer's flat blocks array cannot express.

```jsx
import { useState, useEffect, useRef } from "react";
import { C, F, Geo, GLOBAL_CSS, Card, Label, Mono, Tag, Rule, MathBlock, InfoRow, QuoteBlock, HintBox, SummaryBox, MCField, INTField } from "../project-template-files/block-kit.jsx";
```

Do NOT copy-paste DS constants, CSS, Geo SVG, or primitives. Import them from block-kit. Custom interactive components (canvas animations, sliders) stay inline.

## Guide Structure

### Required Elements
1. **Navbar** — Top bar: `← Index | Highscores` links (mono 10px, dim color)
2. **Header** — Tags, title (serif, clamp font), subtitle (italic)
3. **Overview Card** — What the guide covers, part list as Tags
4. **Tab Navigation** — lecture / practice / reference tabs
5. **Lecture Tab** — Part buttons (I·II·III...), SummaryBox per part, Cards with theory, MathBlock formulas, InfoRow breakdowns, embedded MC questions, HintBox(variant="comp") for competition notes
6. **Practice Tab** — Problem set card, 5-6 MC/INT questions across difficulties
7. **Reference Tab** — Compact formula sheet, key identities, standard value tables
8. **Footer** — Topic tags (left), Index + Highscores links (right)

### Diff Values (word-based)
- `diff="easy"` — 3 pts, single formula
- `diff="medium"` — 4 pts, two-step reasoning
- `diff="hard"` — 5 pts, multi-concept synthesis

### Primitive Reference
| Component | Usage |
|-----------|-------|
| `SummaryBox` | `intro` + `points[]` — part overview |
| `HintBox variant="comp"` | Competition/advanced insight callout |
| `QuoteBlock` | `text` + `author` — pull quote |
| `MathBlock` | String or JSX children for formulas |
| `InfoRow` | `label` + `value` + optional `accent` |
| `MCField` | `question`, `choices[]`, `correct` (0-3), `diff`, `pts`, `explain` |
| `INTField` | `question`, `answer` (int), `diff`, `pts`, `hint` |
| `Rule` | Horizontal divider |
| `Tag` | `accent` or `alt` prop for colored tags |

### CSS Classes
- Use `className="bk-fade"` for fade-in animation (not `.fade`)
- Use `"4px"` for border-radius (not `DS.radius`)
- `<style>{GLOBAL_CSS}</style>` injects all block-kit CSS

### Naming Convention
- `G10_Topic_L01.jsx` where Topic is short keyword, L01 is lesson number.
- Output to `learning-guides/` directory.

## Steps

1. **Research** — Read `syllabuses/integrated_learning_roadmap.html` for block structure and competition tags. Read existing guides in `learning-guides/` for pattern reference.
2. **Outline** — Determine parts (3-5), key concepts per part, MC questions per part (1-2), practice problems (5-6 total).
3. **Write JSX** — Follow the pattern from `G10_Circuits_L01.jsx` or `G10_Waves_L01.jsx` as templates.
4. **Convert** — Run `project-template-files/convert.ps1 learning-guides/GuideName.jsx` to generate standalone HTML.
5. **Quality Check** — Verify all MC answers correct, all INT answers match, diffs use word values, navbar and footer present, `.bk-fade` class used.

## References

- Block kit source: `project-template-files/block-kit.jsx` (single source of truth)
- Integrated roadmap: `syllabuses/integrated_learning_roadmap.html`
- Existing guides: `learning-guides/G10_Circuits_L01.jsx`, `learning-guides/G10_Waves_L01.jsx`
- Convert script: `project-template-files/convert.ps1`
