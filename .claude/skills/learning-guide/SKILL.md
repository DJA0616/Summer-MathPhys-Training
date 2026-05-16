---
name: learning-guide
description: Create a learning guide (JSX artifact) from syllabus files and integrated roadmap, using design system templates and interactive answer fields.
metadata:
  type: project
---

## Purpose

Generate a self-contained React JSX learning guide that teaches **G10** concepts from the integrated roadmap (Phase 2, Blocks 7–11), using the project's design system (DS) and interactive answer field components (MCField, TFField, INTField, FIEField). Optionally convert to standalone HTML.

**Scope:** G10 roadmap topics only. G9 material serves as prerequisite knowledge — reference it for context but do not create full learning guides for G9 topics.

## When to Use

User says: "Make a learning guide for waves", "Create a study guide from G10 syllabus", "Generate JSX lesson on optics", or `/learning-guide <topic>`. Guides target G10 blocks (7–11) from `syllabuses/integrated_learning_roadmap.html`.

## Steps

1. **Collect Sources**
   - Read all syllabus markdown files in `syllabuses/` (e.g., `g9 physics syllabus.md`, `g9 math syllabus.md`, etc.)
   - Read `syllabuses/integrated_learning_roadmap.html` for block structure and competition tags.
   - Read `project-template-files/design-system.jsx` for DS constants and sub-components.
   - Read `project-template-files\Probset_Format_v2.jsx` for answer field patterns.

2. **Determine Scope**
   - Target G10 roadmap blocks (Phase 2, Blocks 7–11) from `syllabuses/integrated_learning_roadmap.html`.
   - If user specifies a topic (e.g., "waves", "optics", "circuits"), match to the corresponding G10 block.
   - If no topic specified, create a guide for the next uncovered G10 block.
   - G9 topics (vectors, Newton's laws, energy, circular motion) are **prerequisite knowledge only** — mention them in context but do not create dedicated learning guides for them.

3. **Outline Guide**
   - Use the design‑system's typography and layout classes (`.t-display`, `.t-h1`, `.t-body`, `.card`, `.rule`, etc.) from `design-system.jsx`.
   - Structure:
     - Header with title (topic) and optional difficulty dots.
     - Theory sections: short paragraphs, formulas in `.math-block`, diagrams via `<Geo />` (optional).
     - Concept checks: 2‑4 interactive questions (mix of MC, TF, INT, FIE) tied to the theory.
     - Summary footer with points total and next‑step suggestion.

4. **Write JSX**
   - Create a new file in `learning-guides/` named `<Topic>_L<NN>.jsx` (e.g., `Vectors_L01.jsx`).
   - At top, import `useState` from "react".
   - Define a local `DS` object copied from `design-system.jsx` (or import if you prefer, but for standalone artifact we inline).
   - Destructure `C` and `F` from `DS`.
   - Define the CSS block (same as in `Probset_Format_v2.jsx` but can be trimmed; keep Google Fonts import and basic resets).
   - Copy sub‑components `Geo`, `Card`, `Label`, `Mono`, `Dots`, `Tag`, `Rule` exactly from `Probset_Format_v2.jsx` (or import from design-system if we want DRY, but artifact must be self‑contained).
   - Copy answer field components (`MCField`, `TFField`, `INTField`, `FIEField`) from `Probset_Format_v2.jsx` (they already use local DS).
   - Create main component `export default function LearningGuide() { ... }` that renders the outline.
   - Use state (`useState`) for interactive fields as in the examples.
   - Keep the component under ~200 lines; if longer, consider splitting into sub‑components but still inline.

5. **Style Consistency**
   - Use the accent colors (`#7eb8d4` for primary accent, `#a0d4b0` for alt) for correct/incorrect feedback.
   - Use the radius values (`4px`, `6px`).
   - Follow the same spacing and typography as in `Probset_Format_v2.jsx`.

6. **Optional HTML Conversion**
   - After JSX is written, offer to run the conversion script:
     ```
     ./project-template-files/convert.ps1 path/to/LearningGuide.jsx
     ```
   - This produces `LearningGuide.html` in the same folder, ready to open in a browser.

7. **Naming Convention**
   - Use `G10_Topic_L01.jsx` where `Topic` is short keyword (no spaces), `L01` is lesson number.
   - If user does not specify number, start at `L01` and increment if file exists.

8. **Quality Check**
   - Verify that all interactive fields have a correct answer or validation logic.
   - Ensure the design tokens (colors, fonts) match the design system exactly.
   - Confirm that the component renders without errors in a JSX playground (e.g., Claude Artifact).

## Example Interaction

User: "Create a learning guide for G10 waves and SHM"
- Skill reads `syllabuses/g10 physics syllabus.md`, `syllabuses/integrated_learning_roadmap.html`, finds Block 7: Waves, SHM & Trigonometry.
- Notes that `Trig_Bridge_L01.jsx` already covers the trig prerequisite.
- Writes `G10_Waves_L01.jsx` with:
  - Header: "Waves & Simple Harmonic Motion" + 2 dots (medium difficulty).
  - Theory: wave equation, SHM, pendulum period, sound wave properties.
  - Two MC questions on wave speed and superposition.
  - One INT question: compute pendulum period.
  - One FIE: fill in wave equation blanks.
- Outputs file and offers conversion.

## Notes

- **Scope:** G10 roadmap blocks (Phase 2, Blocks 7–11). G9 content is prerequisite only — cite it but do not build guides for it.
- The guide must be self‑contained: no external dependencies except React and Babel from CDN (handled by conversion step).
- Keep language clear, pedagogical, matching the user's tone (from project memory: teaching mode, rabbit‑hole mode, etc.).
- If user asks for more depth, add a "Rabbit Hole" section with advanced insight (see memory: Rabbit Hole Mode).
- Always point back to the G10 syllabus and integrated roadmap for coherence.
- Prerequisite knowledge to assume: G9 vectors (parallelogram/component methods), Newton's laws, energy conservation, basic coordinate geometry. Reference these without re-teaching.

## References

- Design system: `project-template-files/design-system.jsx`
- Answer field patterns: `project-template-files/Probset_Format_v2.jsx`
- Syllabus folder: `syllabuses/`
- Integrated roadmap: `syllabuses/integrated_learning_roadmap.html`
- Existing learning guides: `learning-guides/` (for naming)
