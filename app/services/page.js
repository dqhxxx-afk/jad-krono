"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useLanguage } from "../../components/useLanguage";

export default function ServicesPage() {
  const { lang, setLang, t } = useLanguage();

  return (
    <>
      <Header lang={lang} setLang={setLang} t={t} />
      <main className="page-shell">
        <section className="page-hero">
          <p className="eyebrow">{t.services.eyebrow}</p>
          <h1>{t.services.title}</h1>
        </section>
        <section className="service-page-grid">
          {t.services.items.map(([title, copy]) => (
            <article key={title} className="service-card">
              <h2>{title}</h2>
              <p>{copy}</p>
            </article>
          ))}
        </section>
      </main>
      <Footer t={t} />
    </>
  );
}
