import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'
import type { AppRouter } from '~/api'
import superjson from 'superjson'

let api = createTRPCProxyClient<AppRouter>({
  transformer: superjson,
  links: [httpBatchLink({ url: `/api/trpc` })],
})

export function useAPI() {
  return api
}
