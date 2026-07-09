"use client";

export default function Header({ lang, setLang, t }) {
  return (
    <header className="site-header">
      <a className="brand" href="/">
        <img src="/assets/jad-krono-logo.png" alt="JAD KRONO logo" />
      </a>

      <nav className="desktop-nav">
        <a href="/">{t.nav.home}</a>
        <a href="/collection">{t.nav.collection}</a>
        <a href="/brands">{t.nav.brands}</a>
        <a href="/services">{t.nav.services}</a>
        <a href="/sell-your-watch">{t.nav.sell}</a>
        <a href="/market-insights">{t.nav.insights}</a>
        <a href="/contact">{t.nav.contact}</a>
      </nav>

      <div className="header-actions">
        <div className="language-switcher">
          <button className={lang === "en" ? "lang-btn active" : "lang-btn"} onClick={() => setLang("en")}>EN</button>
          <button className={lang === "vi" ? "lang-btn active" : "lang-btn"} onClick={() => setLang("vi")}>VI</button>
        </div>
        <a className="header-cta" href="https://wa.me/6586996868" target="_blank">+65 8699 6868</a>
      </div>
    </header>
  );
}
