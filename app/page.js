"use client";
import { useMemo, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WatchCard from "../components/WatchCard";
import { useLanguage } from "../components/useLanguage";
import { products, brandStories, insights, site } from "../data/site";

export default function Home() {
  const { lang, setLang, t } = useLanguage();
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");
  const heroProducts = products.filter((p) => p.hero);
  const shownProducts = useMemo(() => products.filter((p) => p.featured).filter((p) => filter === "all" || p.category === filter).filter((p) => `${p.brand} ${p.model} ${p.reference}`.toLowerCase().includes(query.toLowerCase())), [filter, query]);

  return (
    <>
      <a className="wa-float" href={`${site.whatsapp}?text=Hello%20JAD%20KRONO%2C%20I%20would%20like%20to%20make%20a%20private%20enquiry.`} target="_blank"><span>Need assistance?</span>WhatsApp</a>
      <Header lang={lang} setLang={setLang} t={t} />
      <main>
        <section className="signature-hero">
          <div className="hero-orbit" /><div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1>{t.hero.title}</h1>
            <p>{t.hero.copy}</p>
            <div className="hero-buttons"><a href="/collection" className="btn gold">{t.hero.primary}</a><a href={site.whatsapp} target="_blank" className="btn ghost">{t.hero.secondary}</a></div><div className="hero-note"><span>Singapore</span><span>Appointment Only</span><span>Private Sourcing</span></div>
          </div>
          <div className="hero-feature">{heroProducts.map((product) => <div className="hero-watch" key={product.id}><span>{product.brand}</span><strong>{product.reference}</strong></div>)}</div>
        <div className="scroll-cue">Scroll</div></section>

        <section className="brand-ticker">{["Rolex","Patek Philippe","Audemars Piguet","Richard Mille","Tudor","Hublot","Cartier","Omega"].map((b) => <span key={b}>{b}</span>)}</section>

        <section className="collection-section">
          <div className="section-heading"><p className="eyebrow">{t.collection.eyebrow}</p><h2>{t.collection.title}</h2><p>{t.collection.copy}</p></div>
          <div className="collection-toolbar">
            <div className="filters">{["all","rolex","patek","ap","rm","tudor","hublot"].map((item) => <button key={item} onClick={() => setFilter(item)} className={filter === item ? "active" : ""}>{item === "all" ? t.collection.all : item === "patek" ? "Patek Philippe" : item === "ap" ? "AP" : item === "rm" ? "RM" : item.toUpperCase()}</button>)}</div>
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t.collection.search} />
          </div>
          <div className="watch-grid">{shownProducts.map((product, index) => <WatchCard key={product.id} product={product} lang={lang} enquireText={t.collection.enquire} large={index === 0} />)}</div>
          {shownProducts.length === 0 ? <p className="empty">{t.collection.noResults}</p> : null}
        </section>

        <section className="trust-section">
          <div><p className="eyebrow">JAD KRONO STANDARD</p><h2>{t.trust.title}</h2><p>{t.trust.copy}</p></div>
          <div className="trust-list">{t.trust.points.map((point, index) => <article key={point}><span>{String(index + 1).padStart(2, "0")}</span><strong>{point}</strong></article>)}</div>
        </section>

        <section className="brand-experience"><div className="section-heading"><p className="eyebrow">{t.brands.eyebrow}</p><h2>{t.brands.title}</h2></div><div className="brand-story-grid">{brandStories.map((brand) => <article key={brand.name}><span>{brand.name}</span><h3>{brand.title[lang]}</h3><p>{brand.copy[lang]}</p></article>)}</div></section>

        <section className="services-section"><div className="section-heading"><p className="eyebrow">{t.services.eyebrow}</p><h2>{t.services.title}</h2></div><div className="service-grid">{t.services.items.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

        <section className="process-section"><div className="section-heading"><p className="eyebrow">{t.process.eyebrow}</p><h2>{t.process.title}</h2></div><div className="process-grid">{t.process.items.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

        <section className="auth-section"><div className="auth-panel"><p className="eyebrow">{t.authenticity.eyebrow}</p><h2>{t.authenticity.title}</h2><p>{t.authenticity.copy}</p><div>{t.authenticity.items.map((item) => <span key={item}>{item}</span>)}</div></div></section>

        <section className="insights-section"><div className="section-heading"><p className="eyebrow">{t.insights.eyebrow}</p><h2>{t.insights.title}</h2></div><div className="insight-grid">{insights.map((insight) => <article key={insight.tag}><span>{insight.tag}</span><h3>{insight.title[lang]}</h3><p>{insight.copy[lang]}</p></article>)}</div></section>

        <section className="contact-section"><div><p className="eyebrow">{t.contact.eyebrow}</p><h2>{t.contact.title}</h2><p>{t.contact.copy}</p></div><div className="contact-card"><a href={site.whatsapp} target="_blank">WhatsApp: {site.phoneDisplay}</a><a href={`mailto:${site.email}`}>{site.email}</a><a href={site.instagram} target="_blank">Instagram</a><a href={site.facebook} target="_blank">Facebook</a><span>{site.showroom}</span><div className="map-card">Singapore Private Showroom</div><a className="btn gold" href={site.whatsapp} target="_blank">{t.contact.button}</a></div></section>
      </main>
      <Footer t={t} />
    </>
  );
}
