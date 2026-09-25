/**
 * Datos comerciales de E-Fiber en un solo lugar.
 * Fuente: flyers de la carpeta del proyecto y contrato oficial de E-Fiber S.A.C.
 */

export const company = {
  name: "E-Fiber",
  legalName: "E-FIBER S.A.C.",
  tagline: "Conectamos hogares, acercamos familias",
  ruc: "20612212083",
  address: "Av. Balaguer calle 4, Alameda de Ñaña Mz. H Lote 17, Lurigancho - Lima",
  email: "e-fiber@outlook.es",
  hours: "Lunes a domingo, 8:00 a.m. – 9:00 p.m.",
};

export const contact = {
  /** Número de WhatsApp en formato internacional, sin "+" ni espacios. */
  whatsapp: "51930462339",
  whatsappDisplay: "930 462 339",
  phones: ["930 462 339", "961 803 345"],
};

/** Deja la URL vacía para ocultar la red social en el footer. */
export const socials: { name: "Facebook" | "Instagram" | "YouTube"; url: string }[] = [
  { name: "Facebook", url: "" },
  { name: "Instagram", url: "" },
  { name: "YouTube", url: "" },
];

export const referral = {
  amount: 20,
  title: "Trae a un amigo y ambos reciben",
  detail: "de descuento en su siguiente recibo",
};

export const coverageZones = [
  "Los Sauces",
  "Betania",
  "El Inti",
  "Auxiliar de la Prialé",
  "Alameda I, II y III",
  "La Era (I, II, III, IV y V etapa)",
  "San Francisco",
  "Los Pinos",
  "Las Cadenas",
  "Las Colinas",
  "Alto Perú",
  "Sol de Huampaní",
  "El Vallecito Anexo 12",
  "Puerto",
  "Grau",
  "Huascata",
  "La Floresta",
  "Villarica",
];

export const navLinks = [
  { id: "inicio", label: "Inicio" },
  { id: "planes", label: "Planes" },
  { id: "beneficios", label: "Beneficios" },
  { id: "cobertura", label: "Cobertura" },
  { id: "referidos", label: "Referidos" },
  { id: "contacto", label: "Contacto" },
] as const;

export const messages = {
  general: "Hola E-Fiber, quiero información sobre sus planes de Internet.",
  hire: "Hola E-Fiber, quiero contratar Internet por fibra óptica.",
  coverage: "Hola E-Fiber, quiero consultar si tienen cobertura en mi zona.",
  referral:
    "Hola E-Fiber, quiero recomendar a un amigo para el programa de referidos (S/ 20 de descuento).",
  plan: (name: string, speed: number, price: number) =>
    `Hola E-Fiber, quiero contratar el ${name} de ${speed} Mbps (S/ ${price} al mes).`,
};
