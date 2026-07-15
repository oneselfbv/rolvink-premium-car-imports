import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel';

// Output blijft 'static' (default): de hele site wordt vooraf gegenereerd.
// De Vercel-adapter maakt on-demand routes mogelijk voor pagina's/endpoints
// die expliciet `export const prerender = false` zetten (bv. /api/zoekprofiel).
export default defineConfig({
  site: 'https://www.rolvinkpremiumcarimports.nl',
  trailingSlash: 'always',
  adapter: vercel(),
  // Meertaligheid: NL blijft op de root (geen prefix), en/de/es/fr onder /en/ etc.
  // Componenten localiseren zichzelf via Astro.currentLocale + src/i18n/.
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl', 'en', 'de', 'es', 'fr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    mdx(),
    sitemap({
      // Sluit noindex/interne pagina's uit de sitemap (voorkomt "Submitted URL marked noindex" in GSC).
      filter: (page) => !page.includes('/referenties') && !page.includes('/intern'),
      serialize(item) {
        // Ensure trailing slash to match Vercel directory-style serving + BaseLayout canonical.
        if (!item.url.endsWith('/')) {
          item.url += '/';
        }
        return item;
      },
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
