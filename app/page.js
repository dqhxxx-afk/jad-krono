"use client";

import { useMemo, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WatchCard from "../components/WatchCard";
import SocialContactPanel from "../components/SocialContactPanel";
import { useLanguage } from "../components/useLanguage";
import { useWatches } from "../components/useWatches";
import { services, brandStories, site } from "../data/site";

export default function Home() {
  const { t } = useLanguage();
  const { watches } = useWatches();
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");

  const shownProducts = useMemo(() => {
    return watches
      .filter((p) => p.featured)
      .filter((p) => filter === "all" || p.category === filter)
      .filter((p) => `${p.brand} ${p.model} ${p.reference}`.toLowerCase().includes(query.toLowerCase()));
  }, [watches, filter, query]);

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
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1>{t.hero.title}</h1>
            <p>{t.hero.copy}</p>
            <a href="/collection" className="btn gold">{t.hero.primary}</a>
          </div>
        </section>

        <section className="ticker">
          {["Rolex", "Patek Philippe", "Audemars Piguet", "Richard Mille", "Tudor", "Hublot"].map((brand) => (
            <span key={brand}>{brand}</span>
          ))}
        </section>

        <section className="collection-section">
          <div className="section-heading">
            <p className="eyebrow">{t.collection.eyebrow}</p>
            <h2>{t.collection.title}</h2>
            <p>{t.collection.copy}</p>
          </div>

          <div className="collection-toolbar">
            <div className="filters">
              {["all", "rolex", "patek", "ap", "rm"].map((item) => (
                <button key={item} onClick={() => setFilter(item)} className={filter === item ? "active" : ""}>
                  {item === "all" ? "All" : item === "patek" ? "Patek Philippe" : item === "ap" ? "AP" : item === "rm" ? "RM" : item.toUpperCase()}
                </button>
              ))}
            </div>
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t.collection.search} />
          </div>

          <div className="watch-grid">
            {shownProducts.map((product, index) => (
              <WatchCard key={product.id} product={product} enquireText={t.collection.enquire} large={index === 0} />
            ))}
          </div>
        </section>

        <section className="services-section">
          <div className="section-heading small">
            <p className="eyebrow">{t.services.eyebrow}</p>
            <h2>{t.services.title}</h2>
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

        <section className="brand-section">
          <div className="brand-grid">
            {brandStories.map((brand) => (
              <article key={brand.name}>
                <h3>{brand.name}</h3>
                <p>{brand.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section">
          <div>
            <p className="eyebrow">{t.about.eyebrow}</p>
            <h2>{t.about.title}</h2>
          </div>
          <p>{t.about.copy}</p>
        </section>

        <section className="contact-section">
          <div>
            <p className="eyebrow">{t.contact.eyebrow}</p>
            <h2>{t.contact.title}</h2>
            <p>{t.contact.copy}</p>
          </div>
          <SocialContactPanel t={t} />
        </section>
      </main>

      <Footer t={t} />
    </>
  );
}
