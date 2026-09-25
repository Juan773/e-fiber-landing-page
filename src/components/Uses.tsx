import Icon, { type IconName } from "./Icon";
import SectionHeading from "./SectionHeading";

const uses: { icon: IconName; title: string; text: string }[] = [
  { icon: "tv", title: "Streaming", text: "Películas y series en HD y 4K." },
  { icon: "gamepad", title: "Gaming", text: "Juegos en línea con baja latencia." },
  { icon: "laptop", title: "Home office", text: "Trabaja desde casa con estabilidad." },
  { icon: "graduation", title: "Estudios", text: "Clases virtuales sin cortes." },
  { icon: "video", title: "Videollamadas", text: "Reuniones fluidas con familia y trabajo." },
  { icon: "smartHome", title: "Smart Home", text: "Cámaras, TV y equipos inteligentes." },
];

export default function Uses() {
  return (
    <section id="usos" className="section" aria-labelledby="usos-title">
      <div className="container">
        <SectionHeading
          id="usos-title"
          eyebrow="Para todo lo que amas"
          title={
            <>
              Internet ideal para <span className="text-orange">cada momento</span>
            </>
          }
        />
        <ul className="uses">
          {uses.map((u) => (
            <li key={u.title} className="use reveal">
              <span className="use__icon">
                <Icon name={u.icon} size={30} />
              </span>
              <h3>{u.title}</h3>
              <p>{u.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
