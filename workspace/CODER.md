<instructions>
This file will be automatically added to your context. 
It serves multiple purposes:
  1. Storing frequently used tools so you can use them without searching each time
  2. Recording the user's code style preferences (naming conventions, preferred libraries, etc.)
  3. Maintaining useful information about the codebase structure and organization
  4. Remembering tricky quirks from this codebase

When you spend time searching for certain configuration files, tricky code coupled dependencies, or other codebase information, add that to this CODER.md file so you can remember it for next time.
Keep entries sorted in DESC order (newest first) so recent knowledge stays in prompt context if the file is truncated.
</instructions>

<coder>
# File Content Goes Here

## Build / Config Notes (newest first)
- All screen routes MUST use `React.lazy()` + `Suspense` — eager imports of 35+ screens cause Sandpack bundler timeout (session 15)
- `@animaapp/vite-plugin-screen-graph` causes bundler hangs in Sandpack — removed from vite.config.ts (session 15)
- Config files MUST use `.cjs` extension (not `.js`) because `package.json` has `"type":"module"` — applies to `tailwind.config.cjs` and `postcss.config.cjs`
- Never recreate `tailwind.config.js` or `postcss.config.js` — the `.cjs` variants are canonical
- `tailwind.css` is loaded via `<link>` in `index.html` (not via JS import) — don't duplicate
</coder>
