"use client";

import { site } from "../data/site";

export default function Footer({ t }) {
  const mapsLink = site.googleMaps || "https://maps.app.goo.gl/CGgdPNjevd54Gdrm9?g_st=ic";

  return (
    <footer className="site-footer jk-footer-v25">
      <div className="footer-v25-top">
        <div className="footer-v25-brand"><a href="/" aria-label="JAD KRONO Home"><img src="/assets/jad-krono-logo.png" alt="JAD KRONO" /></a><p>Independent Singapore Private Watch Dealer</p><p>Private Viewings by Appointment</p></div>
        <nav className="footer-v25-links" aria-label="Contact links"><a href={site.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a><a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a><a href={mapsLink} target="_blank" rel="noreferrer">Google Maps</a></nav>
      </div>
      <p className="footer-v25-disclaimer">JAD KRONO is an independent Singapore private watch dealer. We are not affiliated with or endorsed by Rolex, Patek Philippe, Audemars Piguet, Cartier or any other watch manufacturer. All trademarks remain the property of their respective owners and are used solely for identification purposes.</p>
      <div className="footer-v25-bottom"><p>© 2026 JAD KRONO. All rights reserved.</p><nav><a href="/privacy-policy">Privacy Policy</a><span>·</span><a href="/terms-conditions">Terms & Conditions</a><span>·</span><a href="/faq">FAQ</a></nav></div>
    </footer>
  );
}
