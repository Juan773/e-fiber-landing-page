import { useState, type FormEvent } from "react";
import tecnico from "../assets/tecnico-efiber.webp";
import { coverageZones } from "../data/site";
import { openWhatsApp } from "../lib/whatsapp";
import Icon, { type IconName } from "./Icon";
import SectionHeading from "./SectionHeading";

interface CoverageForm {
  name: string;
  district: string;
  address: string;
  phone: string;
}

const EMPTY: CoverageForm = { name: "", district: "", address: "", phone: "" };

const steps: { icon: IconName; text: string }[] = [
  { icon: "pin", text: "Verificamos la cobertura en tu zona" },
  { icon: "calendar", text: "Coordinamos la instalación en la fecha que prefieras" },
  { icon: "wrench", text: "Nuestro técnico realiza la instalación en tu domicilio" },
  { icon: "wifi", text: "¡Listo! Disfruta tu internet de alta velocidad" },
];

function buildCoverageMessage(f: CoverageForm): string {
  return [
    "Hola E-Fiber, quiero consultar cobertura.",
    `Nombre: ${f.name.trim()}`,
    `Zona: ${f.district.trim()}`,
    `Dirección: ${f.address.trim()}`,
    `Teléfono: ${f.phone.trim()}`,
  ].join("\n");
}

export default function Coverage() {
  const [form, setForm] = useState<CoverageForm>(EMPTY);
  const set = (key: keyof CoverageForm) => (value: string) => setForm((f) => ({ ...f, [key]: value }));

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    openWhatsApp(buildCoverageMessage(form));
  }

  return (
    <section id="cobertura" className="section section--tint" aria-labelledby="cobertura-title">
      <div className="container">
        <SectionHeading
          id="cobertura-title"
          eyebrow="Cobertura"
          title={
            <>
              ¿E-Fiber llega a <span className="text-orange">tu zona</span>?
            </>
          }
          subtitle="Déjanos tus datos y te respondemos por WhatsApp para confirmar la cobertura en tu dirección."
        />

        <div className="coverage">
          <form className="coverage__form reveal" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="cov-name">Nombre</label>
              <input id="cov-name" name="name" autoComplete="name" required value={form.name} onChange={(e) => set("name")(e.target.value)} placeholder="Tu nombre y apellido" />
            </div>
            <div className="field">
              <label htmlFor="cov-district">Zona o sector</label>
              <input
                id="cov-district"
                name="district"
                list="cov-district-list"
                required
                value={form.district}
                onChange={(e) => set("district")(e.target.value)}
                placeholder="Ej. La Era"
              />
              <datalist id="cov-district-list">
                {coverageZones.map((z) => (
                  <option key={z} value={z} />
                ))}
              </datalist>
            </div>
            <div className="field field--full">
              <label htmlFor="cov-address">Dirección o referencia</label>
              <input
                id="cov-address"
                name="address"
                autoComplete="street-address"
                required
                value={form.address}
                onChange={(e) => set("address")(e.target.value)}
                placeholder="Calle, Mz/Lt o referencia"
              />
            </div>
            <div className="field field--full">
              <label htmlFor="cov-phone">Teléfono / WhatsApp</label>
              <input
                id="cov-phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                required
                pattern="[0-9 +]{9,15}"
                title="Ingresa un número de 9 dígitos"
                value={form.phone}
                onChange={(e) => set("phone")(e.target.value)}
                placeholder="999 999 999"
              />
            </div>
            <button type="submit" className="btn btn--orange btn--lg btn--block field--full">
              <Icon name="pin" size={20} /> Consultar cobertura
            </button>
            <p className="coverage__note field--full">Se abrirá WhatsApp con tus datos para que envíes la consulta.</p>
          </form>

          <div className="coverage__info reveal">
            <div className="coverage__photo">
              <img src={tecnico} alt="Técnico de E-Fiber con un rollo de cable de fibra óptica" width={304} height={296} loading="lazy" decoding="async" />
            </div>
            <div>
              <h3 className="coverage__zones-title">
                <Icon name="pin" size={20} /> Zonas con cobertura
              </h3>
              <ul className="coverage__zones">
                {coverageZones.map((z) => (
                  <li key={z}>{z}</li>
                ))}
                <li className="coverage__zones-more">Seguimos expandiéndonos</li>
              </ul>
            </div>
          </div>
        </div>

        <ol className="steps reveal" aria-label="Proceso de instalación">
          {steps.map((s, i) => (
            <li key={s.text} className="steps__item">
              <span className="steps__num">{i + 1}</span>
              <Icon name={s.icon} size={26} />
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
