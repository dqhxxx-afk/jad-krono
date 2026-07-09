"use client";

import { useMemo, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { useLanguage } from "../components/useLanguage";
import { products, brands, insights, socials } from "../data/products";

export default function Home() {
  const { lang, setLang, t } = useLanguage();
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");

  const featuredProducts = useMemo(() => {
    return products
      .filter((p) => p.featured)
      .filter((p) => filter === "all" || p.category === filter)
      .filter((p) => `${p.brand} ${p.model} ${p.reference}`.toLowerCase().includes(query.toLowerCase()));
  }, [filter, query]);

  return (
    <>
      <a className="floating-whatsapp" href={`${socials.whatsapp}?text=Hello%20JAD%20KRONO%2C%20I%20would%20like%20to%20enquire%20about%20a%20watch.`} target="_blank">WhatsApp</a>
      <Header lang={lang} setLang={setLang} t={t} />

      <main>
        <section className="hero">
          <div className="hero-bg" />
          <div className="hero-inner">
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1>{t.hero.title}</h1>
            <p className="hero-copy">{t.hero.copy}</p>
            <div className="hero-actions">
              <a href="/collection" className="btn primary">{t.hero.primary}</a>
              <a href="/sell-your-watch" className="btn secondary">{t.hero.secondary}</a>
            </div>
          </div>

          <div className="hero-stats">
            <div><strong>100%</strong><span>{t.stats.authentic}</span></div>
            <div><strong>SG</strong><span>{t.stats.appointment}</span></div>
            <div><strong>24h</strong><span>{t.stats.response}</span></div>
          </div>
        </section>

        <section className="marquee">
          {brands.map((brand) => <span key={brand.name}>{brand.name.toUpperCase()}</span>)}
        </section>

        <section className="section">
          <div className="section-head">
            <p className="eyebrow">{t.collection.eyebrow}</p>
            <h2>{t.collection.title}</h2>
            <p>{t.collection.copy}</p>
          </div>

          <div className="toolbar">
            <div className="filters">
              {["all", "rolex", "patek", "ap", "rm", "tudor", "hublot"].map((item) => (
                <button key={item} className={filter === item ? "filter active" : "filter"} onClick={() => setFilter(item)}>
                  {item === "all" ? t.collection.all : item === "patek" ? "Patek Philippe" : item === "ap" ? "AP" : item === "rm" ? "RM" : item[0].toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
            <input className="search-input" value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t.collection.search} />
          </div>

          <div className="watch-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} lang={lang} enquireText={t.collection.enquire} />
            ))}
          </div>
          {featuredProducts.length === 0 ? <p className="empty-text">{t.collection.noResults}</p> : null}
        </section>

        <section className="services-strip">
          {t.services.items.slice(0, 4).map(([title, copy]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </section>

        <section className="split-section">
          <div className="split-copy">
            <p className="eyebrow">{t.why.eyebrow}</p>
            <h2>{t.why.title}</h2>
            <p>{t.why.copy}</p>
          </div>

          <div className="trust-grid">
            {t.why.points.map((point, index) => (
              <div key={point}><strong>{String(index + 1).padStart(2, "0")}</strong><span>{point}</span></div>
            ))}
          </div>
        </section>

        <section className="section dark-panel">
          <div className="section-head">
            <p className="eyebrow">{t.process.eyebrow}</p>
            <h2>{t.process.title}</h2>
          </div>
          <div className="process-grid">
            {t.process.items.map(([title, copy], index) => (
              <div className="process-card" key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="auth-section">
          <div className="auth-card">
            <p className="eyebrow">{t.authenticity.eyebrow}</p>
            <h2>{t.authenticity.title}</h2>
            <p>{t.authenticity.copy}</p>
            <ul>{t.authenticity.items.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </section>

        <section className="brands-section">
          <div className="section-head">
            <p className="eyebrow">{t.brands.eyebrow}</p>
            <h2>{t.brands.title}</h2>
          </div>
          <div className="brand-wall">
            {brands.map((brand) => <span key={brand.name}>{brand.name}</span>)}
          </div>
        </section>

        <section className="section insights-preview">
          <div className="section-head">
            <p className="eyebrow">{t.insight.eyebrow}</p>
            <h2>{t.insight.title}</h2>
          </div>
          <div className="insight-grid">
            {insights.map((insight) => (
              <article className="insight-card" key={insight.tag}>
                <span>{insight.tag}</span>
                <h3>{insight.title[lang]}</h3>
                <p>{insight.copy[lang]}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section">
          <div className="contact-copy">
            <p className="eyebrow">{t.appointment.eyebrow}</p>
            <h2>{t.appointment.title}</h2>
            <p>{t.appointment.copy}</p>
          </div>

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

        <section className="faq-section">
          <div className="section-head">
            <p className="eyebrow">FAQ</p>
            <h2>{t.faq.title}</h2>
          </div>
          <div className="faq-grid">
            {t.faq.items.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <Footer t={t} />
    </>
  );
}
