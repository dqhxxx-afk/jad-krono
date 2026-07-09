"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useLanguage } from "../../components/useLanguage";

export default function InventoryGuidePage() {
  const { t } = useLanguage();

  return (
    <>
      <Header t={t} />
      <main className="page-shell">
        <section className="page-hero">
          <p className="eyebrow">Inventory Guide</p>
          <h1>Add watches without touching code.</h1>
          <p>Upload images to public/products, then edit data/watches.json.</p>
        </section>

        <section className="guide-section">
          <article>
            <span>01</span>
            <h3>Upload Images</h3>
            <p>Put all watch photos inside public/products.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Edit watches.json</h3>
            <p>Add brand, model, reference, price, status and image path.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Commit</h3>
            <p>GitHub saves the change and Vercel deploys automatically.</p>
          </article>
        </section>
      </main>
      <Footer t={t} />
    </>
  );
}
