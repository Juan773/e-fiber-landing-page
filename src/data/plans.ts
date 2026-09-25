export type PlanTone = "teal" | "blue" | "orange" | "purple";

export interface Plan {
  id: string;
  name: string;
  speedMbps: number;
  /** Precio mensual en soles. */
  price: number;
  tone: PlanTone;
  features: string[];
  devices: string;
  /** Etiqueta destacada (opcional), p. ej. "Más elegido". */
  badge?: string;
}

export const plans: Plan[] = [
  {
    id: "plan-100",
    name: "Plan 100",
    speedMbps: 100,
    price: 50,
    tone: "teal",
    features: [
      "Internet estable",
      "Ideal para navegación y redes sociales",
      "Conexión para varios dispositivos",
    ],
    devices: "Hasta 5 dispositivos",
  },
  {
    id: "plan-300",
    name: "Plan 300",
    speedMbps: 300,
    price: 70,
    tone: "blue",
    features: [
      "Streaming en HD y 4K",
      "Videollamadas y juegos en línea",
      "Conexión para toda la familia y smart TV",
    ],
    devices: "Hasta 12 dispositivos",
  },
  {
    id: "plan-400",
    name: "Plan 400",
    speedMbps: 400,
    price: 100,
    tone: "orange",
    badge: "Más velocidad",
    features: [
      "Máximo rendimiento en gaming y 4K",
      "Ideal para hogares con muchos dispositivos",
      "La mejor experiencia E-Fiber",
    ],
    devices: "Dispositivos sin límite",
  },
];

/** Beneficios incluidos en todos los planes. */
export const includedInAllPlans = ["100% fibra óptica", "Instalación gratuita", "Soporte técnico"];

/** Planes que se muestran en el hero. */
export const heroPlanIds = ["plan-300", "plan-400"];
