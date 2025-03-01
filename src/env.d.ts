/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

import type { LocalsMiddleware } from '~/middleware'

declare global {
  declare namespace App {
    interface Locals extends LocalsMiddleware {}
  }
}
