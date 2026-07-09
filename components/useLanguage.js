"use client";

import { useEffect, useState } from "react";
import { translations } from "../data/translations";

export function useLanguage() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const saved = localStorage.getItem("jadKronoLanguage");
    if (saved === "en" || saved === "vi") setLang(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("jadKronoLanguage", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  return { lang, setLang, t: translations[lang] };
}
