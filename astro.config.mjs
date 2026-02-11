// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://baptisteboussemart.github.io',
  output: 'static',
  i18n: {
    locales: ['en', 'fr', 'es'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false, // / sert index.astro (home EN), pas de redirection vers /en/
    },
  },
});
