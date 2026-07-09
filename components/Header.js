"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "../data/site";

export default function Header({ lang, setLang, t }) {
  const [open, setOpen] = useState(false);
  const nav = [
    ["/", t.nav.home],
    ["/collection", t.nav.collection],
    ["/brands", t.nav.brands],
    ["/services", t.nav.services],
    ["/sell-your-watch", t.nav.sell],
    ["/market-insights", t.nav.insights],
    ["/contact", t.nav.contact]
  ];

  return (
    <header className="site-header">
      <a className="brand" href="/">
        <img src="/assets/jad-krono-logo.png" alt="JAD KRONO" />
      </a>
      <nav className="desktop-nav">{nav.map(([href, label]) => <a key={href} href={href}>{label}</a>)}</nav>
      <div className="header-actions">
        <div className="language-switcher">
          <button className={lang === "en" ? "lang-btn active" : "lang-btn"} onClick={() => setLang("en")}>EN</button>
          <button className={lang === "vi" ? "lang-btn active" : "lang-btn"} onClick={() => setLang("vi")}>VI</button>
        </div>
        <a className="header-cta" href={site.whatsapp} target="_blank">{site.phoneDisplay}</a>
        <button className="menu-btn" onClick={() => setOpen(true)} aria-label="Open menu"><Menu size={22} /></button>
      </div>
      <div className={open ? "mobile-panel open" : "mobile-panel"}>
        <button className="close-btn" onClick={() => setOpen(false)} aria-label="Close menu"><X size={26} /></button>
        <img src="/assets/jad-krono-logo.png" alt="JAD KRONO" />
        <nav>{nav.map(([href, label]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}</nav>
        <div className="mobile-lang"><button onClick={() => setLang("en")}>EN</button><button onClick={() => setLang("vi")}>VI</button></div>
      </div>
    </header>
  );
}
