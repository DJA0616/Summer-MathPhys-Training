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

## Phase 2C: New Artifact Types ✅ DONE

### 6. Quiz artifact type ✅
Implemented Option A: ProbsetComposer with `quizMode: true` meta flag.
- Added `suppressExplain` prop to MCField (hides Explain button when quizMode active and timer not frozen)
- Added `suppressHint` prop to INTField (hides Hint button in quiz mode)
- ProbsetComposer wires `quizMode` → `suppressExplain`/`suppressHint` based on frozen state
- Quiz CONFIG pattern: `examMode: true`, `quizMode: true`, `timerDuration: 15*60`, mixed difficulty (no section headers)
- Sample quiz created: `G10_Circuits_Quiz01.jsx` (10 questions, 37 pts, 15 min)

### 7. Build/convert automation ✅
- `build-all.ps1` created — scans `learning-guides/` and `problem_sets/` for .jsx, runs convert.ps1 on each
- `--Watch` flag for file-change monitoring with configurable interval
- Reports per-file OK/FAIL with summary
- Fixed convert.ps1 bugs: duplicate `useTimer` decl, orphaned `};` from export blocks, missing `createContext`

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
