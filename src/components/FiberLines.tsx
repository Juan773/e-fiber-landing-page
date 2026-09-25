/** Líneas de luz decorativas que evocan hilos de fibra óptica. */
export default function FiberLines({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1440 600" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="fiber-a" x1="0" x2="1">
          <stop offset="0" stopColor="#3CD3FF" stopOpacity="0" />
          <stop offset=".55" stopColor="#3CD3FF" stopOpacity=".85" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="fiber-b" x1="0" x2="1">
          <stop offset="0" stopColor="#F26A1B" stopOpacity="0" />
          <stop offset=".6" stopColor="#FF9A4D" stopOpacity=".7" />
          <stop offset="1" stopColor="#F26A1B" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g fill="none" strokeLinecap="round">
        <path className="fiber fiber--1" d="M-40 470 C 300 380, 620 560, 980 430 S 1380 300, 1480 340" stroke="url(#fiber-a)" strokeWidth="2.5" />
        <path className="fiber fiber--2" d="M-40 510 C 340 420, 640 600, 1000 470 S 1400 360, 1480 390" stroke="url(#fiber-a)" strokeWidth="1.5" />
        <path className="fiber fiber--3" d="M-40 545 C 360 470, 700 620, 1040 510 S 1400 420, 1480 440" stroke="url(#fiber-b)" strokeWidth="2" />
        <path className="fiber fiber--4" d="M-40 120 C 260 60, 520 180, 820 90 S 1280 40, 1480 80" stroke="url(#fiber-a)" strokeWidth="1" opacity=".5" />
      </g>
    </svg>
  );
}
