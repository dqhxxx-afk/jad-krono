"use client";

import { site } from "../data/site";

export default function Footer({ t }) {
  const essentialLinks = [
    ["Privacy Policy", "/privacy-policy"],
    ["Terms & Conditions", "/terms-conditions"],
    ["FAQ", "/faq"]
  ];

  const socialLinks = [
    ["WhatsApp", site.whatsapp],
    ["Instagram", site.instagram],
    ["Google Maps", site.maps]
  ];

  return (
    <footer className="site-footer jk-footer-minimal">
      <div className="footer-identity">
        <a href="/" aria-label="JAD KRONO Home">
          <img src="/assets/jad-krono-logo.png" alt="JAD KRONO" />
        </a>
        <p>Independent Singapore Private Watch Dealer</p>
        <p>Private Viewings by Appointment</p>
      </div>

      <nav className="footer-social-minimal" aria-label="Contact links">
        {socialLinks.map(([label, href]) => (
          <a key={label} href={href} target="_blank" rel="noreferrer">{label}</a>
        ))}
      </nav>

      <p className="footer-disclaimer-minimal">
        JAD KRONO is an independent Singapore private watch dealer. We are not affiliated with or endorsed by Rolex, Patek Philippe, Audemars Piguet, Cartier or any other watch manufacturer. All trademarks remain the property of their respective owners and are used solely for identification purposes.
      </p>

      <div className="footer-bottom-row">
        <p>© 2026 JAD KRONO. All rights reserved.</p>
        <nav aria-label="Legal links">
          {essentialLinks.map(([label, href], index) => (
            <span key={label}>
              <a href={href}>{label}</a>
              {index < essentialLinks.length - 1 ? <em>·</em> : null}
            </span>
          ))}
        </nav>
      </div>
    </footer>
  );
}
