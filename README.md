# JAD KRONO Next.js V8 Boutique Collection

V8 turns the website from a polished landing site into a stronger boutique dealer website.

## New in V8

- Individual watch detail pages
- Product gallery layout
- Related watch recommendations
- Better inquiry flow per watch
- Product pages generated from `data/site.js`
- Stronger collection structure
- SEO-ready product URLs
- Keeps V7 luxury visual polish

## Important URLs

Collection:
`/collection`

Product example:
`/collection/rolex-daytona-126500ln`

## Upload to GitHub

Upload the contents of this folder to your GitHub repository root:

- app/
- components/
- data/
- public/
- package.json
- next.config.js
- README.md
- .gitignore

Do not upload the parent folder itself.

## Add or edit watches

Edit:

`data/site.js`

Each product needs:

- id
- brand
- model
- reference
- year
- condition
- set
- status
- price
- category
- image
- gallery

## Add product images

Put images into:

`public/products/`

Then use paths like:

`image: "/products/daytona-main.jpg"`

`gallery: ["/products/daytona-main.jpg", "/products/daytona-side.jpg"]`
