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
            <h1>Contact JAD KRONO.</h1>
            <p>
              For current availability, sourcing, sales, consignment, trades or
              appointments, contact us directly.
            </p>
            <a className="btn gold" href={site.whatsapp} target="_blank" rel="noreferrer">
              Enquire via WhatsApp
            </a>
          </div>

          <div className="contact-cards">
            <article className="contact-card enquiry">
              <p className="eyebrow">Enquiry</p>
              <h2>Tell us what you’re looking for.</h2>
              <p>
                Include the brand, reference, preferred year, condition and budget,
                where relevant.
              </p>
              <div className="button-row">
                <a className="btn gold" href={site.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
                <a className="btn outline" href={`mailto:${site.email}`}>Email</a>
              </div>
            </article>

            <article className="contact-card">
              <p className="eyebrow">Visit</p>
              <h3>Singapore</h3>
              <p>Viewings are arranged by appointment.</p>
              <a className="text-link" href={site.googleMaps} target="_blank" rel="noreferrer">Google Maps</a>
            </article>

            <article className="contact-card">
              <p className="eyebrow">Follow</p>
              <h3>JAD KRONO</h3>
              <p>Latest arrivals and updates.</p>
              <div className="inline-links">
                <a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>
                <a href={site.facebook} target="_blank" rel="noreferrer">Facebook</a>
              </div>
            </article>
          </div>
        </section>

        <section className="sourcing-band">
          <div>
            <p className="eyebrow">Sourcing</p>
            <h2>Looking for a specific reference?</h2>
            <p>Tell us the reference, preferred year, condition and budget.</p>
          </div>
          <a
            className="btn outline"
            href={`${site.whatsapp}?text=Hello%20JAD%20KRONO%2C%20I%20would%20like%20to%20request%20sourcing.`}
            target="_blank"
            rel="noreferrer"
          >
            Request Sourcing
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
