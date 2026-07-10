"use client";

import { useEffect, useMemo, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WatchCard from "../../components/WatchCard";
import { useWatches } from "../../components/useWatches";
import { getWatchCategory, getWatchId, brandLabel } from "../../lib/watchUtils";
import { site } from "../../data/site";

const brands = ["all","rolex","patek","ap","cartier","tudor","iwc","hublot","breitling","franck-muller","chopard","sinn"];

export default function CollectionPage() {
  const { watches, loading } = useWatches();
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const read = () => setFilter(new URLSearchParams(window.location.search).get("brand") || "all");
    read(); window.addEventListener("popstate", read); return () => window.removeEventListener("popstate", read);
  }, []);

  function selectBrand(brand) {
    setFilter(brand);
    window.history.pushState(null, "", brand === "all" ? "/collection" : `/collection?brand=${brand}`);
  }

  const shown = useMemo(() => watches
    .filter((watch) => filter === "all" || getWatchCategory(watch) === filter)
    .filter((watch) => `${watch.brand} ${watch.model} ${watch.reference}`.toLowerCase().includes(query.trim().toLowerCase())),
  [watches, filter, query]);

  const sourcingText = encodeURIComponent(`Hello JAD KRONO, I would like to request sourcing${filter !== "all" ? ` for ${brandLabel(filter)}` : ""}.`);

  return (
    <><Header /><main id="main-content" className="page-shell collection-page">
      <section className="page-hero"><p className="eyebrow">Collection</p><h1>Selected references.</h1><p>{loading ? "Loading collection…" : "Inventory changes regularly. Please contact us for current availability."}</p></section>
      <section className="collection-body">
        <div className="collection-tools">
          <label className="search-field"><span>Search</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by brand, model or reference" /></label>
          <nav className="brand-filter" aria-label="Filter by brand">
            {brands.map((brand) => <button type="button" key={brand} onClick={() => selectBrand(brand)} className={filter === brand ? "active" : ""}>{brandLabel(brand)}</button>)}
          </nav>
        </div>
        <div className="watch-grid">{shown.map((watch) => <WatchCard key={getWatchId(watch)} product={watch} />)}</div>
        {!shown.length && !loading ? <div className="empty-state"><h2>No watches are currently listed for this brand.</h2><p>Private sourcing is available on request.</p><a className="btn gold" href={`${site.whatsapp}?text=${sourcingText}`} target="_blank" rel="noreferrer">Request Sourcing</a></div> : null}
      </section>
    </main><Footer /></>
  );
}
