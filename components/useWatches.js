"use client";

import { useEffect, useState } from "react";
import fallbackWatches from "../data/watches.json";
import { supabase, isSupabaseConfigured } from "../lib/supabaseClient";

export function useWatches() {
  const [watches, setWatches] = useState(fallbackWatches);
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

      if (!error && data?.length) {
        const normalized = data.map((watch) => ({
          ...watch,
          gallery: watch.gallery || [],
          specs: watch.specs || {
            case: "",
            movement: "",
            material: "",
            bracelet: ""
          }
        }));
        setWatches(normalized);
      }

      setLoading(false);
    }

    loadWatches();
  }, []);

  return { watches, loading };
}
