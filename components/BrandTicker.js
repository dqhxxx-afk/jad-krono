export const brandLinks = [
  { label: "All Watches", value: "all", href: "/collection" },
  { label: "Rolex", value: "rolex", href: "/collection?brand=rolex" },
  { label: "Patek Philippe", value: "patek", href: "/collection?brand=patek" },
  { label: "Audemars Piguet", value: "ap", href: "/collection?brand=ap" },
  { label: "Richard Mille", value: "rm", href: "/collection?brand=rm" },
  { label: "Tudor", value: "tudor", href: "/collection?brand=tudor" },
  { label: "Hublot", value: "hublot", href: "/collection?brand=hublot" },
  { label: "Cartier", value: "cartier", href: "/collection?brand=cartier" },
  { label: "Omega", value: "omega", href: "/collection?brand=omega" }
];

export function BrandTicker({ activeBrand = "all" }) {
  return (
    <section className="ticker brand-ticker-nav" aria-label="Browse by brand">
      {brandLinks.map((brand) => (
        <a
          key={brand.value}
          href={brand.href}
          className={activeBrand === brand.value ? "active" : ""}
        >
          {brand.label}
        </a>
      ))}
    </section>
  );
}
