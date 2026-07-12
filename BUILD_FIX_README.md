# JAD KRONO 1.0.2 Build Fix

This hotfix removes the nested template literal in `app/collection/page.js`
that caused Vercel to stop at the JavaScript parser stage.

The search and brand-filter behaviour remains unchanged.
