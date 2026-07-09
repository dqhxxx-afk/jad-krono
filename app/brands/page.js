"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useLanguage } from "../../components/useLanguage";
import { brandStories } from "../../data/site";

export default function BrandsPage() {
  const { t } = useLanguage();

  return (
    <>
      <Header t={t} />
      <main className="page-shell">
        <section className="page-hero">
          <p className="eyebrow">Brands</p>
          <h1>Selected maisons.</h1>
        </section>

        <section className="brand-section compact">
          <div className="brand-grid">
            {brandStories.map((brand) => (
              <article key={brand.name}>
                <h3>{brand.name}</h3>
                <p>{brand.copy}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer t={t} />
    </>
  );
}
