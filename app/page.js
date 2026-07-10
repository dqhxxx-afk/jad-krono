"use client";

import { useMemo } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WatchCard from "../components/WatchCard";
import { useLanguage } from "../components/useLanguage";
import { useWatches } from "../components/useWatches";
import { services, site } from "../data/site";
import { getWatchId } from "../lib/watchUtils";

export default function Home() {
  const { t } = useLanguage();
  const { watches } = useWatches();

  const shownProducts = useMemo(() => watches.filter((p) => p.featured).slice(0, 6), [watches]);

  return (
    <>
      <a className="wa-float" href={`${site.whatsapp}?text=Hello%20JAD%20KRONO%2C%20I%20would%20like%20to%20make%20a%20private%20enquiry.`} target="_blank">
        WhatsApp
      </a>

      <Header t={t} />

      <main>
        <section className="hero">
          <div className="hero-orbit" />
          <div className="hero-content">
            <h1>Carefully selected. Quietly sourced.</h1>
            <p>Modern and collectible luxury timepieces, carefully sourced and privately offered. Viewings by appointment in Singapore.</p>
            <a href="/collection" className="btn gold">View Collection</a><p className="hero-note">{t.hero.note}</p>
          </div>
        </section>


        <section className="collection-section">
          <div className="section-heading">
            <p className="eyebrow">{t.collection.eyebrow}</p>
            <h2>{t.collection.title}</h2>
            <p>{t.collection.copy}</p>
          </div>
          <div className="watch-grid final-watch-grid">
            {shownProducts.map((product, index) => (
              <WatchCard key={getWatchId(product)} product={product} enquireText={t.collection.enquire} />
            ))}
          </div>
        </section>

        <section className="sourcing-cta-section">
          <div>
            <p className="eyebrow">Private Sourcing</p>
            <h2>Looking for a specific reference?</h2>
            <p>We source carefully selected modern and collectible timepieces through our trusted international network.</p>
            <a className="btn gold" href={`${site.whatsapp}?text=Hello%20JAD%20KRONO%2C%20I%20would%20like%20to%20request%20private%20sourcing.`} target="_blank">Request Private Sourcing</a>
          </div>
        </section>

        <section className="services-section">
          <div className="section-heading small">
            <p className="eyebrow">{t.services.eyebrow}</p>
            <h2>Private services for collectors.</h2>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section">
          <div>
            <p className="eyebrow">{t.about.eyebrow}</p>
            <h2>{t.about.title}</h2>
          </div>
          <p>Based in Singapore. Built on discretion, authenticity and long-term relationships with collectors.</p>
        </section>

        <section className="home-contact-v210">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Private enquiries.</h2>
            <p>For buying, selling, sourcing, consignment or private viewing appointments, contact JAD KRONO directly.</p>
          </div>
          <div className="home-contact-v210-links">
            <a href={site.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
            <a href="mailto:contact@jadkrono.com">Email</a>
            <a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>
            <a href={site.facebook} target="_blank" rel="noreferrer">Facebook</a>
            <a href={site.googleMaps} target="_blank" rel="noreferrer">Google Maps</a>
          </div>
        </section>
      </main>

      <Footer t={t} />
    </>
  );
}
