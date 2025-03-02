import { router } from '~/trpc'
import { foo } from './foo'

export const appRouter = router({
  foo,
})
export type AppRouter = typeof appRouter
