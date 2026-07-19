"use client";

import { useMemo } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WatchCard from "../components/WatchCard";
import { useWatches } from "../components/useWatches";
import { services, site } from "../data/site";
import { getWatchId } from "../lib/watchUtils";

function byCardDateDesc(first, second) {
  return String(second.cardDate || "").localeCompare(String(first.cardDate || ""));
}

export default function Home() {
  const { watches } = useWatches();
  const featured = useMemo(
    () => [...watches].sort(byCardDateDesc).slice(0, 6),
    [watches]
  );

  return (
    <>
      <a
        className="wa-float"
        href={`${site.whatsapp}?text=Hello%20JAD%20KRONO%2C%20I%20would%20like%20to%20make%20an%20enquiry.`}
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>

      <Header />

      <main id="main-content">
        <section className="hero">
          <div className="hero-orbit" aria-hidden="true" />
          <div className="hero-content">
            <h1>Modern and collectible timepieces.</h1>
            <p>Viewings by appointment.</p>
            <a href="/collection" className="btn gold">View Collection</a>
          </div>
        </section>

        <section className="section collection-preview">
          <div className="section-heading">
            <p className="eyebrow">Collection</p>
            <h2>Latest listings.</h2>
            <p>Inventory changes regularly. Contact us to confirm availability.</p>
          </div>

          <div className="watch-grid">
            {featured.map((watch) => (
              <WatchCard key={getWatchId(watch)} product={watch} />
            ))}
          </div>

          <a className="text-link section-link" href="/collection">View all watches</a>
        </section>

        <section className="sourcing-band">
          <div>
            <p className="eyebrow">Sourcing</p>
            <h2>Looking for a specific watch?</h2>
            <p>Send us the reference, preferred year, condition and budget.</p>
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

        <section className="section services-home">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2>Buying, selling and sourcing.</h2>
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

        <section className="section about-home">
          <div>
            <p className="eyebrow">About</p>
            <h2>Based in Singapore.</h2>
          </div>
          <p>We buy, sell and source modern and collectible watches.</p>
        </section>

        <section className="section contact-home">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Get in touch.</h2>
            <p>Message us about a listed watch, sourcing or a viewing appointment.</p>
          </div>

          <div className="contact-groups">
            <div className="contact-group">
              <span>Enquiry</span>
              <div>
                <a href={site.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
              </div>
            </div>

            <div className="contact-group">
              <span>Follow</span>
              <div>
                <a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>
                <a href={site.facebook} target="_blank" rel="noreferrer">Facebook</a>
              </div>
            </div>

            <div className="contact-group">
              <span>Visit</span>
              <div>
                <a href={site.googleMaps} target="_blank" rel="noreferrer">Google Maps</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
