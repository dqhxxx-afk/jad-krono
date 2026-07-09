"use client";

import { useMemo, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WatchCard from "../../components/WatchCard";
import { useLanguage } from "../../components/useLanguage";
import { useWatches } from "../../components/useWatches";

export default function CollectionPage() {
  const { t } = useLanguage();
  const { watches, loading } = useWatches();
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");

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

        <section className="collection-section compact">
          <div className="collection-toolbar">
            <div className="filters">
              {["all", "rolex", "patek", "ap", "rm", "tudor", "hublot", "cartier", "omega"].map((item) => (
                <button key={item} onClick={() => setFilter(item)} className={filter === item ? "active" : ""}>
                  {item === "all" ? "All" : item === "patek" ? "Patek Philippe" : item === "ap" ? "AP" : item === "rm" ? "RM" : item.toUpperCase()}
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

          {shownProducts.length === 0 ? <p className="empty">{t.collection.noResults}</p> : null}
        </section>
      </main>
      <Footer t={t} />
    </>
  );
}
