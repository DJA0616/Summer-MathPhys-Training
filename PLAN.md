# Plan for Running on GitHub Server/Live Server (Without Build Step)

## Overview
Run the React-based project directly in the browser using client-side JSX transformation via Babel Standalone, enabling deployment to GitHub Pages or any static host without a build step.

## File Structure Changes
- Add `index.html` as entry point
- Keep existing `.jsx` files (e.g., `Probset_Format_v2.jsx`, `design-system.jsx`)
- No build output directory needed

## Implementation Steps
1. Create `index.html` in project root:
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Summer Math/Physics Training</title>
     <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
     <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
     <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
   </head>
   <body>
     <div id="root"></div>
     <script type="text/babel" data-src="Probset_Format_v2.jsx" data-plugins="transform-react-jsx"></script>
     <script type="text/babel">
       const root = ReactDOM.createRoot(document.getElementById('root'));
       root.render(<ProbsetFormat />);
     </script>
   </body>
   </html>
   ```
2. Adjust JSX imports in `Probset_Format_v2.jsx`:
   - Replace `import { useState } from "react";` with `const { useState } = React;`
   - Ensure all dependencies are available via CDN or inline
3. Test locally by opening `index.html` in browser
4. Deploy to GitHub Pages:
   - Push to `main` or `gh-pages` branch
   - Configure GitHub Pages to serve from root directory

## Dependencies (CDN)
- React 18: `https://unpkg.com/react@18/umd/react.development.js`
- ReactDOM 18: `https://unpkg.com/react-dom@18/umd/react-dom.development.js`
- Babel Standalone: `https://unpkg.com/@babel/standalone/babel.min.js`

## Considerations
- Use development CDN versions for easier debugging; switch to production minified versions for live deployment
- Ensure all JSX files are accessible via relative paths in `data-src` attribute
- No need for JSX build tools (Webpack, Vite, etc.)
- Works on any static host (GitHub Pages, Netlify, Vercel, etc.)

---

# Plan for localStorage Integration

## Overview
Persist times, scores, and progress across sessions using browser localStorage, enabling users to resume where they left off.

## File Structure Changes
- Modify `Probset_Format_v2.jsx` to add localStorage logic
- No new files required

## Implementation Steps
1. Define storage key constant:
   ```javascript
   const STORAGE_KEY = 'summerMathPhysProgress';
   ```
2. Create helper functions to load and save state:
   ```javascript
   const loadFromStorage = () => {
     try {
       const stored = localStorage.getItem(STORAGE_KEY);
       return stored ? JSON.parse(stored) : null;
     } catch (e) {
       console.warn('Failed to load from localStorage:', e);
       return null;
     }
   };

   const saveToStorage = (state) => {
     try {
       localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
     } catch (e) {
       console.warn('Failed to save to localStorage:', e);
     }
   };
   ```
3. In `ProbsetFormat` component:
   - Initialize state with `useState`, using `loadFromStorage()` as initializer or fallback to default state
   - Add `useEffect` to save state to localStorage whenever relevant state changes:
     ```javascript
     useEffect(() => {
       saveToStorage({
         tab,
         // Include any other state to persist (scores, times, progress)
       });
     }, [tab, /* other state variables */]);
     ```
4. Determine what to persist:
   - Currently selected tab (`tab`)
   - For future extension: scores per problem set, completion times, progress indicators
   - Start with tab persistence; expand as needed
5. Test by:
   - Changing tabs
   - Refreshing page - should restore last tab
   - Closing and reopening browser - should restore state

## State Structure Example
```javascript
{
  tab: 'types', // last selected tab
  scores: {     // optional: track scores per problem set
    set1: 85,
    set2: 92
  },
  progress: {   // optional: completion status
    set1: true,
    set2: false
  },
  timestamps: { // optional: time spent
    set1: 120,  // seconds
    set2: 180
  }
}
```

## Considerations
- Start small: persist only tab selection to verify mechanism
- Use `JSON.parse`/`JSON.stringify` with try/catch for safety
- Consider storage limits (approximately 5MB per origin)
- For sensitive data, consider encryption (not required for this use case)
- Clear storage option: provide button to reset progress if needed
- Works across all modern browsers supporting localStorage

---

## Combined Implementation Notes
Both plans can be implemented independently:
- The GitHub server plan enables deployment
- The localStorage plan enhances user experience
- They do not conflict; localStorage works in deployed version

## Next Steps
1. Implement GitHub server plan first to establish deployable baseline
2. Add localStorage integration to persist UI state
3. Test locally and on GitHub Pages
4. Extend localStorage to include scores and progress as feature evolves