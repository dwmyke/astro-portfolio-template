import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: "https://mikewest.site/",
    vite: {
        ssr: {
          external: ["svgo"],
        },
      },
});
