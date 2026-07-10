"use client";

import { useEffect, useMemo, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WatchCard from "../../components/WatchCard";
import { useLanguage } from "../../components/useLanguage";
import { useWatches } from "../../components/useWatches";
import { getWatchCategory, getWatchId, brandLabel } from "../../lib/watchUtils";
import { site } from "../../data/site";

const brands = [
  "all",
  "rolex",
  "patek",
  "ap",
  "cartier",
  "tudor",
  "iwc",
  "hublot",
  "breitling",
  "franck-muller",
  "chopard",
  "sinn"
];

export default function CollectionPage() {
  const { t } = useLanguage();
  const { watches, loading } = useWatches();
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setFilter(params.get("brand") || "all");
  }, []);

  function changeFilter(item) {
    setFilter(item);
    const url = item === "all" ? "/collection" : `/collection?brand=${item}`;
    window.history.replaceState(null, "", url);
  }

  const shownProducts = useMemo(() => {
    return watches
      .filter((p) => filter === "all" || getWatchCategory(p) === filter)
      .filter((p) => `${p.brand} ${p.model} ${p.reference}`.toLowerCase().includes(query.toLowerCase()));
  }, [watches, filter, query]);

  const sourcingMessage = encodeURIComponent(
    `Hello JAD KRONO, I would like to request private sourcing${filter !== "all" ? ` for ${brandLabel(filter)}` : ""}.`
  );

  return (
    <>
      <Header t={t} />
      <main className="page-shell collection-page-v210">
        <section className="page-hero collection-hero-v210">
          <p className="eyebrow">{t.collection.eyebrow}</p>
          <h1>{t.collection.title}</h1>
          <p>{loading ? "Loading collection..." : t.collection.copy}</p>
        </section>

        <section className="collection-section compact collection-v210-section">
          <div className="collection-toolbar-v210">
            <div className="collection-search-row-v210">
              <label htmlFor="collection-search">Search collection</label>
              <input
                id="collection-search"
                className="collection-search-v210"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.collection.search}
              />
            </div>

            <nav className="brand-filter-v210" aria-label="Filter by brand">
              {brands.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => changeFilter(item)}
                  className={filter === item ? "active" : ""}
                >
                  {brandLabel(item)}
                </button>
              ))}
            </nav>
          </div>

          <div className="watch-grid final-watch-grid">
            {shownProducts.map((product) => (
              <WatchCard key={getWatchId(product)} product={product} enquireText={t.collection.enquire} />
            ))}
          </div>

          {shownProducts.length === 0 ? (
            <div className="empty-sourcing">
              <h3>{t.collection.noResults}</h3>
              <p>{t.collection.sourcingCopy}</p>
              <a className="btn gold" href={`${site.whatsapp}?text=${sourcingMessage}`} target="_blank" rel="noreferrer">
                {t.collection.sourcingButton}
              </a>
            </div>
          ) : null}
        </section>
      </main>
      <Footer t={t} />
    </>
  );
}
