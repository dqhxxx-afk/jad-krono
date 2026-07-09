# JAD KRONO 2.0 Quiet Luxury

This version is rebuilt from the actual source currently running on GitHub.

## Main changes

- English only
- Removed EN / VI language switcher
- Removed phone number from header
- Simplified header navigation
- Reduced copy across the site
- Removed duplicated contact blocks
- Cleaner Contact section
- Minimal footer
- More boutique-style Collection
- Product detail pages kept
- Google Maps, Facebook, Instagram, WhatsApp retained
- SEO sitemap and robots included

## Upload to GitHub

Upload the contents of this folder to the repository root:

- app/
- components/
- data/
- public/
- package.json
- next.config.js
- README.md
- .gitignore

Do not upload the parent folder itself.

## Update watches

Edit:

data/site.js

## Add product images

Upload images to:

public/products/

Then set product image paths in data/site.js:

image: "/products/daytona.jpg"
gallery: ["/products/daytona.jpg", "/products/daytona-side.jpg"]
