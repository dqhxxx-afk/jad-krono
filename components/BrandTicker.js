import { brandLabel } from "../lib/watchUtils";

export const brandLinks = [
  { value: "all", href: "/collection" },
  { value: "rolex", href: "/collection?brand=rolex" },
  { value: "patek", href: "/collection?brand=patek" },
  { value: "ap", href: "/collection?brand=ap" },
  { value: "cartier", href: "/collection?brand=cartier" },
  { value: "tudor", href: "/collection?brand=tudor" },
  { value: "iwc", href: "/collection?brand=iwc" },
  { value: "hublot", href: "/collection?brand=hublot" },
  { value: "breitling", href: "/collection?brand=breitling" },
  { value: "franck-muller", href: "/collection?brand=franck-muller" },
  { value: "chopard", href: "/collection?brand=chopard" },
  { value: "sinn", href: "/collection?brand=sinn" }
];

export function BrandTicker({ activeBrand = "all" }) {
  return (
    <section className="brand-strip v27-brand-strip" aria-label="Browse by brand">
      {brandLinks.map((brand) => (
        <a key={brand.value} href={brand.href} className={activeBrand === brand.value ? "active" : ""}>
          {brandLabel(brand.value)}
        </a>
      ))}
    </section>
  );
}
