# PLAN.md — Next Phase

## Phase 2A: Infrastructure Polish (now)

### 1. Index catalog updates
- Add Highscores card to index.html (Problem Sets / Learning Guides / Highscores sections)
- Add missing Trig_Bridge_L01_Probset to catalog
- Generate `highscores.html` via `convert.ps1`
- Add highscores progress summary snippet to index.html (like existing progress section, but pulls top 3 from localStorage)

### 2. Migrate old learning guides to block-kit
All 4 G10 lectures (Waves, Optics, Electrostatics, Circuits) currently copy-paste DS/CSS/Geo/primitives inline — legacy from before block-kit existed. Migrate each to:

```jsx
import { ProbsetComposer } from "../project-template-files/block-kit.jsx";
const CONFIG = { meta: {...}, blocks: [...] };
export default function GuideName() { return <ProbsetComposer config={CONFIG} />; }
```

This gives them navbar (Index | Highscores), highscores tracking, and trims ~200 lines of duplicated code per file. Trig_Bridge_L01 also needs migration (it's standalone too, though simpler).

**Migration checklist per guide:**
- Replace inline DS/CSS/Geo/primitives with block-kit import
- Map existing content to CONFIG blocks (paragraph, card→diagram/slider-graph, MCField→mc block, etc.)
- Preserve intra-page tab/part navigation as custom blocks or inline within lecture section
- Verify all interactive fields still work
- Re-generate HTML via convert.ps1

### 3. Promote content-pipeline skill
Move `.claude/projects/.../memory/skills/content-pipeline/SKILL.md` → `.claude/skills/content-pipeline/SKILL.md`. This skill orchestrates the full plan→compile→validate→refine pipeline in one invocation. Currently buried in memory where it's invisible to the skill loader.

---

## Phase 2B: Content Completion (next)

### 4. Probsets for Blocks 8-10
Each needs a companion probset matching its lecture:

| Block | Lecture | Probset target |
|-------|---------|----------------|
| 8 Optics | G10_Optics_L01 | ~15 problems: Snell's law, TIR, mirror/lens equation, ray diagrams |
| 9 Electrostatics | G10_Electrostatics_L01 | ~15 problems: Coulomb's law, field superposition, potential |
| 10 Circuits | G10_Circuits_L01 | ~15 problems: Ohm's law, series/parallel, equivalent resistance |

Use two-phase pipeline: syllabus-researcher → plan markdown → probset-manager → JSX.
Difficulty: ~40% easy, 35% medium, 25% hard. No exam mode (<30 questions).

### 5. Block 11: Magnetism & Complex Numbers
Last uncovered roadmap block. Create:
- `G10_Magnetism_L01.jsx` — lecture guide covering magnetic force, field configurations, Faraday's/Lenz's law, complex numbers as phasors
- `G10_Magnetism_Probset.jsx` — companion problem set

Research via syllabus-researcher agent first.

---

## Phase 2C: New Artifact Types (after content)

### 6. Quiz artifact type
Roadmap lists "Quiz" for blocks 7, 8, 10, 11. Quiz = shorter than probset (8-12 questions), timed (10-20 min), all difficulties mixed, auto-submit on expiry.

Implementation options:
- **A: ProbsetComposer with quiz meta** — set `examMode: true`, short `timerDuration`, hide explanations until after submit. Minimal code change, reuse everything.
- **B: Dedicated QuizComposer** — separate component with quiz-specific UI (one question at a time, no back-navigation, results screen at end). More work, better UX.

Recommend **Option A** first (fast, covers need), Option B later if quiz UX feels lacking.

### 7. Build/convert automation
Currently each `.jsx` → `.html` conversion is manual via `convert.ps1`. Options:
- **Watch script**: `watch.ps1` — monitors file changes, auto-converts on save
- **Batch script**: `build-all.ps1` — converts all JSX files in problem_sets/ and learning-guides/ at once
- **GitHub Action**: auto-convert and deploy to GH Pages on push

Start with batch script (simplest), add watch later.

---

## Dependency Order

```
1. Index + highscores catalog updates (no deps)
2. content-pipeline skill promotion (no deps)
3. Migrate old guides to block-kit (depends on block-kit being stable)
4. Build batch script (no deps)
   ↓
5. Optics probset (depends on Optics L01 existing)
6. Electrostatics probset
7. Circuits probset
8. Magnetism lecture + probset (depends on syllabus research)
   ↓
9. Quiz type (depends on probsets existing to quiz on)
10. Watch script / CI (nice-to-have)
```

## Files That Will Change

| File | Action |
|------|--------|
| `index.html` | Add highscores card, missing probset, progress widget |
| `highscores.html` | Generate from highscores.jsx |
| `learning-guides/G10_Waves_L01.jsx` | Migrate to block-kit |
| `learning-guides/G10_Optics_L01.jsx` | Migrate to block-kit |
| `learning-guides/G10_Electrostatics_L01.jsx` | Migrate to block-kit |
| `learning-guides/G10_Circuits_L01.jsx` | Migrate to block-kit |
| `learning-guides/Trig_Bridge_L01.jsx` | Migrate to block-kit |
| `.claude/skills/content-pipeline/SKILL.md` | Move from memory |
| `problem_sets/G10_Optics_Probset.jsx` | Create |
| `problem_sets/G10_Electrostatics_Probset.jsx` | Create |
| `problem_sets/G10_Circuits_Probset.jsx` | Create |
| `learning-guides/G10_Magnetism_L01.jsx` | Create |
| `problem_sets/G10_Magnetism_Probset.jsx` | Create |
| `project-template-files/build-all.ps1` | Create |
