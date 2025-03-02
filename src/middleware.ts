import { clone } from 'lodash-es'
import type { MiddlewareHandler } from 'astro'
import { sequence } from 'astro:middleware'
import { appRouter } from './api'
import { createCallerFactory } from './trpc'

let createCaller = createCallerFactory(appRouter)

export type LocalsMiddleware = {
  api: ReturnType<typeof createCaller>
  foo: string
}

export const onRequest: MiddlewareHandler = sequence(async (ctx, next) => {
  let { locals } = ctx

  locals.foo = 'Astro Base Template'

  locals.api = createCaller(clone(locals))

  return next()
})
