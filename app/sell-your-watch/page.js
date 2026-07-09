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
          <h1>Private valuation.</h1>
          <p>Send the brand, reference, condition and photos. JAD KRONO will respond discreetly.</p>
          <a className="btn gold" href={site.whatsapp} target="_blank">Start on WhatsApp</a>
        </section>
      </main>
      <Footer t={t} />
    </>
  );
}
