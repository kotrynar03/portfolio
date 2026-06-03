// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";


import netlify from "@astrojs/netlify";


import react from "@astrojs/react";


// https://astro.build/config
export default defineConfig({
  site: "https://kotrynar03.github.io",

  base: '/portfolio/',
  server: { port: 4321, host:true},

  vite: {
 plugins: [tailwindcss()],
},

  adapter: netlify(),
  integrations: [react()],
});