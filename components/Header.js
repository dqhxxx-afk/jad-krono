"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "../data/site";

export default function Header({ t }) {
  const [open, setOpen] = useState(false);

  const nav = [
    ["/", "Home"],
    ["/collection", t.nav.collection],
    ["/sell-your-watch", "Sell"],
    ["/services", t.nav.services],
    ["/about", t.nav.about],
    ["/contact", t.nav.contact]
  ];

  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="JAD KRONO Home">
        <img src="/assets/jad-krono-logo.png" alt="JAD KRONO" />
      </a>

      <nav className="desktop-nav" aria-label="Main navigation">
        {nav.slice(1).map(([href, label]) => (
          <a key={href} href={href}>{label}</a>
        ))}
      </nav>

      <button className="menu-btn" onClick={() => setOpen(true)} aria-label="Open menu">
        <Menu size={24} />
      </button>

      {open ? (
        <div className="mobile-menu" role="dialog" aria-modal="true">
          <div className="mobile-menu-top">
            <button className="mobile-close" onClick={() => setOpen(false)} aria-label="Close menu">
              <X size={32} />
            </button>
          </div>

          <nav className="mobile-menu-nav" aria-label="Mobile navigation">
            {nav.map(([href, label]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
          </nav>

          <div className="mobile-menu-social">
            <a href={site.whatsapp} target="_blank">WhatsApp</a>
            <a href={site.instagram} target="_blank">Instagram</a>
            <a href={site.facebook} target="_blank">Facebook</a>
            <a href={site.googleMaps} target="_blank">Google Maps</a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
