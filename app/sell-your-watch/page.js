"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useLanguage } from "../../components/useLanguage";
import { site } from "../../data/site";

export default function SellPage() {
  const { t } = useLanguage();

  return (
    <>
      <Header t={t} />
      <main className="page-shell">
        <section className="page-hero">
          <p className="eyebrow">Sell</p>
          <h1>Sell Your Watch</h1>
          <p>Fair market valuation with complete discretion. Share your watch details and JAD KRONO will respond privately.</p>
          <a className="btn gold" href={site.whatsapp} target="_blank">Request a Valuation</a>
        </section>
      </main>
      <Footer t={t} />
    </>
  );
}
