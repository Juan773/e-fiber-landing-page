import type { ReactNode } from "react";

interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeading({ id, eyebrow, title, subtitle, light }: SectionHeadingProps) {
  return (
    <div className={`section-heading${light ? " section-heading--light" : ""}`}>
      <p className={`eyebrow${light ? " eyebrow--light" : ""}`}>{eyebrow}</p>
      <h2 id={id} className="section-title">
        {title}
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
