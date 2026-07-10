"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useLanguage } from "../../components/useLanguage";
import { site } from "../../data/site";

export default function ContactPage() {
  const { t } = useLanguage();
  const mapsLink = site.googleMaps || site.maps || "https://maps.app.goo.gl/CGgdPNjevd54Gdrm9?g_st=ic";
  const facebookLink = site.facebook || "https://www.facebook.com/share/1BjRy9MPKg/?mibextid=wwXIfr";

  return (
    <>
      <Header t={t} />
      <main className="page-shell contact-page-v210">
        <section className="contact-v210">
          <div className="contact-v210-copy">
            <p className="eyebrow">Contact</p>
            <h1>Private enquiries.</h1>
            <p>For buying, selling, sourcing, consignment or private viewing appointments, contact JAD KRONO directly.</p>
            <a className="btn gold" href={site.whatsapp} target="_blank" rel="noreferrer">Enquire via WhatsApp</a>
          </div>

          <div className="contact-v210-grid">
            <article className="contact-v210-card enquiry">
              <span>Enquiry</span>
              <h2>Let’s discuss your next timepiece.</h2>
              <p>Speak directly with JAD KRONO for available inventory, private sourcing, selling, consignment or trade enquiries.</p>
              <div className="contact-v210-actions">
                <a className="btn gold" href={site.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
                <a className="btn ghost" href="mailto:contact@jadkrono.com">Email</a>
              </div>
            </article>

            <article className="contact-v210-card">
              <span>Visit</span>
              <h3>Singapore</h3>
              <p>Private viewings by appointment only.</p>
              <a href={mapsLink} target="_blank" rel="noreferrer">Google Maps</a>
            </article>

            <article className="contact-v210-card follow">
              <span>Follow</span>
              <h3>JAD KRONO</h3>
              <p>Selected arrivals and updates.</p>
              <div className="inline-links">
                <a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>
                <a href={facebookLink} target="_blank" rel="noreferrer">Facebook</a>
              </div>
            </article>
          </div>
        </section>

        <section className="sourcing-v210-band">
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
