---
name: content-pipeline
description: Orchestrate syllabus-researcher, probset-manager, jsx-debugger, and content-refiner subagents to automate full content production pipeline from syllabus research to validated JSX artifacts.
metadata:
  type: project
---

## Purpose

Orchestrate master agent and subagents to automate production of learning guides, problem sets, and lecture sets — from syllabus research to validated block-kit JSX artifacts.

## When to Use

User says: "automate content production", "run content pipeline", "generate content for topic X", or uses `/content-pipeline <topic> [output-type]`.

## Pipeline Steps

1. **Research** — Launch `syllabus-researcher` agent to gather syllabus content, example problems, difficulty distributions, and competition-level material for the topic.
2. **Plan** — Review research output and create a plan markdown following `project-template-files/plan-template.md` schema.
3. **Compile** — Launch `probset-manager` agent to compile the plan into a block-kit JSX file.
   - **Probsets/Lecture sets**: Use `ProbsetComposer` CONFIG pattern. Import `ProbsetComposer` from block-kit, pass CONFIG with `meta` + `blocks` array.
   - **Complex learning guides** (multi-tab, multi-part navigation): Import individual primitives (`C, F, Geo, GLOBAL_CSS, Card, Label, Mono, Tag, Rule, MathBlock, InfoRow, QuoteBlock, HintBox, SummaryBox, MCField, INTField`) from block-kit. Keep custom components (canvas animations, sliders) inline. Do NOT copy-paste DS/CSS/Geo/primitives — import them.
4. **Validate** — Launch `jsx-debugger` agent to validate JSX syntax and fix errors, preserving educational content.
5. **Refine** (optional) — Launch `content-refiner` agent for enhanced explanations, clarity, and tone polishing.
6. **Convert** — Run `convert.ps1` to generate standalone HTML. The script auto-inlines block-kit source so all symbols resolve.
7. **Memory Update** — Update agent memories with patterns observed, user preferences, and project progress.

## Agent Roles

- **Master Agent** (orchestrator): Launches subagents in sequence/parallel, reviews outputs, ensures quality
- **syllabus-researcher**: Gathers research, example problems, sources, difficulty ratings
- **probset-manager**: Creates block-kit JSX artifacts (both CONFIG-based and direct-primitive patterns)
- **jsx-debugger**: Validates syntax, fixes errors, preserves educational content
- **content-refiner**: Polishes wording, tone, and clarity (optional step)

## Artifact Patterns

### Pattern A: ProbsetComposer (simple probsets, lecture sets)
```jsx
import { ProbsetComposer } from "../project-template-files/block-kit.jsx";
const CONFIG = {
  meta: { title: "...", subtitle: "...", topic: "G10 ..." },
  blocks: [
    { type: "section-header", title: "Easy", subtitle: "..." },
    { type: "mc", diff: "easy", question: "...", choices: ["A","B","C","D"], correct: 0 },
  ],
};
export default function ProbsetName() { return <ProbsetComposer config={CONFIG} />; }
```

### Pattern B: Direct Primitives (complex multi-tab learning guides)
```jsx
import { C, F, Geo, GLOBAL_CSS, Card, Label, Mono, Tag, Rule, MathBlock, InfoRow, QuoteBlock, HintBox, SummaryBox, MCField, INTField } from "../project-template-files/block-kit.jsx";
// Custom components (canvas, sliders) defined inline
// Tab/part navigation managed with useState
```

Required in all guides: `← Index | Highscores` navbar at top, Index + Highscores links in footer.

## Diff Values

Use word values (not numeric): `"easy"` (3 pts), `"medium"` (4 pts), `"hard"` (5 pts).

## Primitive Mapping (legacy → block-kit)

| Legacy | Block-kit |
|--------|-----------|
| `DS.radius` | `"4px"` |
| `.fade` | `.bk-fade` |
| `PartSummary` | `SummaryBox` |
| `CompNote` | `HintBox variant="comp"` |
| `Quote` | `QuoteBlock` |
| `<style>{css}</style>` | `<style>{GLOBAL_CSS}</style>` |

## Notes

- Pipeline assumes all four agent types exist and are registered.
- Output JSX follows standalone format (no build step, React via CDN).
- Target scope: G10 integrated roadmap Phase 2 (Blocks 7–11).
- Convert script: `project-template-files/convert.ps1` — auto-inlines block-kit.jsx into HTML output.
