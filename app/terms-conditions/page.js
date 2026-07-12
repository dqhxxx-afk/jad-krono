"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function TermsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="page-shell legal-page">
        <section className="page-hero">
          <p className="eyebrow">Terms & Conditions</p>
          <h1>Terms & Conditions.</h1>
        <small className="legal-updated">Last updated: 11 July 2026</small>
        </section>

        <section className="legal-copy">
          <h2>Availability</h2>
          <p>
            Watches are subject to prior sale, reservation or withdrawal. The website
            may not reflect the latest inventory changes.
          </p>

          <h2>Pricing</h2>
          <p>
            Prices and product information may change without notice. A transaction
            is confirmed only after both parties agree the final terms.
          </p>

          <h2>Product information</h2>
          <p>
            Descriptions, specifications and photographs are provided in good faith.
            Please request any additional information needed before purchase.
          </p>

          <h2>Transactions</h2>
          <p>
            Payment, collection, delivery and any other transaction terms will be
            confirmed in writing before completion.
          </p>

          <h2>Viewings</h2>
          <p>Viewings are arranged by appointment in Singapore.</p>

          <h2>Independent dealer</h2>
          <p>
            JAD KRONO is an independent watch dealer and is not affiliated with or
            endorsed by any watch manufacturer. Brand names, model names and trademarks
            are used for identification only.
          </p>

          <h2>Governing law</h2>
          <p>These terms are governed by the laws of Singapore.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
