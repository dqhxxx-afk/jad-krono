"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useLanguage } from "../../components/useLanguage";
import { site } from "../../data/site";

export default function ContactPage() {
  const { t } = useLanguage();
  const mapsLink = site.googleMaps || site.maps || "https://maps.app.goo.gl/CGgdPNjevd54Gdrm9?g_st=ic";

  return (
    <>
      <Header t={t} />
      <main className="page-shell contact-page-final">
        <section className="contact-final">
          <div className="contact-final-copy">
            <p className="eyebrow">Contact</p>
            <h1>Private enquiries.</h1>
            <p>For buying, selling, sourcing, consignment or private viewing appointments, contact JAD KRONO directly.</p>
            <a className="btn gold" href={site.whatsapp} target="_blank" rel="noreferrer">Enquire via WhatsApp</a>
          </div>

          <div className="contact-final-panel">
            <a href={site.whatsapp} target="_blank" rel="noreferrer">
              <span>Private Enquiry</span>
              <strong>WhatsApp</strong>
            </a>

            <a href="mailto:contact@jadkrono.com">
              <span>Email</span>
              <strong>contact@jadkrono.com</strong>
            </a>

            <a href={mapsLink} target="_blank" rel="noreferrer">
              <span>Singapore</span>
              <strong>Private Viewings by Appointment</strong>
            </a>

            <div className="contact-final-socials">
              <a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>
              <a href={site.facebook} target="_blank" rel="noreferrer">Facebook</a>
            </div>
          </div>
        </section>

        <section className="final-sourcing-band">
          <div>
            <p className="eyebrow">Private Sourcing</p>
            <h2>Looking for a specific reference?</h2>
            <p>We source carefully selected modern and collectible timepieces through trusted international networks.</p>
          </div>
          <a className="btn outline" href={`${site.whatsapp}?text=Hello%20JAD%20KRONO%2C%20I%20would%20like%20to%20request%20private%20sourcing.`} target="_blank" rel="noreferrer">Request Private Sourcing</a>
        </section>
      </main>
      <Footer t={t} />
    </>
  );
}
