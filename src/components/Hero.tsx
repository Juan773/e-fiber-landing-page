import familia from "../assets/familia-conectada.webp";
import { heroPlanIds, plans } from "../data/plans";
import { messages } from "../data/site";
import { whatsappUrl } from "../lib/whatsapp";
import FiberLines from "./FiberLines";
import Icon, { type IconName } from "./Icon";

const uses: { icon: IconName; label: string }[] = [
  { icon: "play", label: "Streaming" },
  { icon: "gamepad", label: "Gaming" },
  { icon: "laptop", label: "Trabajo" },
  { icon: "graduation", label: "Estudio" },
];

const heroPlans = plans.filter((p) => heroPlanIds.includes(p.id));
const featured = heroPlans.find((p) => p.badge) ?? heroPlans[0];
// React 18 aún no reconoce `fetchPriority`; se pasa el atributo HTML en minúsculas.
const highPriority = { fetchpriority: "high" } as Record<string, string>;

export default function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <FiberLines className="hero__lines" />
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow eyebrow--light">
            <Icon name="wifi" size={16} /> 100% fibra óptica
          </p>
          <h1 id="hero-title" className="hero__title">
            Internet por <span className="text-cyan">fibra óptica</span> para ir más rápido
          </h1>
          <p className="hero__lead">
            Conectamos hogares, acercamos familias con un internet estable y veloz. Disfruta streaming, juegos en
            línea, trabajo remoto y clases virtuales sin complicaciones.
          </p>

          <ul className="hero__uses" aria-label="Ideal para">
            {uses.map((u) => (
              <li key={u.label}>
                <Icon name={u.icon} size={22} />
                {u.label}
              </li>
            ))}
          </ul>

          <div className="hero__actions">
            <a
              className="btn btn--orange btn--lg"
              href={whatsappUrl(messages.plan(featured.name, featured.speedMbps, featured.price))}
              target="_blank"
              rel="noopener noreferrer"
            >
              Quiero este plan <Icon name="arrow" size={20} />
            </a>
            <a className="btn btn--ghost-light btn--lg" href={whatsappUrl(messages.coverage)} target="_blank" rel="noopener noreferrer">
              <Icon name="pin" size={20} /> Consultar cobertura
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__photo">
            <img
              src={familia}
              alt="Familia sonriendo mientras usa una laptop conectada a internet en casa"
              width={336}
              height={277}
              {...highPriority}
            />
            <span className="hero__badge">
              <Icon name="wifi" size={22} /> 100% fibra óptica
            </span>
          </div>

          <div className="hero__plans">
            {heroPlans.map((plan) => (
              <a
                key={plan.id}
                href="#planes"
                className={`hero-plan hero-plan--${plan.tone}`}
                aria-label={`${plan.name}: ${plan.speedMbps} Mbps a S/ ${plan.price} al mes. Ver planes`}
              >
                {plan.badge && <span className="hero-plan__badge">{plan.badge}</span>}
                <span className="hero-plan__label">Internet fibra óptica</span>
                <span className="hero-plan__speed">
                  {plan.speedMbps} <small>Mbps</small>
                </span>
                <span className="hero-plan__price">
                  S/ <strong>{plan.price}</strong> al mes
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
