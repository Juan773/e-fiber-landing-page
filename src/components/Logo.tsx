import { company } from "../data/site";

interface LogoProps {
  /** "dark" para fondos oscuros (texto blanco). */
  variant?: "light" | "dark";
  showTagline?: boolean;
}

/** Isotipo de E-Fiber: la "e" naranja con ondas de señal, reconstruida en SVG para verse nítida. */
export function LogoMark({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <circle cx="21" cy="27" r="18" fill="#F26A1B" />
      <circle cx="21" cy="27" r="13" fill="none" stroke="#fff" strokeWidth="2.2" opacity=".35" />
      <path d="M13.5 27.5h14a7.2 7.2 0 1 0-2.1 5.1" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
      <path d="M31 6.5a14 14 0 0 1 10.5 10.5" fill="none" stroke="#1B63D6" strokeWidth="3.4" strokeLinecap="round" />
      <path d="M32.5 0.8a20 20 0 0 1 14.7 14.7" fill="none" stroke="#1B63D6" strokeWidth="3.4" strokeLinecap="round" opacity=".75" />
    </svg>
  );
}

export default function Logo({ variant = "light", showTagline = false }: LogoProps) {
  return (
    <span className={`logo logo--${variant}`}>
      <LogoMark />
      <span className="logo__text">
        <span className="logo__name">
          E-FIBER <small>S.A.C.</small>
        </span>
        {showTagline && <span className="logo__tagline">{company.tagline}</span>}
      </span>
    </span>
  );
}
