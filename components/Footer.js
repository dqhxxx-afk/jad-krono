import { site } from "../data/site";

export default function Footer({ t }) {
  return (
    <footer className="site-footer">
      <div>
        <img src="/assets/jad-krono-logo.png" alt="JAD KRONO" />
        <p>{t.footer.line}</p>
      </div>

      <div>
        <a href="/collection">Collection</a>
        <a href="/services">Services</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>

      <div>
        <a href={site.whatsapp} target="_blank">WhatsApp</a>
        <a href={site.instagram} target="_blank">Instagram</a>
        <a href={site.facebook} target="_blank">Facebook</a>
        <a href={site.googleMaps} target="_blank">Google Maps</a>
      </div>

      <p className="disclaimer">{t.footer.disclaimer}</p><p className="legal-links"><a href="/privacy-policy">Privacy Policy</a> · <a href="/terms-conditions">Terms & Conditions</a> · <a href="/faq">FAQ</a></p>
    </footer>
  );
}
