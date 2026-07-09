"use client";

import { translations } from "../data/translations";

export function useLanguage() {
  const lang = "en";
  const setLang = () => {};
  const t = translations.en;

  return { lang, setLang, t };
}
