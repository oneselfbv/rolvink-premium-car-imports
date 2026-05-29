import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://www.rolvinkpremiumcarimports.nl',
  trailingSlash: 'never',
  integrations: [
    mdx(),
    sitemap({
      serialize(item) {
        // Strip trailing slashes so sitemap URLs match canonical convention exactly.
        // Root URL keeps its trailing slash per sitemap-protocol convention.
        if (item.url !== 'https://www.rolvinkpremiumcarimports.nl/') {
          item.url = item.url.replace(/\/$/, '');
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
