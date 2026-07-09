"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useLanguage } from "../../components/useLanguage";
import { site } from "../../data/site";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <>
      <Header t={t} />
      <main className="page-shell contact-page-polish">
        <section className="page-hero contact-hero-polish">
          <p className="eyebrow">Contact</p>
          <h1>Private enquiries.</h1>
          <p>For buying, selling, sourcing, consignment or private viewing appointments, contact JAD KRONO directly.</p>
        </section>

        <section className="contact-polish-grid">
          <a className="contact-polish-card primary" href={site.whatsapp} target="_blank" rel="noreferrer">
            <span>Private Enquiry</span>
            <strong>WhatsApp</strong>
            <p>Speak directly with JAD KRONO.</p>
          </a>

          <a className="contact-polish-card" href="mailto:contact@jadkrono.com">
            <span>Email</span>
            <strong>contact@jadkrono.com</strong>
            <p>For formal enquiries and documentation.</p>
          </a>

          <a className="contact-polish-card" href={site.maps} target="_blank" rel="noreferrer">
            <span>Singapore</span>
            <strong>Private Viewings by Appointment</strong>
            <p>Location shared with confirmed appointments.</p>
          </a>

          <a className="contact-polish-card compact" href={site.instagram} target="_blank" rel="noreferrer">
            <span>Instagram</span>
            <strong>@jadkrono</strong>
          </a>

          <a className="contact-polish-card compact" href={site.facebook} target="_blank" rel="noreferrer">
            <span>Facebook</span>
            <strong>JAD KRONO Page</strong>
          </a>
        </section>
      </main>
      <Footer t={t} />
    </>
  );
}
