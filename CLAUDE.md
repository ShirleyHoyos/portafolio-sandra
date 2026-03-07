# CLAUDE.md

Portafolio web de Sandra Shirley Hoyos Cruzado — Psicóloga Clínica y Organizacional.

## Comandos

```bash
npm run dev      # Servidor local → http://localhost:4321/portafolio-sandra
npm run build    # Build estático → dist/
npm run preview  # Previsualizar el build en local
```

## Stack

- **Framework:** Astro 5 (SSG estático, sin frameworks JS)
- **CSS:** CSS custom properties en `src/styles/global.css`, estilos scoped por componente
- **Formulario:** Formspree (FREE — configurar Form ID en `src/components/Contact.astro`)
- **Deploy:** GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)

## Arquitectura

Sitio de una sola página (`src/pages/index.astro`) que compone 8 componentes en orden:

```
Header → Hero → About → Services → Experience → Education → Achievements → Contact
```

## Archivos clave

| Archivo | Rol |
|---|---|
| `src/styles/global.css` | Design tokens (CSS vars), reset, utilidades globales |
| `src/layouts/Layout.astro` | Shell HTML, meta SEO, importa global.css |
| `src/components/Hero.astro` | Sección principal con foto (sandra.jpg) a la derecha |
| `src/components/Contact.astro` | Formulario Formspree — reemplazar `YOUR_FORM_ID` |
| `astro.config.mjs` | `base: '/portafolio-sandra'` — actualizar `site` con usuario GitHub |
| `public/sandra.jpg` | Foto de perfil de Sandra |
| `public/.nojekyll` | Desactiva Jekyll en GitHub Pages (crítico) |
| `.github/workflows/deploy.yml` | CI/CD — deploy automático al hacer push a `main` |

## Paleta de diseño

| Variable | Valor | Uso |
|---|---|---|
| `--color-primary` | `#7C9A7E` | Verde salvia — botones, acentos |
| `--color-bg` | `#FAF7F2` | Crema claro — fondo principal |
| `--color-bg-alt` | `#F0EBE3` | Crema oscuro — secciones alternas |
| `--color-accent` | `#C4956A` | Terracota — fechas, etiquetas |
| `--color-text` | `#3D3530` | Marrón oscuro cálido — texto |
| `--font-heading` | Georgia, serif | Titulares |
| `--font-body` | Inter, system-ui | Cuerpo de texto |

## Secciones del portafolio

1. **Hero** — Nombre, C.P.PS. 44938, badge de título, tagline, foto de Sandra, 2 CTAs
2. **Sobre mí** — Resumen profesional + 4 stat cards (5+ años, 3 enfoques, 2 reconocimientos, 2 ponencias)
3. **Servicios** — 6 tarjetas: Terapia Individual, Terapia de Pareja, Evaluación Psicológica, Programas de Bienestar, Psicología Educativa, Psicología Organizacional
4. **Experiencia** — Timeline vertical de 7 puestos (más reciente primero)
5. **Formación** — 2 títulos académicos + 5 especializaciones + 6 cursos
6. **Logros** — 2 reconocimientos laborales + 2 ponencias en congresos
7. **Contacto** — Info (email, WhatsApp, LinkedIn) + formulario Formspree con 6 campos

## Datos de contacto de Sandra

- **Email:** shir.hc16@gmail.com
- **Teléfono/WhatsApp:** (+51) 986625219
- **LinkedIn:** https://www.linkedin.com/in/shirley-hoyos-cruzado-569041283/
- **C.P.PS.:** 44938

## Pendiente antes del deploy

1. **`astro.config.mjs`** — reemplazar `TU_USUARIO` con el usuario real de GitHub
2. **`src/components/Contact.astro` línea 5** — reemplazar `YOUR_FORM_ID` con el ID de Formspree
   - Crear cuenta en formspree.io con shir.hc16@gmail.com
   - Crear form "Consultas — Sandra Hoyos" y copiar el ID
3. Crear repositorio `portafolio-sandra` en GitHub
4. Push a `main` → GitHub Actions despliega automáticamente
5. Activar GitHub Pages: Settings > Pages > Source: **GitHub Actions**
