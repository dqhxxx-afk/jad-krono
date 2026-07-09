# JAD KRONO 3.1 Build Fixed

This is the fixed Supabase Admin version.

## Fixed

- Fixed Vercel build error from `app/not-found.js`
- Removed fragile dependency on `data/translations.js`
- Build tested successfully with `npm run build`
- Keeps `/admin` Supabase dashboard
- Keeps upload/edit/delete/Sold/Reserved features

## Upload to GitHub

Upload the contents of this folder to your repository root:

- app/
- components/
- data/
- lib/
- public/
- supabase/
- package.json
- next.config.js
- README.md
- .env.example
- .gitignore

Do not upload the parent folder itself.

## Supabase setup

1. Create Supabase project
2. Run `supabase/setup.sql`
3. Add Vercel env vars:
   - NEXT_PUBLIC_SUPABASE_URL
   - NEXT_PUBLIC_SUPABASE_ANON_KEY
4. Redeploy
5. Open `/admin`
