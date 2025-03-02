import { defineConfig } from 'astro/config'
import node from '@astrojs/node'
import tailwindcss from '@tailwindcss/vite'
import vue from '@astrojs/vue'
import { sentryAstro } from '@altipla/sentry-astro'

export default defineConfig({
  integrations: [
    sentryAstro({
      forceEnabled: true,
      debug: true,
      sourceMaps: {
        project: 'pkbcode-backends-node',
        org: 'pkbcode',
      },
    }),
    vue({
      appEntrypoint: 'app.ts',
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'server',
  trailingSlash: 'never',
  adapter: node({
    mode: 'standalone',
  }),
  build: {
    format: 'file',
  },
})
