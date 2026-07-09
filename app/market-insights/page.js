"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useLanguage } from "../../components/useLanguage";

export default function InsightsPage() {
  const { t } = useLanguage();

  return (
    <>
      <Header t={t} />
      <main className="page-shell">
        <section className="page-hero">
          <p className="eyebrow">Market Notes</p>
          <h1>Discretion protects value.</h1>
          <p>Condition, completeness and market timing matter. JAD KRONO advises selectively and privately.</p>
        </section>
      </main>
      <Footer t={t} />
    </>
  );
}
