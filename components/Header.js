"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "../data/site";

export default function Header({ t }) {
  const [open, setOpen] = useState(false);

  const nav = [
    ["/collection", t.nav.collection],
    ["/services", t.nav.services],
    ["/about", t.nav.about],
    ["/contact", t.nav.contact]
  ];

  return (
    <header className="site-header">
      <a className="brand" href="/">
        <img src="/assets/jad-krono-logo.png" alt="JAD KRONO" />
      </a>

      <nav className="desktop-nav">
        {nav.map(([href, label]) => (
          <a key={href} href={href}>{label}</a>
        ))}
      </nav>

      <button className="menu-btn" onClick={() => setOpen(true)} aria-label="Open menu">
        <Menu size={22} />
      </button>

      <div className={open ? "mobile-panel open" : "mobile-panel"}>
        <button className="close-btn" onClick={() => setOpen(false)} aria-label="Close menu">
          <X size={26} />
        </button>

        <img src="/assets/jad-krono-logo.png" alt="JAD KRONO" />

        <nav>
          <a href="/" onClick={() => setOpen(false)}>Home</a>
          {nav.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>

        <div className="mobile-contact-links">
          <a href={site.whatsapp} target="_blank">WhatsApp</a>
          <a href={site.instagram} target="_blank">Instagram</a>
          <a href={site.facebook} target="_blank">Facebook</a>
          <a href={site.googleMaps} target="_blank">Google Maps</a>
        </div>
      </div>
    </header>
  );
}
