import Icon from "./Icon";
import SectionHeading from "./SectionHeading";

const rows = [
  { feature: "Velocidad", fiber: "Mayor velocidad de subida y bajada", traditional: "Velocidad limitada por el cableado" },
  { feature: "Latencia", fiber: "Menor latencia, ideal para juegos en línea", traditional: "Mayor latencia en horas de uso" },
  { feature: "Estabilidad", fiber: "Señal estable, sin interferencia eléctrica", traditional: "Más sensible a interferencias y distancia" },
  { feature: "Varios dispositivos", fiber: "Buen rendimiento con muchos equipos a la vez", traditional: "Baja el rendimiento al conectar más equipos" },
  { feature: "Videollamadas", fiber: "Imagen y audio más fluidos", traditional: "Cortes o congelamientos más frecuentes" },
  { feature: "Streaming y gaming", fiber: "Contenido en HD y 4K con menos pausas", traditional: "Más carga (buffering) en alta calidad" },
];

export default function WhyFiber() {
  return (
    <section id="fibra" className="section section--dark" aria-labelledby="fibra-title">
      <div className="container">
        <SectionHeading
          id="fibra-title"
          light
          eyebrow="Tecnología"
          title={
            <>
              ¿Por qué <span className="text-cyan">fibra óptica</span>?
            </>
          }
          subtitle="La fibra óptica transmite datos mediante luz a través de hilos de vidrio. Así se compara con una conexión tradicional por cobre."
        />

        <div className="compare reveal" role="table" aria-label="Fibra óptica frente a conexión tradicional">
          <div className="compare__row compare__row--head" role="row">
            <span role="columnheader">Característica</span>
            <span role="columnheader" className="compare__fiber-head">
              <Icon name="zap" size={18} /> Fibra óptica E-Fiber
            </span>
            <span role="columnheader">Conexión tradicional</span>
          </div>
          {rows.map((r) => (
            <div key={r.feature} className="compare__row" role="row">
              <span role="rowheader" className="compare__feature">
                {r.feature}
              </span>
              <span role="cell" className="compare__fiber">
                <Icon name="check" size={18} /> {r.fiber}
              </span>
              <span role="cell" className="compare__trad">
                <Icon name="minus" size={18} /> {r.traditional}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
