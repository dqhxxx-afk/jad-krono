# JAD KRONO 2.2 Easy Inventory

This version makes adding watches much easier.

You only need to touch two places:

1. Upload images into:
   `public/products/`

2. Edit watch list in:
   `data/watches.json`

No React code editing needed.

---

## How to add a new watch

### Step 1: Upload photo

Put image here:

`public/products/`

Example file name:

`rolex-daytona-126500ln.jpg`

### Step 2: Open this file

`data/watches.json`

### Step 3: Copy this template

```json
{
  "id": "rolex-daytona-126500ln",
  "brand": "Rolex",
  "model": "Cosmograph Daytona",
  "reference": "126500LN",
  "year": "2026",
  "condition": "Excellent",
  "set": "Full Set",
  "status": "Available",
  "price": "Price on request",
  "category": "rolex",
  "featured": true,
  "image": "/products/rolex-daytona-126500ln.jpg",
  "gallery": [
    "/products/rolex-daytona-126500ln.jpg",
    "/products/rolex-daytona-126500ln-side.jpg"
  ],
  "specs": {
    "case": "40mm",
    "movement": "Automatic Chronograph",
    "material": "Oystersteel",
    "bracelet": "Oyster Bracelet"
  },
  "description": "A carefully selected modern Rolex chronograph."
}
```

### Step 4: Commit changes

Vercel will update the website automatically.

---

## Important rules

- Image path must start with:
  `/products/`

- Image file name must match exactly.

Example:

Image file:
`public/products/daytona.jpg`

JSON:
`"image": "/products/daytona.jpg"`

- Every watch needs a unique `id`.

Good id:
`rolex-daytona-126500ln`

Bad id:
`Rolex Daytona 126500LN`

---

## Status options

Use short labels:

- Available
- Reserved
- Sold
- Sourcing
- Private Enquiry

---

## Category options

Use lowercase:

- rolex
- patek
- ap
- rm
- tudor
- hublot
- cartier
- omega

---

## Upload to GitHub

Upload the contents of this folder to your repository root:

- app/
- components/
- data/
- public/
- package.json
- next.config.js
- README.md
- .gitignore

Do not upload the parent folder itself.
