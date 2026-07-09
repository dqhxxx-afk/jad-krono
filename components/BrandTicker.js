export const brandLinks = [
  { label: "All Watches", value: "all", href: "/collection" },
  { label: "Rolex", value: "rolex", href: "/collection?brand=rolex" },
  { label: "Patek Philippe", value: "patek", href: "/collection?brand=patek" },
  { label: "Audemars Piguet", value: "ap", href: "/collection?brand=ap" },
  { label: "Cartier", value: "cartier", href: "/collection?brand=cartier" },
  { label: "Tudor", value: "tudor", href: "/collection?brand=tudor" },
  { label: "IWC", value: "iwc", href: "/collection?brand=iwc" },
  { label: "Hublot", value: "hublot", href: "/collection?brand=hublot" },
  { label: "Breitling", value: "breitling", href: "/collection?brand=breitling" },
  { label: "Franck Muller", value: "franck-muller", href: "/collection?brand=franck-muller" },
  { label: "Chopard", value: "chopard", href: "/collection?brand=chopard" },
  { label: "Sinn", value: "sinn", href: "/collection?brand=sinn" }
];

export function BrandTicker({ activeBrand = "all" }) {
  return (
    <section className="ticker brand-ticker-nav" aria-label="Browse by brand">
      {brandLinks.map((brand) => (
        <a key={brand.value} href={brand.href} className={activeBrand === brand.value ? "active" : ""}>
          {brand.label}
        </a>
      ))}
    </section>
  );
}
