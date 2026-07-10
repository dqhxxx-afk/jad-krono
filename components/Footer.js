import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a href="/" aria-label="JAD KRONO home"><img src="/assets/jad-krono-logo.png" alt="JAD KRONO" /></a>
          <p>Independent Watch Dealer</p>
          <p>Singapore</p>
        </div>
        <nav className="footer-social" aria-label="Contact links">
          <a href={site.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
          <a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>
          <a href={site.facebook} target="_blank" rel="noreferrer">Facebook</a>
          <a href={site.googleMaps} target="_blank" rel="noreferrer">Google Maps</a>
        </nav>
      </div>
      <p className="footer-disclaimer">JAD KRONO is an independent watch dealer and is not affiliated with or endorsed by any watch manufacturer. Brand names, model names and trademarks are used for identification only and remain the property of their respective owners.</p>
      <div className="footer-bottom">
        <p>© 2026 JAD KRONO. All rights reserved.</p>
        <nav aria-label="Legal links">
          <a href="/privacy-policy">Privacy Policy</a><span>·</span>
          <a href="/terms-conditions">Terms & Conditions</a><span>·</span>
          <a href="/faq">FAQ</a>
        </nav>
      </div>
    </footer>
  );
}
