import { useEffect, useState } from "react";
import { messages, navLinks } from "../data/site";
import { whatsappUrl } from "../lib/whatsapp";
import Icon from "./Icon";
import Logo from "./Logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Resalta el enlace de la sección visible
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`header${scrolled ? " header--scrolled" : ""}${open ? " header--open" : ""}`}>
      <div className="container header__inner">
        <a href="#inicio" className="header__brand" aria-label="E-Fiber, ir al inicio" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav id="menu-principal" className="nav" aria-label="Principal">
          <ul className="nav__list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`nav__link${active === link.id ? " is-active" : ""}`}
                  aria-current={active === link.id ? "true" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn--orange nav__cta-mobile" href={whatsappUrl(messages.hire)} target="_blank" rel="noopener noreferrer">
            <Icon name="wifi" size={20} /> Contratar ahora
          </a>
        </nav>

        <a className="btn btn--orange btn--sm header__cta" href={whatsappUrl(messages.hire)} target="_blank" rel="noopener noreferrer">
          <Icon name="wifi" size={18} /> Contratar ahora
        </a>

        <button
          type="button"
          className="header__toggle"
          aria-expanded={open}
          aria-controls="menu-principal"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} size={26} />
        </button>
      </div>
    </header>
  );
}
