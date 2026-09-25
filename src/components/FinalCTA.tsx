import { contact, messages } from "../data/site";
import { whatsappUrl } from "../lib/whatsapp";
import FiberLines from "./FiberLines";
import Icon, { WhatsAppIcon } from "./Icon";

export default function FinalCTA() {
  return (
    <section id="contacto" className="final-cta" aria-labelledby="cta-title">
      <FiberLines className="final-cta__lines" />
      <div className="container final-cta__inner">
        <div>
          <h2 id="cta-title" className="final-cta__title">
            ¿Listo para navegar <span className="text-cyan">más rápido</span>?
          </h2>
          <p className="final-cta__text">Contrata Internet por fibra óptica con E-Fiber.</p>
          <div className="final-cta__actions">
            <a className="btn btn--orange btn--lg" href={whatsappUrl(messages.hire)} target="_blank" rel="noopener noreferrer">
              Contratar ahora <Icon name="arrow" size={20} />
            </a>
            <a className="btn btn--ghost-light btn--lg" href="#cobertura">
              <Icon name="pin" size={20} /> Consultar cobertura
            </a>
          </div>
        </div>

        <a className="final-cta__whatsapp" href={whatsappUrl(messages.general)} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon size={44} />
          <span>
            <small>¡Contrata ahora!</small>
            <strong>{contact.whatsappDisplay}</strong>
            <small>Escríbenos por WhatsApp</small>
          </span>
        </a>
      </div>
    </section>
  );
}
