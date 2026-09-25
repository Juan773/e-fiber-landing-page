# E-Fiber — Landing page

Landing page de **E-Fiber S.A.C.**, proveedor de Internet por fibra óptica.
Construida con **React 18 + Vite 5 + TypeScript**, sin librerías de UI (íconos SVG propios y CSS puro).

## Requisitos

- Node.js **18 o superior** (recomendado 22, ver `.nvmrc`).

## Ejecutar

```bash
nvm use          # usa Node 22
npm install
npm run dev      # http://localhost:5173
```

Compilar para producción:

```bash
npm run build    # genera /dist
npm run preview  # sirve /dist localmente
```

## Editar contenido

Todo el contenido comercial está centralizado:

| Archivo | Qué contiene |
|---|---|
| `src/data/plans.ts` | Planes: nombre, velocidad, precio, características, etiqueta "Más elegido" y planes del hero |
| `src/data/site.ts` | WhatsApp, teléfonos, correo, dirección, horario, zonas de cobertura, referidos, redes sociales y mensajes de WhatsApp |

- Las redes sociales solo se muestran si tienen URL en `socials`.
- Los mensajes de WhatsApp se generan con `src/lib/whatsapp.ts` (codificados con `encodeURIComponent`).

## Estructura

```
src/
  components/   Header, Hero, Plans, Benefits, Referral, WhyFiber, Coverage, Uses, FinalCTA, Footer, WhatsAppButton…
  data/         plans.ts, site.ts
  lib/          whatsapp.ts
  assets/       fotos recortadas de los flyers (WebP)
  styles/       global.css
public/         favicon.svg, og-image.jpg
```

Los PNG de la raíz son los flyers de referencia originales; no se publican en el sitio.
