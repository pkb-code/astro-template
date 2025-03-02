import type { APIRoute } from 'astro'
import { appRouter } from '~/api'
import { createContext } from '~/trpc'
import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { sentryTRPC } from '@altipla/sentry-astro/trpc'

export let ALL: APIRoute = async ({ request, locals }) => {
  return await fetchRequestHandler({
    req: request,
    router: appRouter,
    endpoint: '/api/trpc',
    createContext: () => createContext(request, locals),
    onError: sentryTRPC,
  })
}
