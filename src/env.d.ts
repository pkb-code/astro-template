/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module '*.ce.vue' {
  import { VueElementConstructor } from 'vue'
  const Component: ReturnType<VueElementConstructor>
  export default Component
}
declare module '*.vue' {
  import { defineComponent } from 'vue'
  const Component: ReturnType<typeof defineComponent>
  export default Component
}

import type { LocalsMiddleware } from '~/middleware'
declare global {
  declare namespace App {
    interface Locals extends LocalsMiddleware {}
  }
}
