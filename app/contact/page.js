"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useLanguage } from "../../components/useLanguage";
import { site } from "../../data/site";

export default function ContactPage() {
  const { t } = useLanguage();
  const mapsLink = site.googleMaps || "https://maps.app.goo.gl/CGgdPNjevd54Gdrm9?g_st=ic";
  const sourcingMessage = encodeURIComponent("Hello JAD KRONO, I would like to request private sourcing.");

  return (
    <>
      <Header t={t} />
      <main className="contact-v26-page">
        <section className="contact-v26-intro">
          <div className="contact-v26-copy">
            <p className="eyebrow">Contact</p>
            <h1>Private enquiries.</h1>
            <p>For buying, selling, sourcing, consignment or private viewing appointments, contact JAD KRONO directly.</p>
            <a className="btn gold" href={`${site.whatsapp}?text=Hello%20JAD%20KRONO%2C%20I%20would%20like%20to%20make%20a%20private%20enquiry.`} target="_blank" rel="noreferrer">Enquire via WhatsApp</a>
          </div>

          <div className="contact-v26-directory" aria-label="Contact options">
            <article>
              <span>Enquiry</span>
              <h2>WhatsApp</h2>
              <p>Speak directly with JAD KRONO for inventory, sourcing, selling, consignment or trade enquiries.</p>
              <div className="contact-v26-links">
                <a href={site.whatsapp} target="_blank" rel="noreferrer">Open WhatsApp</a>
                <a href="mailto:contact@jadkrono.com">Email</a>
              </div>
            </article>

            <article>
              <span>Visit</span>
              <h2>Singapore</h2>
              <p>Private viewings by appointment only. Location is shared with confirmed appointments.</p>
              <div className="contact-v26-links">
                <a href={mapsLink} target="_blank" rel="noreferrer">Google Maps</a>
              </div>
            </article>

            <article>
              <span>Follow</span>
              <h2>JAD KRONO</h2>
              <p>Selected arrivals and updates, presented quietly.</p>
              <div className="contact-v26-links">
                <a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>
                <a href={site.facebook} target="_blank" rel="noreferrer">Facebook</a>
              </div>
            </article>
          </div>
        </section>

        <section className="contact-v26-sourcing">
          <div>
            <p className="eyebrow">Private Sourcing</p>
            <h2>Looking for a specific reference?</h2>
            <p>We source carefully selected modern and collectible timepieces through trusted international networks.</p>
          </div>
          <a className="btn outline" href={`${site.whatsapp}?text=${sourcingMessage}`} target="_blank" rel="noreferrer">Request Private Sourcing</a>
        </section>
      </main>
      <Footer t={t} />
    </>
  );
}
