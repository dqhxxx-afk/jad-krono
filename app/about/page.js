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
        <section className="page-hero about-final">
          <p className="eyebrow">About</p>
          <h1>A private dealer for collectors.</h1>
          <p>Based in Singapore. Built on discretion, authenticity and long-term relationships with collectors.</p>
        </section>

        <section className="about-section about-final-grid">
          <div>
            <p className="eyebrow">Our Approach</p>
            <h2>Carefully selected, personally handled.</h2>
          </div>
          <div>
            <p>JAD KRONO offers modern and collectible luxury timepieces through private appointments, trusted sourcing networks and direct personal service.</p>
            <p>We focus on clear descriptions, original photography and a discreet experience from enquiry to delivery.</p>
          </div>
        </section>
      </main>
      <Footer t={t} />
    </>
  );
}
