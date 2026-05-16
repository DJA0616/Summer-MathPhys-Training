# Convert JSX Artifact to Standalone HTML

Convert one or more React JSX artifacts into standalone `.html` files — browser-openable, publicly shareable, zero build step.

## When to Use

User says: "convert this to HTML", "make this standalone", "deploy this artifact", "publish this problem set", or `/convert-artifact <file.jsx>`.

## How It Works

1. Run `project-template-files/convert.ps1` with the JSX file path(s)
2. Script auto-detects block-kit imports and inlines the full block-kit source (~1639 lines) into output
3. Strips all imports, replaces with `const { useState, ... } = React;` hook destructure
4. Strips `export default/export` from functions
5. Adds `ReactDOM.createRoot(...).render(<ComponentName />)` mount line
6. Outputs `.html` file in same directory

## Usage

**Single file:**
```powershell
./project-template-files/convert.ps1 path/to/MyProbset.jsx
```
Output: `path/to/MyProbset.html`

**Batch (all JSX in a folder):**
```powershell
Get-ChildItem path/to/*.jsx | ForEach-Object { ./project-template-files/convert.ps1 $_.FullName }
```

## What the HTML File Contains

- React 18 + ReactDOM + Babel standalone from CDN (unpkg)
- Google Fonts (@import EB Garamond + JetBrains Mono) — injected by GLOBAL_CSS
- Base CSS (dark bg, scrollbar, fadeUp animation)
- Full block-kit source inlined (DS, GLOBAL_CSS, Geo, all primitives, MCField, INTField, TFField, FIEField, ProbsetComposer, HighscoresPage, ProgStorage)
- Main component code as editable `<script type="text/babel">`

## Block Kit Inlining

The script detects `import { ... } from "...block-kit.jsx"` and:
1. Resolves the path relative to the input file
2. Reads block-kit.jsx, strips its imports/exports
3. Prepends the cleaned block-kit code before the component
4. All symbols (C, F, Geo, GLOBAL_CSS, Card, Label, etc.) resolve at runtime

## Hosting the Output

| Method | How |
|---|---|
| **GitHub Pages** | Push `.html` to repo → Settings → Pages |
| **Netlify Drop** | Drag file to [netlify.drop](https://app.netlify.com/drop) |
| **Vercel** | `npx vercel deploy` or drag-drop in dashboard |
| **Local** | Right-click → Open With → Browser |

## Limitations

- ~1.5s Babel parse time on first load (acceptable for up to ~30 questions)
- For 30+ question exam sets, consider Vite build instead (Phase 2 — not yet implemented)

## Template Reference

Manual template at `project-template-files/artifact-template.html` — use if converter script unavailable or for custom adjustments.
