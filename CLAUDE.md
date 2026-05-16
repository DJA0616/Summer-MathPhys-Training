# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

React-based interactive problem set format for summer physics/math training. Architecture: **block-kit** — a composable block system where content is declared as a CONFIG tree and rendered by `ProbsetComposer`.

## Key Files

- `project-template-files/block-kit.jsx` — Master toolkit. Contains DS, CSS, Geo, all primitives, all content blocks, all answer fields, TimerOverlay, and ProbsetComposer. **Single source of truth** — artifacts import from here.
- `project-template-files/design-system.jsx` — Visual reference for the monochrome theme (kept for documentation).
- `project-template-files/Probset_Format_v2.jsx` — Legacy spec demo. Superseded by block-kit.
- `project-template-files/plan-template.md` — Markdown plan schema for the planning→compilation pipeline.

## Architecture: Block Kit

Single file (`block-kit.jsx`) defines everything. Artifacts import `ProbsetComposer` and pass a CONFIG object. No copy-paste of DS/CSS/Geo/primitives.

```
block-kit.jsx
  ├─ DS (colors, fonts, radii)
  ├─ GLOBAL_CSS (injected once)
  ├─ Geo (background SVG)
  ├─ Primitives: Card, Label, Mono, Dots, Tag, Rule, MathBlock, InfoRow, QuoteBlock, HintBox, SummaryBox
  ├─ Content blocks: Paragraph, SectionHeader, Diagram, SliderGraph, Equation, Hint, Example, Spacer
  ├─ Answer fields: MCField, TFField, INTField, FIEField
  ├─ TimerOverlay (polygon morph, phase colors, freeze on expiry)
  └─ ProbsetComposer (renders CONFIG → full artifact)
```

### Artifact Pattern

```jsx
import { ProbsetComposer } from "../project-template-files/block-kit.jsx";

const CONFIG = {
  meta: { title: "...", subtitle: "...", topic: "G10 ..." },
  blocks: [
    { type: "section-header", title: "Easy", subtitle: "..." },
    { type: "mc", diff: "easy", question: "...", choices: ["A","B","C","D"], correct: 0 },
    { type: "diagram", caption: "Fig. 1", render: (C, F, dims) => <svg>...</svg> },
    // ...
  ],
};

export default function ProbsetName() {
  return <ProbsetComposer config={CONFIG} />;
}
```

## Two-Phase Generation Pipeline

### Phase 1: Plan (Markdown)
Agent `syllabus-researcher` (haiku) or user creates a plan markdown file using the schema in `project-template-files/plan-template.md`. Result: structured markdown with all problems, answers, difficulty, and diagram descriptions.

### Phase 2: Compile (JSX)
Agent `probset-manager` (sonnet) reads the plan markdown and compiles it into a block-kit CONFIG JSX file using `ProbsetComposer`. Custom diagrams become inline `render` functions.

### Phase 3: Validate (optional)
Agent `jsx-debugger` (opus) validates the generated JSX for syntax errors.

### Phase 4: Refine (optional)
Agent `content-refiner` (opus) polishes wording, tone, and clarity.

## Available Block Types

| Block | type string | Key props |
|-------|------------|-----------|
| Section header | `section-header` | `title`, `subtitle` |
| Paragraph | `paragraph` | `text` |
| Multiple choice | `mc` | `question`, `choices[]`, `correct` (0-3), `diff`, `explain` |
| True/False | `tf` | `statement`, `correct`, `diff` |
| Integer | `int` | `question`, `answer`, `diff`, `hint` |
| Fill-in-equation | `fie` | `question`, `equation[]`, `cards[]`, `correct` (fn), `correctDisplay` |
| Diagram | `diagram` | `render: (C,F,dims)=>svg`, `caption`, `width`, `height` |
| Slider graph | `slider-graph` | `param`, `render: (C,F,dims,val)=>svg` |
| Equation | `equation` | `display`, `inline?` |
| Hint | `hint` | `text`, `revealLabel?` |
| Note | `note` | `text`, `variant: "info"\|"warn"\|"comp"` |
| Summary | `summary` | `intro`, `points[]` |
| Quote | `quote` | `text`, `author` |
| Example | `example` | `label`, `text` |
| Spacer | `spacer` | `size` (px) |

## Difficulty Scale

Use word values for `diff` — auto-mapped by composer:
- `"easy"` → 1 dot, 3 pts — single formula, direct substitution
- `"medium"` → 2 dots, 4 pts — two-step reasoning, algebra
- `"hard"` → 3 dots, 5 pts — multi-concept synthesis, non-obvious insight

## Design Tokens

- Serif: `'EB Garamond'` (body, headings)
- Mono: `'JetBrains Mono'` (labels, code, numbers)
- Accent: `#7eb8d4`, Alt: `#a0d4b0`, Error: `#d47e8a`
- BG: `#0a0a0a`, Surface: `#111111`

## Timer Rules

- `examMode` auto-enables when `questions >= 30`
- Default: 60 min / 30Q, 90 min / 45Q+
- Polygon morph animation, phase colors (>10s blue, ≤10s sage, ≤5s red)
- On expiry: inputs freeze, score summary shown

## Scope

Targets **G10** integrated roadmap (Phase 2, Blocks 7–11) from `syllabuses/integrated_learning_roadmap.html`. G9 material is prerequisite knowledge — reference in context, no dedicated artifacts.

## No Build Step

Standalone React JSX artifacts — no package.json, bundler, or test runner. Render in any JSX-capable environment.
