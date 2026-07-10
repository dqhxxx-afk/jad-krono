"use client";

import { useMemo, useState } from "react";
import { WatchCard } from "@/components/WatchCard";
import { brands, watches } from "@/data/watches";

export function CollectionFilter() {
  const [activeBrand, setActiveBrand] = useState<(typeof brands)[number]>("All watches");

  const filteredWatches = useMemo(() => {
    if (activeBrand === "All watches") return watches;
    return watches.filter((watch) => watch.brand === activeBrand);
  }, [activeBrand]);

  return (
    <div>
      <div className="collection-filter" role="group" aria-label="Filter watches by brand">
        {brands.map((brand) => (
          <button
            key={brand}
            type="button"
            className={activeBrand === brand ? "is-active" : undefined}
            aria-pressed={activeBrand === brand}
            onClick={() => setActiveBrand(brand)}
          >
            {brand}
          </button>
        ))}
      </div>

      <div className="collection-count" aria-live="polite">
        <span>{String(filteredWatches.length).padStart(2, "0")}</span>
        {activeBrand === "All watches" ? "references" : `${activeBrand} references`}
      </div>

      <div className="watch-grid">
        {filteredWatches.map((watch) => (
          <WatchCard key={watch.slug} watch={watch} />
        ))}
      </div>
    </div>
  );
}
