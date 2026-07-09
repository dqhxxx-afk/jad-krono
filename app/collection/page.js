"use client";

import { useEffect, useMemo, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WatchCard from "../../components/WatchCard";
import { useLanguage } from "../../components/useLanguage";
import { BrandTicker } from "../../components/BrandTicker";
import { useWatches } from "../../components/useWatches";

export default function CollectionPage() {
  const { t } = useLanguage();
  const { watches, loading } = useWatches();
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setFilter(params.get("brand") || "all");
  }, []);

  const shownProducts = useMemo(() => {
    return watches
      .filter((p) => filter === "all" || p.category === filter)
      .filter((p) => `${p.brand} ${p.model} ${p.reference}`.toLowerCase().includes(query.toLowerCase()));
  }, [watches, filter, query]);

  return (
    <>
      <Header t={t} />
      <main className="page-shell">
        <section className="page-hero">
          <p className="eyebrow">{t.collection.eyebrow}</p>
          <h1>{t.collection.title}</h1>
          <p>{loading ? "Loading collection..." : t.collection.copy}</p>
        </section>

        <BrandTicker activeBrand={filter} />

        <section className="collection-section compact">
          <div className="collection-toolbar">
            <div className="filters">
              {["all", "rolex", "patek", "ap", "cartier", "tudor", "iwc", "hublot", "franck-muller", "breitling", "chopard", "sinn"].map((item) => (
                <button key={item} onClick={() => setFilter(item)} className={filter === item ? "active" : ""}>
                  {item === "all" ? "All" : item === "patek" ? "Patek Philippe" : item === "ap" ? "AP" : item === "franck-muller" ? "Franck Muller" : item.toUpperCase()}
                </button>
              ))}
            </div>
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t.collection.search} />
          </div>

          <div className="watch-grid">
            {shownProducts.map((product) => (
              <WatchCard key={product.id} product={product} enquireText={t.collection.enquire} />
            ))}
          </div>

          {shownProducts.length === 0 ? (
            <div className="empty-sourcing">
              <h3>{t.collection.noResults}</h3>
              <p>{t.collection.sourcingCopy}</p>
              <a className="btn gold" href="https://wa.me/6586996868?text=Hello%20JAD%20KRONO%2C%20I%20would%20like%20to%20request%20private%20sourcing." target="_blank">{t.collection.sourcingButton}</a>
            </div>
          ) : null}
        </section>
      </main>
      <Footer t={t} />
    </>
  );
}
