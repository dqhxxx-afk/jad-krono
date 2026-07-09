# JAD KRONO Next.js Luxury Dealer V5

This is the fuller luxury dealer build.

## Included
- Home
- Collection with search and brand filters
- Brands
- Services
- Sell Your Watch
- About
- Contact
- Market Insights
- EN / VI bilingual UI
- Instagram / Facebook / WhatsApp links
- Google Maps placeholder
- SEO metadata
- JSON-LD structured data
- Product data in one file
- Product image folder

## Upload to GitHub

Keep this structure exactly:

- app/
- components/
- data/
- public/
- package.json
- next.config.js
- README.md
- .gitignore

## Add a watch

Edit:

`data/products.js`

## Add a product image

Upload image to:

`public/products/`

Then set the image path inside `data/products.js`:

`image: "/products/your-image.jpg"`

## Social links

Edit:

`data/products.js`

At the bottom:

```js
export const socials = {
  instagram: "https://instagram.com/jadkrono",
  facebook: "https://facebook.com/jadkrono",
  whatsapp: "https://wa.me/6586996868",
  email: "contact@jadkrono.com"
};
```
