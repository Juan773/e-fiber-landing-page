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
    id: "basico",
    name: "Plan Básico",
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
    id: "intermedio",
    name: "Plan Intermedio",
    speedMbps: 200,
    price: 70,
    tone: "blue",
    features: [
      "Streaming en HD y videollamadas",
      "Juegos en línea",
      "Conexión más rápida y estable",
    ],
    devices: "Hasta 8 dispositivos",
  },
  {
    id: "avanzado",
    name: "Plan Avanzado",
    speedMbps: 300,
    price: 100,
    tone: "orange",
    badge: "Más elegido",
    features: [
      "Streaming en 4K",
      "Descargas más rápidas",
      "Conexión para toda la familia y smart TV",
    ],
    devices: "Hasta 12 dispositivos",
  },
  {
    id: "premium",
    name: "Plan Premium",
    speedMbps: 500,
    price: 150,
    tone: "purple",
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
export const heroPlanIds = ["intermedio", "avanzado"];
