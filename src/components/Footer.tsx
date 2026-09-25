import { plans } from "../data/plans";
import { company, contact, messages, navLinks, socials } from "../data/site";
import { whatsappUrl } from "../lib/whatsapp";
import Icon, { WhatsAppIcon } from "./Icon";
import Logo from "./Logo";

export default function Footer() {
  const activeSocials = socials.filter((s) => s.url);

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo variant="dark" showTagline />
          <p>Servicio de Internet en fibra óptica para hogares y negocios. Velocidad sin límites.</p>
          <p className="footer__legal">
            {company.legalName} · RUC {company.ruc}
          </p>
          {activeSocials.length > 0 && (
            <ul className="footer__socials">
              {activeSocials.map((s) => (
                <li key={s.name}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <nav aria-label="Secciones">
          <h2 className="footer__title">Navegación</h2>
          <ul className="footer__list">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="footer__title">Planes</h2>
          <ul className="footer__list">
            {plans.map((p) => (
              <li key={p.id}>
                <a href="#planes">
                  {p.speedMbps} Mbps · S/ {p.price} al mes
                </a>
              </li>
            ))}
          </ul>
        </div>

        <address className="footer__contact">
          <h2 className="footer__title">Contacto</h2>
          <ul className="footer__list">
            <li>
              <a href={whatsappUrl(messages.general)} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon size={18} /> {contact.whatsappDisplay}
              </a>
            </li>
            {contact.phones
              .filter((p) => p !== contact.whatsappDisplay)
              .map((p) => (
                <li key={p}>
                  <a href={`tel:+51${p.replace(/\s/g, "")}`}>
                    <Icon name="phone" size={18} /> {p}
                  </a>
                </li>
              ))}
            <li>
              <a href={`mailto:${company.email}`}>
                <Icon name="mail" size={18} /> {company.email}
              </a>
            </li>
            <li>
              <span>
                <Icon name="clock" size={18} /> {company.hours}
              </span>
            </li>
            <li>
              <span>
                <Icon name="pin" size={18} /> {company.address}
              </span>
            </li>
          </ul>
        </address>
      </div>
      <div className="footer__bottom">
        <div className="container">© 2026 E-Fiber. Todos los derechos reservados.</div>
      </div>
    </footer>
  );
}
