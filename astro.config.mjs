// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://baptisteboussemart.github.io',
  output: 'static',
  i18n: {
    locales: ['fr', 'en', 'es'],
    defaultLocale: 'fr',
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
