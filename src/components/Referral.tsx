import { messages, referral } from "../data/site";
import { whatsappUrl } from "../lib/whatsapp";
import Icon, { type IconName } from "./Icon";

const steps: { icon: IconName; title: string; text: string }[] = [
  { icon: "megaphone", title: "Recomienda E-Fiber", text: "Cuéntale a un amigo, vecino o familiar sobre nuestro internet." },
  { icon: "userPlus", title: "Tu amigo contrata", text: "Tu referido contrata cualquiera de nuestros planes de fibra óptica." },
  { icon: "gift", title: `Ambos reciben S/ ${referral.amount}`, text: `Tú y tu amigo obtienen S/ ${referral.amount} ${referral.detail}.` },
];

export default function Referral() {
  return (
    <section id="referidos" className="section" aria-labelledby="referidos-title">
      <div className="container">
        <div className="referral reveal">
          <div className="referral__intro">
            <p className="eyebrow eyebrow--light">
              <Icon name="megaphone" size={16} /> Programa de referidos
            </p>
            <h2 id="referidos-title" className="referral__title">
              {referral.title}
            </h2>
            <p className="referral__amount">
              <span>S/</span>
              {referral.amount}
            </p>
            <p className="referral__detail">{referral.detail}</p>
            <a className="btn btn--white btn--lg" href={whatsappUrl(messages.referral)} target="_blank" rel="noopener noreferrer">
              Quiero recomendar <Icon name="arrow" size={20} />
            </a>
          </div>

          <ol className="referral__steps">
            {steps.map((s, i) => (
              <li key={s.title} className="referral__step">
                <span className="referral__num" aria-hidden="true">
                  {i + 1}
                </span>
                <span className="referral__step-icon">
                  <Icon name={s.icon} size={24} />
                </span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
