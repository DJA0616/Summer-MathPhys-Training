# Plan Template — Probset / Learning Guide

Frontmatter required. All fields except `topic` and `type` have defaults.

```yaml
---
topic: ""                # e.g. "G10 Waves"
type: probset            # probset | exam | learning-guide
questions: 0             # auto-counted from sections if omitted
examMode: false          # true = timer enforced
timerDuration: null      # null = auto (60min/30Q, 90min/45Q+)
---
```

# [Display Title]

[Subtitle line — topic tags, question count, key themes]

## [Section Name]  (e.g. "Easy", "Part 1: Wave Basics")

Each question is a level-3 heading with type tag and answer data.

### Q1. [MC] Question text goes here
- A) First choice
- B) Second choice
- C) Third choice
- D) Fourth choice
- Correct: A
- Explain: (optional) Why this is correct, common pitfalls.

### Q2. [TF] Statement text (no quotes needed)
- Correct: true

### Q3. [INT] Question text
- Answer: 42
- Hint: (optional)

### Q4. [FIE] Question prompt
- Equation: W = F · __BLANK__ · cos(__BLANK__)
- Cards: d, theta, r, t, phi, 2d
- Correct: d, theta
- CorrectDisplay: W = F · d · cos(θ)

### Q5. [PARAGRAPH] Text content
(No answer data — renders as prose block)

### Q6. [NOTE] variant
- Variant: info | warn | comp
- Text content here...

### Q7. [SUMMARY]
- Intro: (optional) One-sentence lead-in.
- Points:
  - First key point
  - Second key point

## Custom Diagrams & Visualizations

Diagrams are described here with a reference ID. The compilation agent will inline them
as `render: (C, F, dims) => <svg>...</svg>` functions in the CONFIG.

### DIAGRAM: fig-1
- Caption: Fig. 1 — Wave interference pattern
- Width: 780
- Height: 260
- Description: Two sine waves overlapping, showing constructive/destructive nodes.
  (Compilation agent writes the actual SVG inline based on this description.)

### DIAGRAM: fig-2 (slider)
- Caption: Fig. 2 — Frequency sweep
- Width: 780
- Height: 300
- Param: frequency
- Min: 1
- Max: 10
- Step: 0.1
- Default: 5
- Description: Sine wave that changes frequency as slider moves.
  x-axis: 0 to 2π, y-axis: -1 to 1.

## Block Order Reference

The compilation agent renders blocks in the order they appear. Available block types:

| Plan tag | Block type | Purpose |
|----------|-----------|---------|
| `[MC]` | mc | Multiple choice, 4 options |
| `[TF]` | tf | True/False with statement |
| `[INT]` | int | Integer answer 0-999 |
| `[FIE]` | fie | Fill-in-equation with card bank |
| `[PARAGRAPH]` | paragraph | Body text block |
| `[NOTE]` | note | Callout (info/warn/comp) |
| `[SUMMARY]` | summary | Numbered summary panel |
| `[QUOTE]` | quote | Blockquote with attribution |
| `[HINT]` | hint | Collapsed hint (used standalone) |
| `[EQUATION]` | equation | Display math block |
| `[EXAMPLE]` | example | Labeled example box |
| `[SECTION]` | section-header | Section divider with title |
| `[SPACER]` | spacer | Vertical gap |
| `[RULE]` | rule | Horizontal rule line |
| `[DIAGRAM]` | diagram | Custom SVG, rendered in Card |
| `[SLIDER]` | slider-graph | Interactive slider + live SVG |

## Difficulty Auto-Mapping

When `diff` is a word, it maps automatically:
- `easy` → 1 dot, 3 pts
- `medium` → 2 dots, 4 pts
- `hard` → 3 dots, 5 pts

Numeric `diff` (1, 2, 3) and explicit `pts` also supported.
