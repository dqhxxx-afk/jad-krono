"use client";

import { useEffect, useState } from "react";
import fallbackWatches from "../data/watches.json";
import { supabase, isSupabaseConfigured } from "../lib/supabaseClient";
import { getWatchCategory, getWatchId } from "../lib/watchUtils";

function normalizeWatch(watch) {
  return {
    ...watch,
    id: getWatchId(watch),
    category: getWatchCategory(watch),
    gallery: watch.gallery || [],
    specs: watch.specs || { case: "", movement: "", material: "", bracelet: "" }
  };
}

export function useWatches() {
  const fallback = fallbackWatches.map(normalizeWatch);
  const [watches, setWatches] = useState(fallback);
  const [loading, setLoading] = useState(isSupabaseConfigured);

  useEffect(() => {
    async function loadWatches() {
      if (!supabase) {
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("watches")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && Array.isArray(data) && data.length > 0) {
        setWatches(data.map(normalizeWatch));
      } else {
        setWatches(fallback);
      }

      setLoading(false);
    }

    loadWatches();
  }, []);

  return { watches, loading };
}
