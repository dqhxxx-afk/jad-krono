# JAD KRONO 1.0

A polished, responsive website foundation for JAD KRONO, a Singapore private watch dealer.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production check

```bash
npm run build
npm start
```

## Main edit points

- Inventory: `data/watches.ts`
- Phone / WhatsApp links: search for `6586996868`
- Global styling: `app/globals.css`
- Homepage sections: `app/page.tsx`
- Shared header and footer: `components/Header.tsx`, `components/Footer.tsx`

The watch visuals are original inline SVG illustrations, so the project has no third-party image licensing or hotlinking dependency. Replace them with real inventory photography whenever product images are ready.
