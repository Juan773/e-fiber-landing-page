import isotipo from "../assets/logo-isotipo.webp";
import logoCompleto from "../assets/logo-e-fiber.webp";
import { company } from "../data/site";

interface LogoProps {
  /** "full" muestra el logo oficial completo (isotipo + FIBER). */
  variant?: "header" | "full";
}

export default function Logo({ variant = "header" }: LogoProps) {
  if (variant === "full") {
    return (
      <span className="logo logo--full">
        <img src={logoCompleto} alt="E-Fiber" width={104} height={129} loading="lazy" decoding="async" />
        <span className="logo__tagline">{company.tagline}</span>
      </span>
    );
  }

  return (
    <span className="logo">
      <img className="logo__mark" src={isotipo} alt="" width={44} height={44} />
      <span className="logo__name">
        E-FIBER <small>S.A.C.</small>
      </span>
    </span>
  );
}
