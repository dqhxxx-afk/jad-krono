import { WhatsAppIcon } from "@/components/Icons";

export function WhatsAppButton() {
  return (
    <a
      className="floating-whatsapp"
      href="https://wa.me/6586996868?text=Hello%20JAD%20KRONO%2C%20I%20would%20like%20to%20enquire%20about%20a%20watch."
      target="_blank"
      rel="noreferrer"
      aria-label="Contact JAD KRONO on WhatsApp"
    >
      <WhatsAppIcon />
      <span>WhatsApp</span>
    </a>
  );
}
