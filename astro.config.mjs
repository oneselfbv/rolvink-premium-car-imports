import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://www.rolvinkpremiumcarimports.nl',
  trailingSlash: 'always',
  integrations: [
    mdx(),
    sitemap({
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
