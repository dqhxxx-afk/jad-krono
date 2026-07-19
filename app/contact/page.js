"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { site } from "../../data/site";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="page-shell contact-page">
        <section className="contact-layout">
          <div className="contact-intro">
            <p className="eyebrow">Contact</p>
            <h1>Get in touch.</h1>
            <p>
              For enquiries about listed watches, sourcing, selling, consignment, trades or viewing appointments.
            </p>
            <a className="btn gold" href={site.whatsapp} target="_blank" rel="noreferrer">
              Enquire via WhatsApp
            </a>
          </div>

          <div className="contact-cards">
            <article className="contact-card enquiry">
              <p className="eyebrow">Enquiry</p>
              <h2>Send us the details.</h2>
              <p>
                For a listed watch, include the model or reference. For sourcing, add the preferred year, condition and budget.
              </p>
              <div className="button-row">
                <a className="btn gold" href={site.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
              </div>
            </article>

            <article className="contact-card">
              <p className="eyebrow">Visit</p>
              <h3>Singapore</h3>
              <p>Viewings are by appointment.</p>
              <a className="text-link" href={site.googleMaps} target="_blank" rel="noreferrer">Google Maps</a>
            </article>

            <article className="contact-card">
              <p className="eyebrow">Follow</p>
              <h3>Instagram &amp; Facebook</h3>
              <p>New listings and occasional updates.</p>
              <div className="inline-links">
                <a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>
                <a href={site.facebook} target="_blank" rel="noreferrer">Facebook</a>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
