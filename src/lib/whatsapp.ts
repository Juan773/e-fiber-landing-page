import { contact } from "../data/site";

/** Genera el enlace de WhatsApp con el mensaje codificado. */
export function whatsappUrl(message: string): string {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message: string): void {
  window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
}
