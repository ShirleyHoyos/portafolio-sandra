// @ts-check
import { defineConfig } from 'astro/config';

// IMPORTANTE: Actualiza estas dos líneas antes de hacer deploy a GitHub Pages:
// - site: URL base de tu GitHub Pages (ej: 'https://tu-usuario.github.io')
// - base: nombre exacto del repositorio en GitHub (ej: '/portafolio-sandra')

export default defineConfig({
  site: 'https://ShirleyHoyos.github.io',
  base: '/portafolio-sandra',
  output: 'static',
  build: {
    assets: '_assets',  // Evita problemas con Jekyll en GitHub Pages
  },
});
