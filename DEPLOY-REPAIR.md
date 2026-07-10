# JAD KRONO — clean Vercel deployment

This package contains one Next.js project only. Do not merge it into an existing folder that still contains the older JavaScript project.

## Required replacement

1. Clone or open the existing GitHub repository locally.
2. Delete every project file and folder except the hidden `.git` folder.
3. Copy all files from this package into the repository root.
4. Commit and push to `main`.
5. Vercel will redeploy automatically.

## Local verification

```bash
npm ci
npm run lint
npm run build
```

Expected routes: `/`, `/about`, `/collection`, `/contact`, `/faq`, `/services`.
