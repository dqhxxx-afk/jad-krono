# JAD KRONO 3.5 Build-Safe Brand Navigation

This fixes the 3.4 Vercel build failure.

## Fixed

- Removed `useSearchParams()` from Collection page
- Brand navigation still works:
  - `/collection?brand=rolex`
  - `/collection?brand=patek`
  - `/collection?brand=ap`
  - `/collection?brand=rm`
- Avoids Next.js Suspense/static build issue
- Keeps all previous fixes:
  - npm install fix
  - mobile menu fix
  - brand ticker clickable
  - Supabase admin

## Upload

Upload all contents to GitHub repository root.
