"use client";

import { useEffect, useMemo, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WatchCard from "../../components/WatchCard";
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

function normalizeSearch(value = "") {
  return String(value).toLowerCase().replace(/[^a-z0-9]/g, "");
}

export default function CollectionPage() {
  const { watches, loading } = useWatches();
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const readBrand = () => {
      const brand = new URLSearchParams(window.location.search).get("brand") || "all";
      setFilter(brands.includes(brand) ? brand : "all");
    };

    readBrand();
    window.addEventListener("popstate", readBrand);
    return () => window.removeEventListener("popstate", readBrand);
  }, []);

  function selectBrand(brand) {
    setFilter(brand);
    setQuery("");
    window.history.pushState(null, "", brand === "all" ? "/collection" : `/collection?brand=${brand}`);
  }

  function updateSearch(value) {
    setQuery(value);

    // A typed search always checks the full collection. This prevents a
    // previously selected brand from hiding a valid reference on mobile.
    if (value.trim()) {
      setFilter("all");
      window.history.replaceState(null, "", "/collection");
    }
  }

  const normalizedQuery = normalizeSearch(query);

  const shown = useMemo(() => {
    return watches
      .filter((watch) => filter === "all" || getWatchCategory(watch) === filter)
      .filter((watch) => {
        if (!normalizedQuery) return true;
        return normalizeSearch(`${watch.brand} ${watch.model} ${watch.reference}`).includes(normalizedQuery);
      });
  }, [watches, filter, normalizedQuery]);

  const hasSearch = Boolean(query.trim());
  const filteredBrand = filter !== "all" ? brandLabel(filter) : "";
  const sourcingText = encodeURIComponent(
    `Hello JAD KRONO, I would like help sourcing${filteredBrand ? ` a ${filteredBrand}` : " a watch"}.`
  );

  return (
    <>
      <Header />
      <main id="main-content" className="page-shell collection-page">
        <section className="page-hero">
          <p className="eyebrow">Collection</p>
          <h1>Current collection.</h1>
          <p>{loading ? "Loading collection…" : "Availability changes regularly. Contact us for the latest details."}</p>
        </section>

        <section className="collection-body">
          <div className="collection-tools">
            <label className="search-field">
              <span>Search</span>
              <div className="search-input-wrap">
                <input
                  type="search"
                  inputMode="search"
                  enterKeyHint="search"
                  value={query}
                  onChange={(event) => updateSearch(event.target.value)}
                  placeholder="Search by brand, model or reference"
                  autoComplete="off"
                  aria-label="Search by brand, model or reference"
                />
                {hasSearch ? (
                  <button type="button" className="search-clear" onClick={() => setQuery("")} aria-label="Clear search">
                    Clear
                  </button>
                ) : null}
              </div>
            </label>

            <nav className="brand-filter" aria-label="Filter by brand">
              {brands.map((brand) => (
                <button
                  type="button"
                  key={brand}
                  onClick={() => selectBrand(brand)}
                  className={filter === brand ? "active" : ""}
                >
                  {brandLabel(brand)}
                </button>
              ))}
            </nav>
          </div>

          {!loading && shown.length ? (
            <p className="collection-result-count" aria-live="polite">
              {shown.length} {shown.length === 1 ? "watch" : "watches"}
            </p>
          ) : null}

          <div className="watch-grid">
            {shown.map((watch) => <WatchCard key={getWatchId(watch)} product={watch} />)}
          </div>

          {!shown.length && !loading ? (
            <div className="empty-state">
              {hasSearch ? (
                <>
                  <h2>No matches found.</h2>
                  <p>Try another brand, model or reference.</p>
                  <button className="btn outline" type="button" onClick={() => setQuery("")}>Clear Search</button>
                </>
              ) : filteredBrand ? (
                <>
                  <h2>No {filteredBrand} watches are currently available.</h2>
                  <p>Contact us if you would like help sourcing one.</p>
                  <a className="btn gold" href={`${site.whatsapp}?text=${sourcingText}`} target="_blank" rel="noreferrer">Request Sourcing</a>
                </>
              ) : (
                <>
                  <h2>No watches are currently listed.</h2>
                  <p>Contact us for the latest availability.</p>
                  <a className="btn gold" href={site.whatsapp} target="_blank" rel="noreferrer">Contact JAD KRONO</a>
                </>
              )}
            </div>
          ) : null}
        </section>
      </main>
      <Footer />
    </>
  );
}
