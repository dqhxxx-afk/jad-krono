"use client";

import { site } from "../data/site";

export default function Footer({ t }) {
  const mapsLink = site.googleMaps || site.maps || "https://maps.app.goo.gl/CGgdPNjevd54Gdrm9?g_st=ic";
  const facebookLink = site.facebook || "https://www.facebook.com/share/1BjRy9MPKg/?mibextid=wwXIfr";

  return (
    <footer className="site-footer jk-footer-v29">
      <div className="footer-v29-main">
        <div className="footer-v29-brand">
          <a href="/" aria-label="JAD KRONO Home">
            <img src="/assets/jad-krono-logo.png" alt="JAD KRONO" />
          </a>
          <p>Independent Singapore Private Watch Dealer</p>
          <p>Private Viewings by Appointment</p>
        </div>

        <nav className="footer-v29-social" aria-label="Contact links">
          <a href={site.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
          <a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>
          <a href={facebookLink} target="_blank" rel="noreferrer">Facebook</a>
          <a href={mapsLink} target="_blank" rel="noreferrer">Google Maps</a>
        </nav>
      </div>

      <p className="footer-v29-disclaimer">
        JAD KRONO is an independent Singapore private watch dealer. We are not affiliated with or endorsed by Rolex, Patek Philippe, Audemars Piguet, Cartier or any other watch manufacturer. All trademarks remain the property of their respective owners and are used solely for identification purposes.
      </p>

      <div className="footer-v29-bottom">
        <p>© 2026 JAD KRONO. All rights reserved.</p>
        <nav aria-label="Legal links">
          <a href="/privacy-policy">Privacy Policy</a>
          <span>·</span>
          <a href="/terms-conditions">Terms & Conditions</a>
          <span>·</span>
          <a href="/faq">FAQ</a>
        </nav>
      </div>
    </footer>
  );
}
