"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { site } from "../data/site";

const nav = [
  ["/collection", "Collection"],
  ["/sell-your-watch", "Sell Your Watch"],
  ["/services", "Services"],
  ["/about", "About"],
  ["/contact", "Contact"]
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const active = (href) => pathname === href || (href !== "/" && pathname?.startsWith(href + "/"));

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="/" aria-label="JAD KRONO home">
          <img src="/assets/jad-krono-logo.png" alt="JAD KRONO" />
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map(([href, label]) => (
            <a key={href} href={href} aria-current={active(href) ? "page" : undefined}>{label}</a>
          ))}
        </nav>

        <button className="menu-btn" type="button" onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open}>
          <Menu size={25} strokeWidth={1.7} />
        </button>
      </header>

      <div className={`mobile-menu ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="mobile-menu-head">
          <img src="/assets/jad-krono-logo.png" alt="JAD KRONO" />
          <button type="button" className="mobile-close" onClick={() => setOpen(false)} aria-label="Close menu">
            <X size={30} strokeWidth={1.5} />
          </button>
        </div>
        <nav className="mobile-menu-nav" aria-label="Mobile navigation">
          <a href="/" aria-current={pathname === "/" ? "page" : undefined} onClick={() => setOpen(false)}>Home</a>
          {nav.map(([href, label]) => (
            <a key={href} href={href} aria-current={active(href) ? "page" : undefined} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>
        <div className="mobile-menu-social">
          <a href={site.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
          <a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>
          <a href={site.facebook} target="_blank" rel="noreferrer">Facebook</a>
          <a href={site.googleMaps} target="_blank" rel="noreferrer">Google Maps</a>
        </div>
      </div>
    </>
  );
}
