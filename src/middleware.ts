import { sequence } from 'astro:middleware'
import type { MiddlewareHandler } from 'astro'

export type LocalsMiddleware = {
  foo: string
}

export const onRequest: MiddlewareHandler = sequence(async (ctx, next) => {
  let { locals } = ctx

  locals.foo = 'Astro Base Template'

  return next()
})
