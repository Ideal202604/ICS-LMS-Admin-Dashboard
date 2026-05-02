<instructions>
## 🚨 MANDATORY: CHANGELOG TRACKING 🚨

You MUST maintain this file to track your work across messages. This is NON-NEGOTIABLE.

---

## INSTRUCTIONS

- **MAX 5 lines** per entry - be concise but informative
- **Include file paths** of key files modified or discovered
- **Note patterns/conventions** found in the codebase
- **Sort entries by date** in DESCENDING order (most recent first)
- If this file gets corrupted, messy, or unsorted -> re-create it. 
- CRITICAL: Updating this file at the END of EVERY response is MANDATORY.
- CRITICAL: Keep this file under 300 lines. You are allowed to summarize, change the format, delete entries, etc., in order to keep it under the limit.

</instructions>

<changelog>
## 2026-05-02 (session 8)
- Fixed build timeout: `postcss.config.js` had ESM `export default` conflicting with `"type":"module"` in package.json
- PostCSS/Vite loader stalled on CJS/ESM boundary — converted to `postcss.config.cjs` (unambiguous CJS)
- Added missing `autoprefixer` devDependency to package.json
- Deleted `postcss.config.js`, created `postcss.config.cjs`

## 2026-04-30 (session 7)
- Fixed build error: added missing `@radix-ui/react-switch` to `package.json` dependencies
- Modified: `package.json`

## 2026-04-30 (session 6)
- Fixed build error: added missing `@radix-ui/react-tabs` to `package.json` dependencies
- Modified: `package.json`

## 2026-04-30 (session 5)
- Fixed remaining "EduAdmin" references in `public/site.webmanifest` (name, short_name, description)
- All branding across `index.html` + `site.webmanifest` now reads "ICS LMS-Admin Dashboard"

## 2026-04-30 (session 4)
- Updated all page meta: title, description, OG, Twitter, JSON-LD → "ICS LMS-Admin Dashboard"
- Modified: `index.html`

## 2026-04-30 (session 3)
- Made `SharedTopNav` search bar fully functional with live results dropdown
- Added `SEARCH_ITEMS` catalogue covering all 13 routes with keywords
- Supports keyboard nav (↑↓ Enter Escape), highlight matching text, clear button, outside-click close
- Modified: `src/components/shared/SharedTopNav.tsx`

## 2026-04-30 (session 2)
- Fixed bundler hang: removed inline `css.postcss` config from `vite.config.ts` (was running Tailwind twice)
- Created `postcss.config.js` so Vite discovers PostCSS config once, cleanly
- Root cause: inline PostCSS in `vite.config.ts` + `tailwind.css` via `<link>` caused Tailwind to run in competing contexts

## 2026-04-30 (session 1)
- Fixed build timeout: `tailwind.css` had duplicate `@tailwind` directives and misplaced `@import`
- Fixed `index.html` duplicate `<link href="tailwind.css">` tag causing double CSS processing

## 2026-04-29
- Removed ICS Global logo (`ics-global-white-1.svg`) from `SharedSidebar.tsx` header section
</changelog>
