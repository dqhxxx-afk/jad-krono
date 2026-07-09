"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useLanguage } from "../../components/useLanguage";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      <Header t={t} />
      <main className="page-shell">
        <section className="page-hero">
          <p className="eyebrow">{t.about.eyebrow}</p>
          <h1>{t.about.title}</h1>
          <p>{t.about.copy}</p>
        </section>
      </main>
      <Footer t={t} />
    </>
  );
}
