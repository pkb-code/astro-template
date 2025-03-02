import '~/utils/superjson'
import type { App } from 'vue'
import { sentryVue } from '@altipla/sentry-astro/vue'
import Aura from '@primeuix/themes/aura'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import Tooltip from 'primevue/tooltip'
import { definePreset } from '@primeuix/themes'
import { es } from 'primelocale/es.json'
import '~/styles/tailwind.css'

let preset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{sky.50}',
      100: '{sky.100}',
      200: '{sky.200}',
      300: '{sky.300}',
      400: '{sky.400}',
      500: '{sky.500}',
      600: '{sky.600}',
      700: '{sky.700}',
      800: '{sky.800}',
      900: '{sky.900}',
      950: '{sky.950}',
    },
  },
})

export default (app: App) => {
  sentryVue(app)

  if (!import.meta.env.SSR) {
    app.use(PrimeVue, {
      theme: {
        preset,
        options: {
          darkModeSelector: 'none',
          cssLayer: {
            name: 'primevue',
            order: 'theme, base, primevue, components, utilities',
          },
        },
      },
      locale: es,
    })
    app.directive('tooltip', Tooltip)
    app.use(ToastService)
  }
}
