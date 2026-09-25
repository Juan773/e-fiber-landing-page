import { messages } from "../data/site";
import { whatsappUrl } from "../lib/whatsapp";
import { WhatsAppIcon } from "./Icon";

export default function WhatsAppButton() {
  return (
    <a
      className="wa-float"
      href={whatsappUrl(messages.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
    >
      <WhatsAppIcon size={30} />
      <span className="wa-float__label">¿Consultas? Escríbenos</span>
    </a>
  );
}
