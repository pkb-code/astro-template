import { initTRPC } from '@trpc/server'
import { omit } from 'lodash-es'
import superjson from 'superjson'

export async function createContext(request: Request, locals: App.Locals) {
  return {
    ...omit(locals, 'api'),
  }
}

let t = initTRPC.context<Awaited<ReturnType<typeof createContext>>>().create({
  transformer: superjson,
})

export const router = t.router
export const middleware = t.middleware
export const createCallerFactory = t.createCallerFactory
export const procedure = t.procedure
