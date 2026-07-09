import { site } from "../data/site";

export default function SocialContactPanel({ t }) {
  return (
    <div className="contact-panel">
      <a href={site.whatsapp} target="_blank">
        <span>WhatsApp</span>
        <strong>Private enquiry</strong>
      </a>

      <a href={site.instagram} target="_blank">
        <span>Instagram</span>
        <strong>@jadkrono</strong>
      </a>

      <a href={site.facebook} target="_blank">
        <span>Facebook</span>
        <strong>JAD KRONO Page</strong>
      </a>

      <a href={site.googleMaps} target="_blank">
        <span>Google Maps</span>
        <strong>Private showroom</strong>
      </a>

      <a href={`mailto:${site.email}`}>
        <span>Email</span>
        <strong>{site.email}</strong>
      </a>
    </div>
  );
}
