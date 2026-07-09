"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useLanguage } from "../../components/useLanguage";
import { insights } from "../../data/products";

export default function InsightsPage() {
  const { lang, setLang, t } = useLanguage();

  return (
    <>
      <Header lang={lang} setLang={setLang} t={t} />
      <main className="page-shell">
        <section className="page-hero">
          <p className="eyebrow">{t.insight.eyebrow}</p>
          <h1>{t.insight.title}</h1>
        </section>
        <section className="insight-grid page-insights">
          {insights.map((insight) => (
            <article className="insight-card" key={insight.tag}>
              <span>{insight.tag}</span>
              <h2>{insight.title[lang]}</h2>
              <p>{insight.copy[lang]}</p>
            </article>
          ))}
        </section>
      </main>
      <Footer t={t} />
    </>
  );
}
