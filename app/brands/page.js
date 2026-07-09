"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useLanguage } from "../../components/useLanguage";
import { brands } from "../../data/products";

export default function BrandsPage() {
  const { lang, setLang, t } = useLanguage();

  return (
    <>
      <Header lang={lang} setLang={setLang} t={t} />
      <main className="page-shell">
        <section className="page-hero">
          <p className="eyebrow">{t.brands.eyebrow}</p>
          <h1>{t.brands.title}</h1>
        </section>
        <section className="brand-page-grid">
          {brands.map((brand) => (
            <article className="brand-card" key={brand.name}>
              <h2>{brand.name}</h2>
              <p>{brand.copy[lang]}</p>
              <a href="/collection">{t.collection.enquire}</a>
            </article>
          ))}
        </section>
      </main>
      <Footer t={t} />
    </>
  );
}
