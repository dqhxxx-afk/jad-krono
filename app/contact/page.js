"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useLanguage } from "../../components/useLanguage";
import { socials } from "../../data/products";

export default function ContactPage() {
  const { lang, setLang, t } = useLanguage();

  return (
    <>
      <Header lang={lang} setLang={setLang} t={t} />
      <main className="page-shell">
        <section className="page-hero">
          <p className="eyebrow">{t.appointment.eyebrow}</p>
          <h1>{t.appointment.title}</h1>
          <p>{t.appointment.copy}</p>
        </section>
        <section className="contact-section page-contact">
          <div className="contact-panel">
            <a href={socials.whatsapp} target="_blank">WhatsApp: +65 8699 6868</a>
            <a href={`mailto:${socials.email}`}>{socials.email}</a>
            <a href={socials.instagram} target="_blank">Instagram</a>
            <a href={socials.facebook} target="_blank">Facebook</a>
            <span>Singapore • Appointment Only</span>
            <div className="map-placeholder">Singapore Private Showroom</div>
            <a className="btn primary" href={`${socials.whatsapp}?text=Hello%20JAD%20KRONO%2C%20I%20would%20like%20to%20book%20a%20private%20viewing.`} target="_blank">
              {t.appointment.button}
            </a>
          </div>
        </section>
      </main>
      <Footer t={t} />
    </>
  );
}
