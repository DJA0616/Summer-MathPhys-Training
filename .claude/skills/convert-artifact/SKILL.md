# Convert JSX Artifact to Standalone HTML

Convert one or more React JSX artifacts into standalone `.html` files — browser-openable, publicly shareable, zero build step.

## When to Use

User says: "convert this to HTML", "make this standalone", "deploy this artifact", "publish this problem set", or `/convert-artifact <file.jsx>`.

## How It Works

1. Run `project-template-files/convert.ps1` with the JSX file path(s)
2. Script auto-wraps JSX into HTML template with React + Babel standalone CDN
3. Auto-replaces `import { ... } from "react"` → `const { ... } = React;`
4. Auto-replaces `export default function X()` → `function X()`
5. Adds `ReactDOM.createRoot(...).render(<X />)` mount line
6. Outputs `.html` file(s) in same directory

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

- React 18 + ReactDOM + Babel standalone from CDN (jsdelivr)
- Google Fonts (@import EB Garamond + JetBrains Mono)
- Base CSS (dark bg, scrollbar, fadeUp animation)
- Inlined DS design tokens
- All sub-components, answer fields, and main component as editable `<script type="text/babel">`
- SVG geo background preserved as-is

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