"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { site } from "../../data/site";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="page-shell legal-page">
        <section className="page-hero">
          <p className="eyebrow">Privacy Policy</p>
          <h1>Privacy Policy.</h1>
          <p>This policy explains how JAD KRONO handles information submitted through the website and enquiry channels.</p>
        <small className="legal-updated">Last updated: 11 July 2026</small>
        </section>

        <section className="legal-copy">
          <h2>Information collected</h2>
          <p>
            We may collect information you provide voluntarily, including your name,
            contact details and watch information shared through WhatsApp, email or the website.
          </p>

          <h2>How information is used</h2>
          <p>
            We use this information to respond to enquiries, arrange appointments,
            discuss transactions and provide requested services.
          </p>

          <h2>Sharing</h2>
          <p>
            We do not sell or rent personal information. Information may be shared
            where required by law or where needed to complete an agreed transaction.
          </p>

          <h2>Retention</h2>
          <p>
            Information is kept only for as long as it is reasonably needed for the
            purpose for which it was collected or to meet legal and business requirements.
          </p>

          <h2>Access and correction</h2>
          <p>
            You may contact us to request access to, or correction of, personal
            information held by JAD KRONO.
          </p>

          <h2>Cookies and analytics</h2>
          <p>
            The website may use essential cookies and basic analytics to maintain
            functionality and understand general site usage.
          </p>

          <h2>Contact</h2>
          <p>
            For privacy enquiries, contact <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
