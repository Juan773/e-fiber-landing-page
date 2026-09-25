import Icon, { type IconName } from "./Icon";
import SectionHeading from "./SectionHeading";

const benefits: { icon: IconName; title: string; text: string; tone: string }[] = [
  { icon: "activity", title: "100% fibra óptica", text: "Tecnología de última generación para una conexión más estable y veloz.", tone: "blue" },
  { icon: "gauge", title: "Velocidad real", text: "Lo que contratas, lo recibes. Ideal para streaming, gaming y trabajo remoto.", tone: "orange" },
  { icon: "devices", title: "Conecta todos tus dispositivos", text: "Celulares, Smart TV, laptops y tablets conectados al mismo tiempo.", tone: "teal" },
  { icon: "wrench", title: "Instalación rápida y gratuita", text: "Proceso sencillo para nuevos clientes, sin costos adicionales.", tone: "orange" },
  { icon: "headset", title: "Soporte técnico", text: "Atención rápida y confiable por WhatsApp cuando lo necesites.", tone: "blue" },
  { icon: "users", title: "Atención personalizada", text: "Un equipo local que te asesora siempre, a ti y a tu familia.", tone: "purple" },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="section" aria-labelledby="beneficios-title">
      <div className="container">
        <SectionHeading
          id="beneficios-title"
          eyebrow="¿Por qué elegirnos?"
          title={
            <>
              Más que internet, <span className="text-orange">grandes beneficios</span>
            </>
          }
          subtitle="Velocidad, estabilidad y un servicio cercano que siempre te acompaña."
        />
        <ul className="benefits">
          {benefits.map((b) => (
            <li key={b.title} className="benefit reveal">
              <span className={`benefit__icon icon-tile icon-tile--${b.tone}`}>
                <Icon name={b.icon} size={26} />
              </span>
              <h3 className="benefit__title">{b.title}</h3>
              <p className="benefit__text">{b.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
