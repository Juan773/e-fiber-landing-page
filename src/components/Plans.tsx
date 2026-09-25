import { includedInAllPlans, plans } from "../data/plans";
import { messages } from "../data/site";
import { whatsappUrl } from "../lib/whatsapp";
import Icon, { WhatsAppIcon } from "./Icon";
import SectionHeading from "./SectionHeading";

export default function Plans() {
  return (
    <section id="planes" className="section section--tint" aria-labelledby="planes-title">
      <div className="container">
        <SectionHeading
          id="planes-title"
          eyebrow="Nuestros planes"
          title={
            <>
              El plan ideal, con la <span className="text-orange">velocidad que necesitas</span>
            </>
          }
          subtitle="Internet 100% fibra óptica para tu hogar. Elige tu plan y contrátalo directo por WhatsApp."
        />

        <ul className="plans">
          {plans.map((plan) => (
            <li key={plan.id} className={`plan plan--${plan.tone}${plan.badge ? " plan--featured" : ""} reveal`}>
              {plan.badge && (
                <span className="plan__badge">
                  <Icon name="zap" size={14} /> {plan.badge}
                </span>
              )}
              <h3 className="plan__name">{plan.name}</h3>
              <p className="plan__speed">
                <span className="plan__speed-value">{plan.speedMbps}</span>
                <span className="plan__speed-unit">Mbps</span>
              </p>
              <p className="plan__price">
                <span className="plan__currency">S/</span>
                <span className="plan__amount">{plan.price}</span>
                <span className="plan__period">/ mes</span>
              </p>
              <ul className="plan__features">
                {plan.features.map((f) => (
                  <li key={f}>
                    <Icon name="check" size={18} /> {f}
                  </li>
                ))}
                <li>
                  <Icon name="devices" size={18} /> {plan.devices}
                </li>
              </ul>
              <a
                className={`btn ${plan.badge ? "btn--orange" : "btn--outline"} btn--block`}
                href={whatsappUrl(messages.plan(plan.name, plan.speedMbps, plan.price))}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={18} /> Contratar por WhatsApp
              </a>
            </li>
          ))}
        </ul>

        <ul className="plans__included" aria-label="Incluido en todos los planes">
          {includedInAllPlans.map((item) => (
            <li key={item}>
              <Icon name="shield" size={18} /> {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
