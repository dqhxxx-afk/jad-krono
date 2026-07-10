# JAD KRONO 1.0 QA Report

## Production build

- Next.js production build: passed
- TypeScript validation: passed
- Static pages generated: passed
- Dynamic product route: passed
- npm production audit: 0 known vulnerabilities

## Routes checked

- `/`
- `/collection`
- `/collection/rolex-daytona-126500ln`
- `/collection/patek-nautilus-5711`
- `/collection/rolex-gmt-master-ii-batman`
- `/sell-your-watch`
- `/services`
- `/about`
- `/contact`
- `/faq`
- `/privacy-policy`
- `/terms-conditions`
- `/robots.txt`
- `/sitemap.xml`
- Custom 404 response

All expected routes returned the correct status. No broken internal links were found in the public pages checked.

## Responsive review

Reviewed at:

- Desktop: 1440 × 1000
- Mobile: 390 × 844

The review covered Home, Collection, Contact, Services, About and the site Footer.

## Copy review

Removed or replaced earlier wording that sounded repetitive or overly promotional. Final Hero copy:

- `Modern and collectible timepieces.`
- `Private viewings by appointment in Singapore.`

## Logo and browser icons

Rebuilt from the official JAD KRONO brand artwork:

- Tightly cropped transparent Header/Footer logo
- JAD KRONO monogram for product placeholders
- `favicon.ico`
- 16 px and 32 px favicons
- Apple Touch Icon
- 192 px and 512 px manifest icons
- 1200 × 630 Open Graph image

Safari may retain an older favicon until its website cache or old tab is cleared.

## Accessibility checks

- One H1 per public route checked
- Image alternative text checked
- External links opening new tabs include `noreferrer`
- Skip link added
- Navigation uses active-page state
- Mobile menu has accessible open/close labels

## Deployment note

Upload the contents of this folder to the GitHub repository root. Confirm the new Vercel deployment is marked `Ready`, then test `jadkrono.com` in a fresh private/incognito tab.
