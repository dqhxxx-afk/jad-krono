"use client";

import { site } from "../data/site";

export default function Footer({ t }) {
  const primaryLinks = [
    ["Collection", "/collection"],
    ["Sell Your Watch", "/sell-your-watch"],
    ["Services", "/services"],
    ["About", "/about"],
    ["Contact", "/contact"]
  ];

  const socialLinks = [
    ["WhatsApp", site.whatsapp],
    ["Instagram", site.instagram],
    ["Facebook", site.facebook],
    ["Google Maps", site.maps]
  ];

  return (
    <footer className="site-footer jk-footer-compact">
      <div className="footer-brand">
        <a href="/" aria-label="JAD KRONO Home">
          <img src="/assets/jad-krono-logo.png" alt="JAD KRONO" />
        </a>
        <p className="footer-location">Singapore</p>
        <p className="footer-appointment">Private Viewings by Appointment</p>
      </div>

      <nav className="footer-nav" aria-label="Footer navigation">
        {primaryLinks.map(([label, href]) => (
          <a key={label} href={href}>{label}</a>
        ))}
      </nav>

      <nav className="footer-social" aria-label="Social links">
        {socialLinks.map(([label, href]) => (
          <a key={label} href={href} target="_blank" rel="noreferrer">{label}</a>
        ))}
      </nav>

      <p className="disclaimer footer-disclaimer">
        {t.footer.disclaimer}
      </p>

      <p className="legal-links footer-legal">
        <a href="/privacy-policy">Privacy Policy</a>
        <span>·</span>
        <a href="/terms-conditions">Terms & Conditions</a>
        <span>·</span>
        <a href="/faq">FAQ</a>
      </p>
    </footer>
  );
}
